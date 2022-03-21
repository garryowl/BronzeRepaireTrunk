/**
* Created By Code Generator
*/
import Facade = puremvc.Facade;
import View = Laya.View;
import Mediator = puremvc.Mediator;
import { BaseUICtrl } from "../BaseUICtrl";
import { ui } from "../../../ui/layaMaxUI";
import { UIID } from "../UIIDDefine";
import { NotificationNames } from "../../data/const/NotificationNames";
import { TimeManager } from "../../../framework/utils/timer/TimeManager";
import { cbhandler } from "../../../framework/utils/timer/cbhandler";


export class LoadingUIUIController extends BaseUICtrl {
    private static _instance: LoadingUIUIController;
    public static get Instance(): LoadingUIUIController {
        if (this._instance == null) {
            this._instance = new LoadingUIUIController(null);
        }
        return this._instance;
    }

    constructor(view: View) {
        super(null)
    }

    private loadingUI: ui.uiprefab.LoadingUIUI;
    private curUpdateTimer: number = -1; //当前的计时器
    private curTargetProgress: number = 0; //当前目标进度
    private curProgress: number = 0;   //当前显示进度
    private onProgressReachEnd: Function = null;//当前进度条到达终点
    private curIncreStep: number = 0;//当前进度动画0.5s需要增加的进度.
    public Init() {
        this.mediatorName = UIID.LoadingUIUIID.toString();

        this.loadingUI = new ui.uiprefab.LoadingUIUI();
        Laya.stage.addChild(this.loadingUI); //添加到staget
        this.loadingUI.zOrder = 100;//ZOrderDefine.NewbieGuideUI_ZORDER
        this.SetActive(true)
        this.RegisterEvent();
    }
    //设置进度, width 如果设置为0, 会导致mask失效,需要设置至少为1
    public InitProgress(progress: number) {
        this.loadingUI.UI_ProgressMask.width = progress * this.loadingUI.UI_ProgressUpper.width;
        this.curTargetProgress = progress;
        this.curProgress = progress;
    }

    //设置目标进度
    public SetTargetProgress(progress: number) {
        this.curTargetProgress = progress;
        this.curIncreStep = this.curTargetProgress - this.curProgress;
    }

    //更新进度
    public UpdatreProgress(dt: number) {
        if (this.curProgress < this.curTargetProgress) {
            let incre = this.curIncreStep;
            incre = incre < 0.1 ? 0.1 : incre;
            this.curProgress += 1 / 0.5 * incre * dt;//0.5秒走到目标
            if (this.curProgress > 1) this.curProgress = 1;
            this.loadingUI.UI_ProgressMask.width = this.curProgress * this.loadingUI.UI_ProgressUpper.width;
            if (this.curProgress == 1 && this.onProgressReachEnd) this.onProgressReachEnd()
            // Log.Debug("this.curpo " + this.curProgress)
        }
    }


    /**
     * //设置UI是否显示
     * @param active 
     * @param forceClose 是否立刻关闭, 或则由于loadArray的progress会在加载到0.3-0.8的时候立刻到1,人为过度到1. 
     * @param onClosed 当前loadiing关闭时候的回调
     */
    public SetActive(active: boolean, forceClose: boolean = true, onClosed: Function = null, prompt: string = "") {
        //关闭前, 是走到100再关闭. 还是立刻关闭
        if (!active) {
            if (forceClose) {
                //立刻关闭
                this.loadingUI.visible = active;
                // this.loadingUI.pos(100000, 0)
                this.InitProgress(0.01);
                if (this.curUpdateTimer >= 0) TimeManager.Instance.remove(this.curUpdateTimer);
                this.curUpdateTimer = -1;
                if (onClosed) onClosed();
            } else {
                //走到1关闭
                this.onProgressReachEnd = () => {
                    this.SetActive(false, true)
                    if (onClosed) onClosed();
                }
                //已经到1, 直接执行回调. 否则等待动画进度走满
                if (this.curProgress >= 1) {
                    this.onProgressReachEnd();
                } else {
                    this.SetTargetProgress(1);
                }

            }
        } else {
            //显示UI
            this.loadingUI.visible = active;
            //this.loadingUI.pos(0, 0)
            this.InitProgress(0.01);
            if (this.curUpdateTimer >= 0) TimeManager.Instance.remove(this.curUpdateTimer);
            this.curUpdateTimer = TimeManager.Instance.addUpdater(cbhandler.gen_handler(this.UpdatreProgress, this))
            //设置提示文字
            this.loadingUI.UI_Prompt_Text.text = prompt
        }
    }


    //设置Loding的显示
    public SetLoadingActive(active: boolean) {
        this.loadingUI.UI_LoadingIcon.visible = active;
        this.loadingUI.UI_ProgressBottom.visible = active;
    }

    //销毁
    public Destroy() {
        this.RemoveEvent();
        this.loadingUI.destroy(true);
        this.loadingUI = null;
    }

    private RegisterEvent(): void {
        Facade.getInstance().registerMediator(this)
        this.loadingUI.on(Laya.Event.CLICK, this, this.onLoadingUIClick);

    }

    private RemoveEvent(): void {
        Facade.getInstance().removeMediator(this.getMediatorName());
        this.loadingUI.on(Laya.Event.CLICK, this, this.onLoadingUIClick);
    }

    onLoadingUIClick(e: Laya.Event) {
        e.stopPropagation();//阻止点击事件下传
    }
    /**
     * @override
     */
    listNotificationInterests(): string[] {
        return [
            NotificationNames.LoadingUIProgress,
        ];
    }

    /**
    * @override
    */
    handleNotification(note: puremvc.INotification): void {
        switch (note.getName()) {
            case NotificationNames.LoadingUIProgress: {
                let progress: number = note.getBody();
                if (progress < this.curProgress) return;//不后退
                this.SetTargetProgress(progress)
                break;
            }
        }
    }
}

