import Dictionary from "../../framework/utils/Dictionary";
import ResourceManager from "../../framework/resourceManager/ResourceManager";
import { UIID } from "./UIIDDefine";
import { BaseUICtrl, UIAutoCloseType, UIShowType } from "./BaseUICtrl";
import { ConfigManager } from "../manager/ConfigManager";
import { NotificationNames } from "../data/const/NotificationNames";
import { UIParamStruct, WindowContextDataBase } from "./UIParamStruct";
import { UIFactory } from "./UIFactory";
import { ZOrderDefine } from "../data/const/ZOrderDefine";
import Log from "../../framework/utils/Log";
import { LoadingUIUIController } from "./uicontrollers/LoadingUIUIController";
/**
* name 
*/
// module ui {
export class UIMediator extends puremvc.Mediator {

	private initCallback: Function;

	private uiParent: Laya.Sprite; //UI的父节点
	private allUIDic: Dictionary;
	private showUIDic: Dictionary;
	private loadingUIDic: Dictionary; //正在加载的UI

	private static _instance: UIMediator;
	public static GetInstance(): UIMediator {
		if (UIMediator._instance == null) {
			UIMediator._instance = new UIMediator();
		}
		return UIMediator._instance;
	}

	constructor() {
		super();
		puremvc.Facade.getInstance().registerMediator(this);
	}

	//初始化UI, 加载图集
	//callback 初始化完成回调
	public Init(callback: () => void): void {
		this.allUIDic = new Dictionary();
		this.showUIDic = new Dictionary();
		this.loadingUIDic = new Dictionary();
		//父节点
		this.uiParent = new Laya.Sprite();
		this.uiParent.name = "uiparentNode"
		Laya.stage.addChild(this.uiParent);
		this.uiParent.zOrder = ZOrderDefine.UI //默认0会被Scene场景遮挡

		this.initCallback = callback;

		var loadItem =
			[
				//需要进度条之类的可以放在这里加载

			]

		if (loadItem.length > 0) {
			ResourceManager.Instance.LoadResArray(loadItem, () => {
				this.onFinishInit();
			})
		} else {
			this.onFinishInit();
		}
	}

	//统一初始化的ui图集资源, 时间点可以和common图集的不同
	public GetResItem(arrItem) {
		var m_LoadItem =
			[
				// { url: "res/atlas/common.atlas", type: Laya.Loader.ATLAS },
				{ url: "unpack.json", type: Laya.Loader.JSON },
			]
		for (let i: number = 0; i < m_LoadItem.length; i++) {
			arrItem.push(m_LoadItem[i]);
		}
	}

	private onFinishInit(): void {
		if (this.initCallback != null) {
			this.initCallback();
		}
	}
	//end 初始化---

	//打开/关闭------------------------
	public Open(id: UIID, context: WindowContextDataBase = null): void {
		if (this.IsLoadingUI(id)) {
			Log.Warn("UI正在打开, 不重复打开." + id.toString())
			return;
		}
		if (this.IsShowing(id)) {
			Log.Warn("UI已经打开, 不重复打开." + id.toString())
			return;
		}

		//添加正在加载中
		this.AddLoadingUI(id);

		//图集是否加载, 否则先加载图集
		let config = ConfigManager.Instance.GetUIConfig(id);
		if (config && config.showLoading) {
			LoadingUIUIController.Instance.SetActive(true, null, null, "UI资源准备中...")
			LoadingUIUIController.Instance.SetLoadingActive(true)
		}
		//Log.Debug("laod atlas " + new Date().toLocaleTimeString())
		let startFrame = Laya.timer.currFrame;
		this.loadAtlasBeforeOpen(id,
			() => {
				//Log.Debug("laod atlas loaed" + new Date().toLocaleTimeString())
				this.prepareUI(id, this.uiParent, (uictrl) => {
					//Log.Debug("atlas prepared" + new Date().toLocaleTimeString())
					let onLoadingClosed = () => {
						this.doBeforeUIOpen(id);//打开ui前操作
						uictrl.Open(context);
						this.AddShowUI(id, uictrl);
						this.RemoveLoadingUI(id);
					}

					if (config && config.showLoading) {
						let offset = Laya.timer.currFrame - startFrame; //一个frame内加载完, 说明图集有缓存
						//Log.Debug("on atlas loaded " + offset)
						LoadingUIUIController.Instance.SetActive(false, offset <= 0, onLoadingClosed)
					} else {
						onLoadingClosed();
					}

				}, context);
			},
			(progress) => {
				//显示进度
				if (config && config.showLoading) this.sendNotification(NotificationNames.LoadingUIProgress, progress)
			})
	}

	/**
	 * 生成对应的uictrl
	 * @param id 
	 * @param parent 
	 * @param onUIPrepared 
	 */
	private prepareUI(id: UIID, parent: Laya.Sprite, onUIPrepared: Function, context: WindowContextDataBase = null) {
		let uictrl = this.allUIDic.get(id) as BaseUICtrl;
		if (uictrl == null) {
			UIFactory.Create(id, (createduiCtrl: BaseUICtrl) => {
				//Log.Debug("UI created" + new Date().toLocaleTimeString())
				uictrl = createduiCtrl;
				let callback: Function = () => {//等ui适配完成, 再打开UI, 否则新手引导CommonUtil切换父节点位置不对.
					this.AddInstantiated(id, uictrl)
					onUIPrepared(uictrl)
				}
				uictrl.Init(parent, id, context, () => {
					//Log.Debug("UI init" + new Date().toLocaleTimeString())
					let temp = callback;
					callback = null;
					if (temp) temp(); //resize 会回调多次, 只执行一次就可以, 在UITween动画时候回连续触发Resize信息
				});

			});
		} else {
			onUIPrepared(uictrl)
		}
		// return uictrl;
	}

	/**
	 * 隐藏ui
	 * @param id 
	 * @param isAuto 是否是UI打开前, 根据配置自动关闭其他 
	 */
	public Hide(id: UIID, isAuto: boolean = false, callback = null): void {
		if (isAuto) {
			//自动关闭, 检测是否会被其他ui关闭
			let config = ConfigManager.Instance.GetUIConfig(id);
			if (config && config.uiAutoCloseType == UIAutoCloseType.NotAffectedByOthers) return;
		}
		let uictrl = this.GetShowUI(id);
		if (uictrl != null) {
			uictrl.Hide(() => {
				this.RemoveShowUI(id);
				if (callback) callback();
			});
		}
	}

	/**
	 * 隐藏全部UI
	 * @param isAuto 是否是UI打开前, 根据配置自动关闭其他 
	 */
	public HideAll(isAuto: boolean = false) {
		let idArray = this.showUIDic.keys;
		idArray.forEach(id => {
			this.Hide(id, isAuto)
		});
	}
	//end 打开/关闭---

	//销毁---
	public Destroy(id: UIID): void {
		let uictrl = this.GetInstantiated(id);
		if (uictrl != null) {
			this.Hide(id, false, () => {
				uictrl.Destroy();
				this.RemoveInstantiated(id);
				this.releaseAtlasOnDestory(id)//卸载图集
				this.releaseUnpackImageOnDestory(id)//卸载散图
			});//从showuiDic删除

		}
	}

	public DestroyAll() {
		//复制所有ui的key, 防止循环中删除key
		let keys = []
		for (let index = 0; index < this.allUIDic.keys.length; index++) {
			let element = this.allUIDic.keys[index];
			keys.push(element)
		}
		//destory所有
		for (var index = 0; index < keys.length; index++) {
			var element = keys[index];
			this.Destroy(element)
		}
		this.showUIDic.clear();
		this.allUIDic.clear();
		this.loadingUIDic.clear();
	}
	//end 销毁------

	//private tools------------------------------------------------------------------------------

	//已经打开的UI
	private IsShowing(id: UIID): boolean {
		return this.showUIDic.get(id) != null;
	}
	private GetShowUI(id: UIID): BaseUICtrl {
		return this.showUIDic.get(id) as BaseUICtrl;
	}
	private AddShowUI(id: UIID, showui: BaseUICtrl) {
		this.showUIDic.set(id, showui);
	}
	private RemoveShowUI(id: UIID) {
		this.showUIDic.remove(id);
	}

	//已经实例化的UI
	private IsInstantiated(id: UIID): boolean {
		return this.allUIDic.get(id) != null;
	}
	private GetInstantiated(id: UIID): BaseUICtrl {
		return this.allUIDic.get(id) as BaseUICtrl;
	}
	private AddInstantiated(id: UIID, intanceUI: BaseUICtrl) {
		this.allUIDic.set(id, intanceUI);
	}
	private RemoveInstantiated(id: UIID) {
		this.allUIDic.remove(id);
	}

	//正在加载中的UI
	private IsLoadingUI(id: UIID): boolean {
		return this.loadingUIDic.get(id) != null;
	}
	private AddLoadingUI(id: UIID) {
		this.loadingUIDic.set(id, true);
	}
	private RemoveLoadingUI(id: UIID) {
		this.loadingUIDic.remove(id);
	}

	/**
	 * 打开ui前操作, 关闭其他ui
	 * @param id 打开uiid
	 */
	private doBeforeUIOpen(id: UIID) {
		let config = ConfigManager.Instance.GetUIConfig(id);
		if (config && config.uiShowType == UIShowType.HideOthers) {
			this.HideAll(true);
		}
	}

	//打开前加载图集
	private loadAtlasBeforeOpen(id: UIID, comFunc: Function, progressFun: Function = null) {
		let config = ConfigManager.Instance.GetUIConfig(id);
		if (config && config.atlas.length > 0) {
			let atlasNames = config.atlas;// StringParseUtil.SplitString(config.atlas, StringParseUtil.SPLIT_Comma)
			let toLoad = [];
			//加载图集
			for (let index = 0; index < atlasNames.length; index++) {
				const tempAtlas = atlasNames[index];
				let atlasLoaded = ResourceManager.Instance.checkResLoaded(tempAtlas);
				if (!atlasLoaded) toLoad.push(tempAtlas)
			}
			//加载散图
			let spriteNames = config.unpackImagList
			for (let index = 0; index < spriteNames.length; index++) {
				const tmpSprite = spriteNames[index];
				let tempLoaded = ResourceManager.Instance.checkResLoaded(tmpSprite);
				if (!tempLoaded) toLoad.push(tmpSprite)
			}
			if (toLoad.length > 0) {
				ResourceManager.Instance.LoadResArray(toLoad, () => this.onAtlasLoadedForOpen(comFunc), null, progressFun);
			} else {
				comFunc();
			}
		} else {
			//没有图集配置
			comFunc();
		}
	}
	private onAtlasLoadedForOpen(comFunc: Function) {
		comFunc();
	}
	//卸载图集
	private releaseAtlasOnDestory(id: UIID) {
		let config = ConfigManager.Instance.GetUIConfig(id);
		if (config && config.atlas.length > 0) {// config.atlas != null && config.atlas.trim() != "") {
			let atlasNames = config.atlas;// StringParseUtil.SplitString(config.atlas, StringParseUtil.SPLIT_Comma)
			for (let index = 0; index < atlasNames.length; index++) {
				const temp = atlasNames[index];
				ResourceManager.Instance.Release(temp)
			}

		}
	}
	//卸载ui制作中使用散图
	private releaseUnpackImageOnDestory(id: UIID) {
		let config = ConfigManager.Instance.GetUIConfig(id);
		if (config && config.unpackImagList && config.unpackImagList.length > 0) {
			for (let index = 0; index < config.unpackImagList.length; index++) {
				let imagePath = config.unpackImagList[index].trim();
				if (imagePath != "") {
					ResourceManager.Instance.Release(imagePath)
				}
			}
		}
	}
	//end private tools------------------------------------------------------------------------------

	//Mediator---
	/**
	 * @override
	 */
	listNotificationInterests(): string[] {
		return [
			NotificationNames.OPENUI,
			NotificationNames.OPENUIWITHPARAM,
			NotificationNames.HIDEUI,
			NotificationNames.DESTROYUI,
			NotificationNames.DESTROYALLUI,
			NotificationNames.HIDEALLUI,
		];
	}

	/**
	 * @override
	 */
	handleNotification(note: puremvc.INotification): void {
		switch (note.getName()) {
			case NotificationNames.OPENUI:
				{
					let id = note.getBody() as UIID;
					this.Open(id);
					break;
				}
			case NotificationNames.OPENUIWITHPARAM:
				{
					let param = note.getBody() as UIParamStruct;
					this.Open(param.ID, param);
					break;
				}
			case NotificationNames.HIDEUI:
				{
					let id = note.getBody() as UIID;
					this.Hide(id);
					break;
				}
			case NotificationNames.DESTROYUI:
				{
					let id = note.getBody() as UIID;
					this.Destroy(id);
					break;
				}
			case NotificationNames.DESTROYALLUI:
				{
					this.DestroyAll();
					break;
				}
			case NotificationNames.HIDEALLUI:
				{
					this.HideAll();
					break;
				}
		}
	}
	//end Mediator---
}
// }