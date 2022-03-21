import { UIID } from "./UIIDDefine";

/*
* name;
*/
// module ui {
//打开ui传递参数的基类
export class WindowContextDataBase {
    public ExecuteNavLogic = true; // 打开UI的时候, 是否一定执行导航相关操作
    public OnOpenCallback: Function
    constructor(onOpenCallback: Function, navLogic: boolean = true) {
        this.OnOpenCallback = onOpenCallback;
        this.ExecuteNavLogic = navLogic;
    }
}

export class UIParamStruct extends WindowContextDataBase {
    ID: UIID;
    constructor(id: UIID, onOpenCallback: Function, navLogic: boolean = false) {
        super(onOpenCallback, navLogic);
        this.ID = id;
    }
}



