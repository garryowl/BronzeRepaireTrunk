import { TimeManager } from "./TimeManager";

/*
* 进行LateUpdate计时使用
*/
export class TimeComponent extends Laya.Script {
    public _lateUpdate() {
        TimeManager.Instance.lateupdate()
    }
}