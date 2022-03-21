import { NotificationNames } from "../data/const/NotificationNames";
import { UIID } from "../uiscripts/UIIDDefine";
import ResourceManager from "../../framework/resourceManager/ResourceManager";
import { LoadingUIUIController } from "../uiscripts/uicontrollers/LoadingUIUIController";
import { ConstDefine } from "../data/const/ConstDefine";
import { TimeManager } from "../../framework/utils/timer/TimeManager";
import { cbhandler } from "../../framework/utils/timer/cbhandler";

/*
* 主界面
*/
export class LoginSceneEnterCommand extends puremvc.SimpleCommand {

    execute(notification: puremvc.Notification) {

        // //预加载需要的视频资源
        // let picConfigs: PictureConfigRow[] = ConfigManager.Instance.GetAllPictureConfig();
        // let picStrs: string[] = [];
        // for (let i = 0; i < picConfigs.length; i++) {
        //     picStrs.push(picConfigs[i].pictureRes);
        // }
        // ResourceManager.Instance.LoadResArray(picStrs, () => {

        let that = this;
        let curprogress = 0;
        let timer = TimeManager.Instance.addUpdater(cbhandler.gen_handler((dt: number) => {
            curprogress += dt / 30;
            that.facade.sendNotification(NotificationNames.LoadingUIProgress, curprogress)
        }))


        Laya.loader.create(ConstDefine.Bronzeware,
            Laya.Handler.create(this, () => {
                TimeManager.Instance.remove(timer)
                LoadingUIUIController.Instance.SetActive(false, false)
                that.facade.sendNotification(NotificationNames.OPENUI, UIID.StartUIUIID);
            }),
            Laya.Handler.create(this, (progress) => {
                curprogress = progress;
                that.facade.sendNotification(NotificationNames.LoadingUIProgress, progress)
            }, null, false));

        // ResourceManager.Instance.CreateResArray([ConstDefine.Bronzeware], () => {
        //     TimeManager.Instance.remove(timer)
        //     LoadingUIUIController.Instance.SetActive(false, false)
        //     that.facade.sendNotification(NotificationNames.OPENUI, UIID.StartUIUIID);
        // }, null, (progress) => {
        //     curprogress = progress;
        //     that.facade.sendNotification(NotificationNames.LoadingUIProgress, progress)
        // })

    }




}