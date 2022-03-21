/**
* Created By Code Generator
*/
import Facade = puremvc.Facade;
import View = Laya.View;
import { BaseUICtrl } from "../BaseUICtrl";
import { WindowContextDataBase } from "../UIParamStruct";
import { ui } from "../../../ui/layaMaxUI";
import { UIID } from "../UIIDDefine";
import { NotificationNames } from "../../data/const/NotificationNames";

export class EndUIUIController extends BaseUICtrl {
    constructor(view: View) {
        super(view);
    }

    public GetView(): ui.uiprefab.EndUIUI {
        return this.uiView as ui.uiprefab.EndUIUI;
    }

    /**
     * @override
     */
    public Init(parent: Laya.Sprite, id: UIID, context: WindowContextDataBase = null, onResized: Function = null) {
        super.Init(parent, id, context, onResized);
        this.mediatorName = UIID.EndUIUIID.toString();

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


        //将super.OnUIOpened()放最后执行
        super.OnUIOpened(context);
        this.InitData();
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
        this.GetView().UI_End1Btn.on(Laya.Event.MOUSE_DOWN, this, this.OnUI_End1BtnMOUSE_DOWN);
        this.GetView().UI_End2Btn.on(Laya.Event.MOUSE_UP, this, this.OnUI_End2BtnMOUSE_UP);

    }
    private RemoveEvent(): void {
        Facade.getInstance().removeMediator(this.getMediatorName());

        this.GetView().UI_End1Btn.off(Laya.Event.MOUSE_DOWN, this, this.OnUI_End1BtnMOUSE_DOWN);
        this.GetView().UI_End2Btn.off(Laya.Event.MOUSE_UP, this, this.OnUI_End2BtnMOUSE_UP);

    }


    private OnUI_End1BtnMOUSE_DOWN() {
        this.GetView().UI_End1Btn.visible = false;
        this.GetView().UI_End2Btn.visible = true;
    }
    private OnUI_End2BtnMOUSE_UP() {
        this.GetView().UI_End2Btn.visible = false;
        this.GetView().UI_End1Btn.visible = true;
        this.facade.sendNotification(NotificationNames.HIDEUI, UIID.EndUIUIID);
        this.facade.sendNotification(NotificationNames.RESTART_GAME);
    }


    /**
     * @override
     */
    listNotificationInterests(): string[] {
        let list = super.listNotificationInterests();
        return list.concat([

        ]);
    }

    /**
    * @override
    */
    handleNotification(note: puremvc.INotification): void {
        if (!this.GetView().visible) return;
        super.handleNotification(note)
        switch (note.getName()) {

        }
    }

    InitData() {
        this.GetView().UI_End1Btn.visible = true;
        this.GetView().UI_End2Btn.visible = false;
    }
}

