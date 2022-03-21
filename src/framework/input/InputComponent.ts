export enum EnumInputEvent {
    TouchDown,
    TouchUp,

    SlideUp,
    SlideDown,
    SlideLeft,
    SlideRight,

    // TouchHolding, //正在按下
}

export class InputEventData {
    public InputType: EnumInputEvent;
    public param: number;

    constructor(inputType: EnumInputEvent, param: number = 0) {
        this.InputType = inputType
        this.param = param;
    }
}

export class InputComponent {

    public get MouseDown(): boolean { return this.isMouseDown; }

    private active: boolean;
    //输入相关
    private lastMouseX: number;  //最近一次按下的屏幕stage位置
    private lastMouseY: number;
    private isMouseDown: boolean; //是否按下
    private touchDownID: number;  //按下的手指id
    private touchDownTime: number;    //按下的时间

    private touchSprite: Laya.Sprite;//手指接触区域
    private onTouchDown: Function;//手指按下的回调 onTouchDown(mouseX: number, mouseY: number);  
    private onTouchUp: Function;//手指抬起的回调
    private onTouchMove: Function;//手指移动的回调 onTouchMove(offsetX: number, offsety: number) >0 right  屏幕左上角原点
    private onTouchOut: Function;//手指移出的回调

    constructor(touchSprite: Laya.Sprite,
        onTouchDown: Function = null, onTouchUp: Function = null, onTouchMove: Function = null,
        onTouchOut: Function = null) {
        this.touchSprite = touchSprite;
        this.onTouchDown = onTouchDown;
        this.onTouchUp = onTouchUp;
        this.onTouchMove = onTouchMove;
        this.onTouchOut = onTouchOut;
        this.Init();
    }

    private Init() {
        this.isMouseDown = false;
        this.SetActive(true)
        this.AddEvent();
    }

    //是否激活input检测
    public SetActive(active: boolean) {
        this.active = active;
    }

    public Destroy() {
        this.RemoveEvent();
    }

    private AddEvent() {
        //注册鼠标事件
        Laya.stage.on(Laya.Event.MOUSE_DOWN, this, this.mouseDown);
        Laya.stage.on(Laya.Event.MOUSE_UP, this, this.mouseUp);
        Laya.stage.on(Laya.Event.MOUSE_OUT, this, this.mouseOut);
        Laya.stage.on(Laya.Event.MOUSE_MOVE, this, this.mouseMove);
    }

    private RemoveEvent() {
        //鼠标事件
        Laya.stage.off(Laya.Event.MOUSE_DOWN, this, this.mouseDown);
        Laya.stage.off(Laya.Event.MOUSE_UP, this, this.mouseUp);
        Laya.stage.off(Laya.Event.MOUSE_OUT, this, this.mouseOut);
        Laya.stage.off(Laya.Event.MOUSE_MOVE, this, this.mouseMove);
    }

    //鼠标按下
    private mouseDown(e: Laya.Event): void {

        if (!this.isMouseDown) {
            this.lastMouseX = this.touchSprite.mouseX;// Laya.stage.mouseX;
            this.lastMouseY = this.touchSprite.mouseY;//  Laya.stage.mouseY;
            this.touchDownID = e.touchId;

            this.touchDownTime = Laya.timer.currTimer;
            this.isMouseDown = true;

            //
            if (!this.active) return;
            if (this.onTouchDown) this.onTouchDown(this.lastMouseX, this.lastMouseY);
        }
    }
    //鼠标抬起
    private mouseUp(e: Laya.Event): void {
        if (this.isMouseDown) {
            //2018-12-13 10:21:45 要根据按下与抬起的时间进行计算平均值
            if (e.touchId != this.touchDownID) return;

            let mouseUpTime = Laya.timer.currTimer;
            let deltaTime = (mouseUpTime - this.touchDownTime) / 1000; //落下,抬起间隔
            this.isMouseDown = false;

            // puremvc.Facade.instance.sendNotification(NotificationNames.InputEvent, new InputEventData(EnumInputEvent.TouchUp))
            if (!this.active) return;
            if (this.onTouchUp) this.onTouchUp();
        }
    }
    //鼠标移出
    private mouseOut(e: Laya.Event): void {
        if (this.isMouseDown) {
            //2018-12-13 10:21:45 要根据按下与抬起的时间进行计算平均值
            if (e.touchId != this.touchDownID) return;

            let mouseUpTime = Laya.timer.currTimer;
            let deltaTime = (mouseUpTime - this.touchDownTime) / 1000;
            this.isMouseDown = false;

            if (!this.active) return;
            if (this.onTouchOut) this.onTouchOut();
        }
    }

    private mouseMove(e: Laya.Event): void {
        if (!this.active) return;
        if (e.touchId != this.touchDownID) return;
        if (this.isMouseDown) {
            let offsetX = this.touchSprite.mouseX - this.lastMouseX;//>0 right  屏幕左上角原点
            let offsety = this.touchSprite.mouseY - this.lastMouseY;
            this.lastMouseX = this.touchSprite.mouseX;
            this.lastMouseY = this.touchSprite.mouseY;

            if (this.onTouchMove) this.onTouchMove(offsetX, offsety)

        }
    }

}