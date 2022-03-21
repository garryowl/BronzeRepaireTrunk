import { NotificationNames } from "../../script/data/const/NotificationNames";
import { InputComponent, InputEventData, EnumInputEvent } from "./InputComponent";



export class InputManager {
    private static _instace: InputManager;

    public static get Instance(): InputManager {
        if (InputManager._instace == null) {
            InputManager._instace = new InputManager();
        }
        return InputManager._instace;
    }

    private inputComp: InputComponent;

    private slideSensitiviy: number = 1;//滑动灵敏度
    public set SlideSensitiviy(value: number) { this.slideSensitiviy = Math.max(0, value) }
    public get MouseDown(): boolean { return this.inputComp.MouseDown; }


    //初始化, 监听stage的滑动
    public Init() {
        this.inputComp = new InputComponent(Laya.stage, this.mouseDown.bind(this), this.mouseUp.bind(this),
            this.mouseMove.bind(this), this.mouseOut.bind(this))

        this.SetActive(true)
    }

    public SetActive(active: boolean) {
        this.inputComp.SetActive(active);
    }

    public Destroy() {
        this.inputComp.Destroy();
    }


    //鼠标按下
    private mouseDown(mouseX: number, mouseY: number): void {
        puremvc.Facade.instance.sendNotification(NotificationNames.InputEvent, new InputEventData(EnumInputEvent.TouchDown))
    }

    //鼠标抬起
    private mouseUp(): void {
        puremvc.Facade.instance.sendNotification(NotificationNames.InputEvent, new InputEventData(EnumInputEvent.TouchUp))
    }
    //鼠标移出
    private mouseOut(): void {
        puremvc.Facade.instance.sendNotification(NotificationNames.InputEvent, new InputEventData(EnumInputEvent.TouchUp))
    }

    private mouseMove(offsetX: number, offsety: number): void {
        if (offsetX > 0 && offsetX > this.slideSensitiviy) {
            //右滑动
            puremvc.Facade.instance.sendNotification(NotificationNames.InputEvent, new InputEventData(EnumInputEvent.SlideRight, offsetX))

        } else if (offsetX < 0 && offsetX < -this.slideSensitiviy) {
            puremvc.Facade.instance.sendNotification(NotificationNames.InputEvent, new InputEventData(EnumInputEvent.SlideLeft, offsetX))
        }

        if (offsety > 0 && offsetX > this.slideSensitiviy) {
            //下滑动
            puremvc.Facade.instance.sendNotification(NotificationNames.InputEvent, new InputEventData(EnumInputEvent.SlideDown, offsety))

        } else if (offsety < 0 && offsetX < -this.slideSensitiviy) {
            puremvc.Facade.instance.sendNotification(NotificationNames.InputEvent, new InputEventData(EnumInputEvent.SlideUp, offsety))

        }

    }


}