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
import { TimeManager } from "../../../framework/utils/timer/TimeManager";
import { cbhandler } from "../../../framework/utils/timer/cbhandler";
import Log from "../../../framework/utils/Log";
import { GameUIManager } from "../../manager/GameUIManager";

export class CalibrationUIUIController extends BaseUICtrl {

    rotationSpeed = 0.4;
    ispointer = false;

    isclockwise = true;

    private timerKey:number;

    constructor(view: View) {
        super(view);
    }

    public GetView(): ui.uiprefab.CalibrationUIUI {
        return this.uiView as ui.uiprefab.CalibrationUIUI;
    }

    /**
     * @override
     */
    public Init(parent: Laya.Sprite, id: UIID, context: WindowContextDataBase = null, onResized: Function = null) {
        super.Init(parent, id, context, onResized);
        this.mediatorName = UIID.CalibrationUIUIID.toString();

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
        TimeManager.Instance.remove(this.timerKey);
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


    }
    private RemoveEvent(): void {
        Facade.getInstance().removeMediator(this.getMediatorName());



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
                    let a = this.GetView().UI_prompt.visible
                    if (this.GetView().UI_prompt.visible || this.GetView().UI_mistake.visible) {
                        this.GetView().UI_prompt.visible = false;
                        this.GetView().UI_mistake.visible = false;
                        // this.range();
                        this.ispointer = true;
                    }
                    else if (!this.GetView().UI_prompt.visible) {
                        this.ispointer = false;
                        this.isstop=false;
                    }
                }

                break;
            }
        }
    }

    InitData(): void {
        this.stoptime= 5;
        this.scopeMin = 0;
        this.scopeMax = 0;
        this.GetView().UI_prompt.visible = true;
        this.GetView().UI_PauseZone1.visible = false;
        this.GetView().UI_PauseZone2.visible = false;
        this.GetView().UI_PauseZone3.visible = false;
        this.GetView().UI_PauseZone4.visible = false;
        this.GetView().UI_mistake.visible = false;

        this.ispointer = false;
        this.isstop=true;
        this.timerKey= TimeManager.Instance.addUpdater(cbhandler.gen_handler(this.Update, this))
        this.range();

    }
    scopeMin = 0;
    scopeMax = 0;
    range(): void {
        let num = Math.random()
        if (num <= 0.25) {
            this.GetView().UI_PauseZone1.visible = true;
            this.scopeMin = -25;
            this.scopeMax = -7;
        }
        else if (num <= 0.5) {
            this.GetView().UI_PauseZone2.visible = true;
            this.scopeMin = -145;
            this.scopeMax = -127;
        }
        else if (num <= 0.75) {
            this.GetView().UI_PauseZone3.visible = true;
            this.scopeMin = -111;
            this.scopeMax = -93;
        }
        else {
            this.GetView().UI_PauseZone4.visible = true;
            this.scopeMin = -71;
            this.scopeMax = -51;
        }
    }
    stoptime=5//指针停止后的停留时间
    isstop=true;
    Update() {
        if (this.ispointer) {
            this.pointerRotation();

        }
      if(!this.isstop){
            this.stoptime-=Laya.timer.delta/100
            if(this.stoptime<=0){
                this.isstop=true;
                if (this.GetView().UI_pointer.rotation < this.scopeMin || this.GetView().UI_pointer.rotation > this.scopeMax) {
                    this.GetView().UI_mistake.visible = true;
                    this.stoptime= 5;
                }
                else {
                    this.facade.sendNotification(NotificationNames.HIDEUI,UIID.CalibrationUIUIID)
                    this.sendNotification(NotificationNames.NEXT_STAGE);
                }
            }
        }
    }

    pointerRotation() {
        if (this.isclockwise) {
            this.GetView().UI_pointer.rotation += this.rotationSpeed*Laya.timer.delta;
            if (this.GetView().UI_pointer.rotation >= 55) {
                this.isclockwise = false;
                this.GetView().UI_pointer.rotation = 55
            }
        }
        else if (!this.isclockwise) {
            this.GetView().UI_pointer.rotation -= this.rotationSpeed*Laya.timer.delta;
            if (this.GetView().UI_pointer.rotation <= -184) {
                this.isclockwise = true;
                this.GetView().UI_pointer.rotation = -185
            }
        }

    }
}

