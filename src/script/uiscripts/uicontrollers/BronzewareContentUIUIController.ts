/**
* Created By Code Generator
*/
import Facade = puremvc.Facade;
import View = Laya.View;
import { BaseUICtrl } from "../BaseUICtrl";
import { WindowContextDataBase } from "../UIParamStruct";
import { ui } from "../../../ui/layaMaxUI";
import { UIID } from "../UIIDDefine";
import { GameConfigRow } from "../../data/config/GameConfigRow";
import { ConfigManager } from "../../manager/ConfigManager";
import { ConstDefine } from "../../data/const/ConstDefine";
import { TimeManager } from "../../../framework/utils/timer/TimeManager";
import { cbhandler } from "../../../framework/utils/timer/cbhandler";
import { NotificationNames } from "../../data/const/NotificationNames";
import { VideoConfigRow } from "../../data/config/VideoConfigRow";
import ResourceManager from "../../../framework/resourceManager/ResourceManager";
import { PictureConfigRow } from "../../data/config/PictureConfigRow";
import { TextConfigRow } from "../../data/config/TextConfigRow";
import { GameUIManager } from "../../manager/GameUIManager";
import CommonUtil from "../../../framework/utils/CommonUtil";
import { WechatUtil } from "../../../framework/utils/wechatutil/WechatUtil";

export class BronzewareContentUIUIController extends BaseUICtrl {


    private gameConfigs: GameConfigRow[] = [];

    private configIndex: number = 0;

    private nowstage: number = 0;

    private reference: Laya.Sprite;//视频大小sprite

    private videoCount: number = 1;

    private videoElement: any;//视频dom

    private totalClick: number = 0;

    private greenCount: number = 0;

    private blackCount: number = 0;

    private videoTop: number = 100 + 60;

    constructor(view: View) {
        super(view);
    }

    public GetView(): ui.uiprefab.BronzewareContentUIUI {
        return this.uiView as ui.uiprefab.BronzewareContentUIUI;
    }

    /**
     * @override
     */
    public Init(parent: Laya.Sprite, id: UIID, context: WindowContextDataBase = null, onResized: Function = null) {
        super.Init(parent, id, context, onResized);
        this.mediatorName = UIID.BronzewareContentUIUIID.toString();

        //添加舞台
        parent.addChild(this.uiView)
        this.uiView.zOrder = this.uiConfig.depth;



        this.RegisterEvent();
    }

    //自适应
    protected OnUIResize(onResized: Function = null) {
        super.OnUIResize(onResized)
    }

    /**
     * @override
     */
    //ui动画执行前
    protected BeforeUIOpen(context: WindowContextDataBase = null) {
        super.BeforeUIOpen(context);


    }
    /**
    * @override
    */
    //ui打开动画完成
    protected OnUIOpened(context: WindowContextDataBase = null) {

        //初始化data
        this.InitData();
        //将super.OnUIOpened()放最后执行
        super.OnUIOpened(context);
        Laya.stage.addChild(this.uiView)
        GameUIManager.Instance.Init();
        // console.log(Laya.stage)
    }
    /**
     * @override
     */
    //ui关闭动画完成
    protected OnUIHide() {
        super.OnUIHide();
    }
    /**
     * @override
     */
    protected BeforeUIDestroy() {
        this.RemoveEvent();
    }

    private RegisterEvent(): void {
        Facade.getInstance().registerMediator(this)
        this.GetView().UI_next_Btn.on(Laya.Event.CLICK, this, this.OnUI_next_BtnClick);
        this.GetView().UI_start_Btn.on(Laya.Event.CLICK, this, this.OnUI_start_BtnClick);
    }
    private RemoveEvent(): void {
        Facade.getInstance().removeMediator(this.getMediatorName());
        this.GetView().UI_next_Btn.off(Laya.Event.CLICK, this, this.OnUI_next_BtnClick);
        this.GetView().UI_start_Btn.on(Laya.Event.CLICK, this, this.OnUI_start_BtnClick);
    }
    //<video src="res/video/0_0.mp4" x-webkit-airplay="true" playsinline="false" webkit-playsinline="false" x5-video-player-type="h5" x5-video-player-fullscreen="true" x5-video-orientation="landscape" style="transform-origin: left top; position: absolute; transform: scale(0.347157, 0.347222) rotate(0deg); width: 2339px; height: 1080px; left: 0px; top: 0px;"></video>

    OnUI_next_BtnClick() {
        GameUIManager.Instance.RemovePrefab();
        this.facade.sendNotification(NotificationNames.NEXT_STAGE)
    }

    OnUI_start_BtnClick() {
        GameUIManager.Instance.RemovePrefab();
        this.facade.sendNotification(NotificationNames.NEXT_STAGE);
    }

    /**
     * @override
     */
    listNotificationInterests(): string[] {
        let list = super.listNotificationInterests();
        return list.concat([
            NotificationNames.NEXT_STAGE,
            NotificationNames.RESTART_GAME
        ]);
    }

    /**
    * @override
    */
    handleNotification(note: puremvc.INotification): void {
        if (!this.GetView().visible) return;
        super.handleNotification(note)
        switch (note.getName()) {
            case NotificationNames.NEXT_STAGE: {

                this.HideAllUI();
                this.configIndex++;
                console.log(this.configIndex)
                if (this.configIndex > this.gameConfigs.length) return;
                let gameconfig = this.gameConfigs[this.configIndex - 1]//获取当前的config
                if (gameconfig == null) return;
                console.log("当前步骤:" + (gameconfig.stepContent));
                //如果stageCategory改变则说明进入下一阶段
                if (this.nowstage != gameconfig.stageCategory) {
                    this.nowstage = gameconfig.stageCategory;
                    this.UpdateStageUI();
                }
                this.UpdateStageTitle(gameconfig);
                //根据该步骤的类型进行不同的操作
                if (gameconfig.stepType == 1) {//文本
                    let textConfig: TextConfigRow = ConfigManager.Instance.GetTextConfig(gameconfig.eventId);
                    if (textConfig != null) {
                        // if(textConfig.textContent.length<=20){
                        //     this.GetView().UI_content_Label.align="center";
                        // }
                        // this.GetView().UI_content_Label.text="      "+textConfig.textContent;
                        this.GetView().UI_text_Img.skin = textConfig.textRes;
                        this.GetView().UI_text_Img.visible = true;
                        this.GetView().UI_textContent_Panel.visible = true;
                        //如果下一步还是文本则显示的是下一步按钮
                        if (this.gameConfigs.length > this.configIndex) {
                            let nextconfig = this.gameConfigs[this.configIndex]
                            if (nextconfig.stepType == 1) {
                                this.GetView().UI_start_Btn.visible = false;
                                this.GetView().UI_next_Btn.visible = true;
                            } else if (nextconfig.stepType == 2 || nextconfig.stepType == 3 || nextconfig.stepType == 4 || nextconfig.stepType == 5 || nextconfig.stepType == 6) {
                                this.GetView().UI_start_Btn.visible = true;
                                this.GetView().UI_next_Btn.visible = false;
                            }
                        }
                    }
                } else if (gameconfig.stepType == 2) {//视频
                    let videoc: VideoConfigRow = ConfigManager.Instance.GetVideoConfig(gameconfig.eventId);
                    this.GetView().UI_content_Img.visible = true;
                    this.GetView().UI_content_Img.skin = ConstDefine.blankColorUrl
                    if (videoc != null) {
                        this.LoadVideo(videoc.videoRes);
                        this.GetView().UI_start_Btn.visible = false;
                        this.GetView().UI_next_Btn.visible = false;
                    }
                } else if (gameconfig.stepType == 3) {//交互
                    //更换图片
                    let picConfig: PictureConfigRow = ConfigManager.Instance.GetPictureConfig(gameconfig.eventId);
                    if (picConfig != null) {
                        this.GetView().UI_content_Img.skin = picConfig.pictureRes
                        this.GetView().UI_content_Img.visible = true;
                        this.GetView().UI_start_Btn.visible = false;
                        this.GetView().UI_next_Btn.visible = false;
                    }
                    this.facade.sendNotification(NotificationNames.OPENUI, UIID.CalibrationUIUIID);
                    //this.facade.sendNotification(NotificationNames.NEXT_STAGE);
                } else if (gameconfig.stepType == 4) {//颜色
                    this.facade.sendNotification(NotificationNames.OPENUI, UIID.ColorMatchingUIUIID);
                    this.GetView().UI_start_Btn.visible = false;
                    this.GetView().UI_next_Btn.visible = false;
                } else if (gameconfig.stepType == 5) {//图片
                    //更换图片
                    let picConfig: PictureConfigRow = ConfigManager.Instance.GetPictureConfig(gameconfig.eventId);
                    if (picConfig != null) {
                        this.GetView().UI_content_Img.skin = picConfig.pictureRes
                        this.GetView().UI_content_Img.visible = true;
                        //如果下一步是图片则显示的是开始按钮
                        if (this.gameConfigs.length > this.configIndex) {
                            let nextconfig = this.gameConfigs[this.configIndex]
                            if (nextconfig.stepType == 4) {
                                this.GetView().UI_start_Btn.visible = true;
                                this.GetView().UI_next_Btn.visible = false;
                            } else {
                                this.GetView().UI_start_Btn.visible = false;
                                this.GetView().UI_next_Btn.visible = true;
                            }
                        }
                    }

                } else if (gameconfig.stepType == 6) {//自由视角
                    // Laya.stage.addChild(this.uiView)
                    // GameUIManager.Instance.Init();
                    // console.log(Laya.stage)
                    GameUIManager.Instance.AddPrefab();
                    GameUIManager.Instance.ResetCameraPos();
                    this.GetView().UI_bg_Panel.visible = false;
                    this.uiView.zOrder = 100;
                    this.uiView.updateZOrder();
                    this.GetView().UI_3DModelOpPrompt.visible = true;//显示操作提示

                    // this.GetView().UI_bg_Panel.graphics.drawTexture(GameUIManager.Instance.GetRenderTexture().defaulteTexture)
                }
                else if (gameconfig.stepType == 99) {//当前阶段结束
                    this.facade.sendNotification(NotificationNames.NEXT_STAGE);
                } else if (gameconfig.stepType == 999) {//游戏结束
                    this.facade.sendNotification(NotificationNames.OPENUI, UIID.EndUIUIID);
                }

                //如果下一步是下一阶段
                if (this.gameConfigs.length > this.configIndex && this.GetView().UI_next_Btn.visible) {
                    let nextconfig = this.gameConfigs[this.configIndex]
                    if (nextconfig.stageCategory != this.nowstage) {
                        this.GetView().UI_start_Btn.visible = true;
                        this.GetView().UI_next_Btn.visible = false;
                    }
                }

                break;
            }
            case NotificationNames.RESTART_GAME: {
                this.configIndex = 0;
                this.nowstage = 0;
                this.InitStageUI();
                this.facade.sendNotification(NotificationNames.NEXT_STAGE);
                break;
            }
        }
    }

    private InitData() {
        //获取游戏配置
        this.gameConfigs = ConfigManager.Instance.GetAllGameConfig();
        // if(this.gameConfigs!=null&&this.gameConfigs.length>0){
        //     this.nowstage = this.gameConfigs[0].stageCategory;
        // }
        //将所有ui都隐藏
        this.GetView().UI_content_Img.visible = false;
        this.GetView().UI_textContent_Panel.visible = false;
        this.InitVideo();
        this.InitStageUI();
        this.HideAllUI();
        this.GetView().UI_next_Btn.visible = false;
        this.GetView().UI_progressContent_Panel.visible = false;
        this.GetView().UI_start_Btn.visible = true;
        this.GetView().UI_start_Img.visible = true;
    }

    private InitVideo() {
        // 设置画布上的对齐参照物

        if (CommonUtil.OnMiniGame()) {

        } else {
            this.reference = new Laya.Sprite();
            Laya.stage.addChild(this.reference);
            this.reference.pos(0, this.videoTop);
            this.reference.size(Laya.stage.width, Laya.stage.height);
            this.reference.graphics.drawRect(0, this.videoTop, Laya.stage.width, Laya.stage.height - this.videoTop, "#CCCCCC");

            // 创建Video元素
            this.videoElement = Laya.Browser.createElement("video");
            Laya.Browser.document.body.appendChild(this.videoElement);
            this.videoElement.src = ConstDefine.videoResPre + "0_0~1.mp4";
            // 设置Video元素地样式和属性
            this.videoElement.style.zInddex = Laya.Render.canvas.style.zIndex + 1;
            this.videoElement.controls = false;
            this.videoElement.setAttribute("x-webkit-airplay", "true");
            this.videoElement.setAttribute("playsinline", "false");
            this.videoElement.setAttribute("webkit-playsinline", "false");   //不使用小窗播放
            this.videoElement.setAttribute("x5-video-player-type", "h5");
            this.videoElement.setAttribute("x5-video-player-fullscreen", "true"); //使用全屏
            this.videoElement.setAttribute("x5-video-orientation", "landscape"); //适配方向
            this.videoElement.style.setProperty("preload", "auto")
            //videoElement.style.setProperty("object-fit", "fill")
            // videoElement.style.position = "absolute"
            // videoElement.style.width = "100%"
            // videoElement.style.height = "100%"
            // videoElement.style.left = '0px';
            // videoElement.style.right = '0px';
            // videoElement.style.top = '0px';
            // videoElement.style.bottom = '0px';
            let that = this;
            // this.videoElement.addEventListener('timeupdate',function () {//计时
            //     let timeDisplay;
            //     //用秒数来显示当前播放进度
            //     timeDisplay = Math.floor(this.videoElement.currentTime);
            //     console.log(Math.floor(this.videoElement.currentTime))
            //     //当视频播放到 4s的时候做处理
            //     if ( timeDisplay >= this.videoElement.duration) {
            //         //处理代码
            //         that.facade.sendNotification(NotificationNames.NEXT_STAGE)
            //     }
            // }, false)
            this.videoElement.addEventListener('ended', function () {
                that.facade.sendNotification(NotificationNames.NEXT_STAGE)
            })
            Laya.Utils.fitDOMElementInArea(this.videoElement, this.reference, 0, 0, Laya.stage.width, Laya.stage.height);
            // 每次舞台尺寸变更时，都会调用Utils.fitDOMElementInArea设置Video的位置，对齐的位置和refence重合
            Laya.stage.on(Laya.Event.RESIZE, this, Laya.Utils.fitDOMElementInArea, [this.videoElement, this.reference, 0, 0, this.reference.width, this.reference.height]);

        }

    }

    private video: any = null;
    private LoadVideo(url: string) {
        if (this.videoElement == null) {
            this.InitVideo();
        }

        let videoWidth = 464
        let videoHeight = 360
        if (url.indexOf("0_0") >= 0) {
            videoWidth = 464
            videoHeight = 360
        } else if (url.indexOf("0_1") >= 0
            || url.indexOf("0_2") >= 0
            || url.indexOf("0_3") >= 0
            || url.indexOf("4_0") >= 0
            || url.indexOf("8_0") >= 0
        ) {
            videoWidth = 480
            videoHeight = 360
        } else if (url.indexOf("1_0") >= 0
            || url.indexOf("1_1") >= 0
            || url.indexOf("2_0") >= 0
            || url.indexOf("3_0") >= 0
            || url.indexOf("3_1") >= 0) {
            videoWidth = 544
            videoHeight = 360
        }
        else if (url.indexOf("5_0") >= 0
            || url.indexOf("5_1") >= 0
            || url.indexOf("6_1") >= 0
            || url.indexOf("6_2") >= 0
            || url.indexOf("7_0") >= 0
            || url.indexOf("7_1") >= 0) {
            videoWidth = 640
            videoHeight = 360
        }
        else if (url.indexOf("6_0") >= 0) {
            videoWidth = 408
            videoHeight = 360
        }

        let height = Laya.stage.height - this.videoTop;
        let width = height / videoHeight * videoWidth;

        this.GetView().UI_content_Img.width = width;
        this.GetView().UI_content_Img.height = height;
        this.GetView().UI_content_Img.bottom = 0;
        this.GetView().UI_content_Img.centerX = 0;

        if (CommonUtil.OnMiniGame()) {
            let that = this;
            if (this.video != null) WechatUtil.DestroyVideo(this.video)

            let left = Laya.stage.width * 0.5 - width * 0.5

            this.video = WechatUtil.CreateVideo(left, this.videoTop, width, height, ConstDefine.videoResPre + url,
                "http://baizhoudata.oss-cn-beijing.aliyuncs.com/bronze/bg.jpg", () => {
                    that.facade.sendNotification(NotificationNames.NEXT_STAGE)
                })
            WechatUtil.PlayVideo(this.video)
        } else {
            this.videoElement.src = ConstDefine.videoResPre + url;
            this.videoElement.load();
            this.videoElement.style.width = Laya.stage.width + "";
            this.videoElement.style.height = (Laya.stage.height - this.videoTop) + "";
            this.videoElement.play();
        }
    }

    private InitStageUI() {
        let widthProgress = this.GetView().UI_progressContent_Panel.width;
        this.GetView().UI_progress0.left = widthProgress * 0 / 9;
        this.GetView().UI_progress1.left = widthProgress * 1 / 9;
        this.GetView().UI_progress2.left = widthProgress * 2 / 9;
        this.GetView().UI_progress3.left = widthProgress * 3 / 9;
        this.GetView().UI_progress4.left = widthProgress * 4 / 9;
        this.GetView().UI_progress5.left = widthProgress * 5 / 9;
        this.GetView().UI_progress6.left = widthProgress * 6 / 9;
        this.GetView().UI_progress7.left = widthProgress * 7 / 9;
        this.GetView().UI_progress8.left = widthProgress * 8 / 9;
        this.GetView().UI_progress9.left = widthProgress * 9 / 9;
        this.GetView().UI_progressColor_Panel.width = 0;
        this.GetView().UI_progress0_color.visible = true;
        this.GetView().UI_progress1_color.visible = false;
        this.GetView().UI_progress2_color.visible = false;
        this.GetView().UI_progress3_color.visible = false;
        this.GetView().UI_progress4_color.visible = false;
        this.GetView().UI_progress5_color.visible = false;
        this.GetView().UI_progress6_color.visible = false;
        this.GetView().UI_progress7_color.visible = false;
        this.GetView().UI_progress8_color.visible = false;
        this.GetView().UI_progress9_color.visible = false;
    }

    private UpdateStageUI() {
        switch (this.nowstage) {
            case 0: {
                this.GetView().UI_progressColor_Panel.width = this.GetView().UI_progress0.left;
                this.GetView().UI_progress0_color.visible = true;
                break;
            }
            case 1: {
                this.GetView().UI_progressColor_Panel.width = this.GetView().UI_progress1.left;
                this.GetView().UI_progress1_color.visible = true;
                break;
            }
            case 2: {
                this.GetView().UI_progressColor_Panel.width = this.GetView().UI_progress2.left;
                this.GetView().UI_progress2_color.visible = true;
                break;
            }
            case 3: {
                this.GetView().UI_progressColor_Panel.width = this.GetView().UI_progress3.left;
                this.GetView().UI_progress3_color.visible = true;
                break;
            }
            case 4: {
                this.GetView().UI_progressColor_Panel.width = this.GetView().UI_progress4.left;
                this.GetView().UI_progress4_color.visible = true;
                break;
            }
            case 5: {
                this.GetView().UI_progressColor_Panel.width = this.GetView().UI_progress5.left;
                this.GetView().UI_progress5_color.visible = true;
                break;
            }
            case 6: {
                this.GetView().UI_progressColor_Panel.width = this.GetView().UI_progress6.left;
                this.GetView().UI_progress6_color.visible = true;
                break;
            }
            case 7: {
                this.GetView().UI_progressColor_Panel.width = this.GetView().UI_progress7.left;
                this.GetView().UI_progress7_color.visible = true;
                break;
            }
            case 8: {
                this.GetView().UI_progressColor_Panel.width = this.GetView().UI_progress8.left;
                this.GetView().UI_progress8_color.visible = true;
                break;
            }
            case 9: {
                this.GetView().UI_progressColor_Panel.width = this.GetView().UI_progress9.left;
                this.GetView().UI_progress9_color.visible = true;
                break;
            }
        }

    }

    //更新标题
    private UpdateStageTitle(gameConfig: GameConfigRow) {
        let showtitle = gameConfig.titleConfigId > 0
        this.GetView().UI_Title.visible = showtitle
        if (showtitle) {
            //显示标题
            let titleConfig = ConfigManager.Instance.GetTitleConfig(gameConfig.titleConfigId);
            this.GetView().UI_Title.skin = titleConfig.textRes;
        }

    }

    private HideAllUI() {
        this.GetView().UI_start_Btn.visible = false;
        this.GetView().UI_start_Img.visible = false;
        this.GetView().UI_progressContent_Panel.visible = true;
        this.GetView().UI_text_Img.skin = "";
        this.GetView().UI_content_Img.visible = false;
        this.GetView().UI_textContent_Panel.visible = false;
        this.GetView().UI_content_Label.align = "left";
        this.GetView().UI_3DModelOpPrompt.visible = false;//不显示操作提示
        if (CommonUtil.OnMiniGame()) {
            if (this.video != null) {
                WechatUtil.DestroyVideo(this.video)
                this.video = null;
            }
        } else {
            this.videoElement.style.width = 1 + "";
            this.videoElement.style.height = 1 + "";
        }

        this.GetView().UI_next_Btn.visible = true;
    }



}

