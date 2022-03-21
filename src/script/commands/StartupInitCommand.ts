import Log from "../../framework/utils/Log";
import GameConfig from "../../GameConfig";
import { NotificationNames } from "../data/const/NotificationNames";
import { LoadingUIUIController } from "../uiscripts/uicontrollers/LoadingUIUIController";
import { TimeManager } from "../../framework/utils/timer/TimeManager";
import { PreloadCommand } from "./PreloadCommand";
import { SubResDownLoader } from "../../framework/utils/SubResDownLoader";
import CommonUtil from "../../framework/utils/CommonUtil";
//import VConsole from "vconsole" 

/*
* 游戏最开始的初始化, 比如wx需要注册onshow/onhide事件等
*/
export class StartupInitCommand extends puremvc.SimpleCommand {
    execute(notification: puremvc.INotification) {
        this.initGameEnging(GameConfig.width, GameConfig.height);
        this.initScreenMode();//(Laya.Stage.SCALE_SHOWALL);
        //loading界面的动画,需要update
        Laya.timer.frameLoop(1, null, () => { TimeManager.Instance.update(Laya.timer.delta * 0.001) })//Timer
        this.loadSubPack();
    }

    private initGameEnging(designWith: number, designheight: number) {
        if (window["Laya3D"]) Laya3D.init(designWith, designheight);
        else Laya.init(designWith, designheight);//, Laya["WebGL"]);//不使用WEBGL, 
        //兼容微信不支持加载scene后缀场景
        Laya.URL.exportSceneToJson = GameConfig.exportSceneToJson;
        //Laya帧率
        Laya.stage.frameRate = Laya.Stage.FRAME_FAST;
        Laya.alertGlobalError = true;
    }

    private initScreenMode() {
        Laya.stage.scaleMode = GameConfig.scaleMode;
        Laya.stage.screenMode = GameConfig.screenMode;
        Laya.stage.alignV = GameConfig.alignV;
        Laya.stage.alignH = GameConfig.alignH;
    }

    //下载分包
    private loadSubPack() {
        LoadingUIUIController.Instance.Init();//
        LoadingUIUIController.Instance.SetActive(true, null, null, "分包下载...")
        LoadingUIUIController.Instance.SetLoadingActive(true);

        let subPackNames = ["sub1"]; //分包名
        let wx = Laya.Browser.window.wx;
        if (wx == null || subPackNames.length == 0) {
            this.next(); //在非微信和无分包的情况下直接执行下一步
        } else {
            let that = this;
            let wxSubPackLoader = new SubResDownLoader();
            let allTask = []
            for (let index = 0; index < subPackNames.length; index++) {
                const subPackName = subPackNames[index];
                const loadTask = wx.loadSubpackage({
                    name: subPackName,
                    success: function () {
                        that.onSubPackLoaded(subPackName, false, subPackNames)
                    },
                    fail: function () {
                        that.onSubPackLoaded(subPackName, true, subPackNames)
                    }
                })
                allTask.push(loadTask)
            }
            //分包下载进度.
            wxSubPackLoader.MonitorDownloadProgress(allTask, (curProgress, totalProgress) => {

                if(Laya.Browser.onIPhone && CommonUtil.OnMiniGame()){
                    curProgress *= 100
                }

                

                that.sendNotification(NotificationNames.LoadingUIProgress, curProgress / totalProgress)
            })
        }
    }

    //分包下载成功回调
    private loadedCount = 0;
    private onSubPackLoaded(loadedSubPack: string, isFailed: boolean, totalSubpack: string[]) {
        if (isFailed) {
            Log.Debug("加载分包失败!!!!" + loadedSubPack);
        } else {
            Log.Debug("加载分包成功!!!!" + loadedSubPack);
        }
        this.loadedCount++;
        if (this.loadedCount == totalSubpack.length) {
            this.next();
        }
    }

    private next() {
        LoadingUIUIController.Instance.SetActive(true, null, null, "资源下载...")
        this.facade.registerCommand(NotificationNames.PRELOAD_COMMAND, PreloadCommand);
        this.facade.sendNotification(NotificationNames.PRELOAD_COMMAND)
    }

}