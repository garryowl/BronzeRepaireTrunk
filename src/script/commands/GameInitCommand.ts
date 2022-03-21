
import { NotificationNames } from "../data/const/NotificationNames";
import { LoginSceneEnterCommand } from "./LoginSceneEnterCommand";
import { InputManager } from "../../framework/input/InputManager";

/*
* 游戏初始化
*/
export class GameInitCommand extends puremvc.SimpleCommand {

    execute(notification: puremvc.INotification) {
        InputManager.Instance.Init();//初始化滑动
        this.initCommands();//command初始
        this.next();
    }

    initCommands() {
        puremvc.Facade.instance.registerCommand(NotificationNames.ENTER_LOGIN_SCENE_COMMAND, LoginSceneEnterCommand);
    }
    private next() {
        puremvc.Facade.instance.sendNotification(NotificationNames.ENTER_LOGIN_SCENE_COMMAND);
    }
}