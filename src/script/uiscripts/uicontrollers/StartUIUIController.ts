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
import { EnumInputEvent, InputEventData } from "../../../framework/input/InputComponent";
import { GameUIManager } from "../../manager/GameUIManager";

export class StartUIUIController extends BaseUICtrl {
    constructor(view: View) {
        super(view);
    }

    public GetView(): ui.uiprefab.StartUIUI {
        return this.uiView as ui.uiprefab.StartUIUI;
    }

    /**
     * @override
     */
    public Init(parent: Laya.Sprite, id: UIID, context: WindowContextDataBase = null, onResized: Function = null) {
        super.Init(parent, id, context, onResized);
        this.mediatorName = UIID.StartUIUIID.toString();

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
        // Laya.stage.addChild(this.uiView)
        // GameUIManager.Instance.Init();
        // GameUIManager.Instance.AddPrefab();

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
       this.GetView().UI_Start1Btn.on(Laya.Event.MOUSE_DOWN, this, this.OnUI_Start1BtnMOUSE_DOWN);
       this.GetView().UI_Start2Btn.on(Laya.Event.MOUSE_UP, this, this.OnUI_Start2BtnMOUSE_UP);


    }
    private RemoveEvent(): void {
        Facade.getInstance().removeMediator(this.getMediatorName());
        this.GetView().UI_Start1Btn.off(Laya.Event.MOUSE_DOWN, this, this.OnUI_Start1BtnMOUSE_DOWN);
        this.GetView().UI_Start2Btn.off(Laya.Event.MOUSE_UP, this, this.OnUI_Start2BtnMOUSE_UP);



    }

    private OnUI_Start1BtnMOUSE_DOWN() {
        this.GetView().UI_Start1Btn.visible=false;
        GameUIManager.Instance.RemovePrefab();
    }
    private OnUI_Start2BtnMOUSE_UP() {

        this.GetView().UI_Start1Btn.visible=true;
        this.facade.sendNotification(NotificationNames.HIDEUI,UIID.StartUIUIID);

        this.facade.sendNotification(NotificationNames.OPENUI,UIID.BronzewareContentUIUIID);
        this.GetView().UI_Start1Btn.mouseEnabled=false;
    }
    /**
     * @override
     */
    listNotificationInterests(): string[] {
       let list = super.listNotificationInterests();
       return list.concat([
        NotificationNames.InputEvent
        ]);
    }

    /**
    * @override
    */
    handleNotification(note: puremvc.INotification): void {
       if (!this.GetView().visible) return;
       super.handleNotification(note)
        switch (note.getName()) {
            case NotificationNames.InputEvent: {
                let InputEvent: InputEventData = note.getBody();
                if (InputEvent.InputType == EnumInputEvent.TouchDown) {
                    // this.GetView().UI_Start1Btn.visible=false;
                }
                else if(InputEvent.InputType == EnumInputEvent.TouchUp){
                    // this.GetView().UI_Start1Btn.visible=true;
                    // this.facade.sendNotification(NotificationNames.OPENUI,UIID.CalibrationUIUIID);

                }
                break;
            }
        }
    }
    InitData(){
        this.GetView().UI_Start1Btn.mouseEnabled=true;
    }
}

