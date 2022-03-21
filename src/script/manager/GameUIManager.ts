
import { ConstDefine } from "../data/const/ConstDefine";


export class GameUIManager {
    private static _instace: GameUIManager;

    public static get Instance(): GameUIManager {
        if (GameUIManager._instace == null) {
            GameUIManager._instace = new GameUIManager();
            // GameUIManager._instace.Init();
        }
        return GameUIManager._instace;
    }

    private parentScene: Laya.Scene3D = null;
    camera: Laya.Camera;
    sky: Laya.SkyBox
    public Init() {
        //添加3D场景
        // var scene: Laya.Scene3D = Laya.stage.addChild(new Laya.Scene3D()) as Laya.Scene3D;

        this.parentScene = Laya.stage.addChild(new Laya.Scene3D()) as Laya.Scene3D;
        this.parentScene.zOrder = -1;
        this.parentScene.updateZOrder();
        // let a = this.parentScene.skyRenderer.mesh as Laya.BlinnPhongMaterial ;
        // console.log(a);
        // a.albedoColor=new Laya.Vector4(0,0,0,0);
        // let b = this.parentScene.skyRenderer.material;
        // console.log(b);

        //添加照相机
        var camera: Laya.Camera = (this.parentScene.addChild(new Laya.Camera(0, 0.1, 100))) as Laya.Camera;
        camera.transform.translate(new Laya.Vector3(0, 1, 5));//(0, 3, 3));
        camera.transform.rotate(new Laya.Vector3(-10, 96, 0), true, false);
        // camera.addComponent(CameraMoveScript)
        camera.transform.lookAt(new Laya.Vector3(0, 0, 0), new Laya.Vector3(0, 1, 0))
        camera.clearFlag = Laya.BaseCamera.CLEARFLAG_SOLIDCOLOR;
        // camera.clearFlag = Laya.CameraClearFlags.CLEARFLAG_None;
        //除了猴子自身，渲染图片其他地方都完全渲染到屏幕上
        camera.clearColor = new Laya.Vector4(245 / 255, 231 / 255, 218 / 255, 0);
        // camera.renderTarget = new Laya.RenderTexture(512, 512, 1, 3);//laya.resource.RenderTextureFormat.R8G8B8A8, laya.resource.RenderTextureDepthFormat.DEPTHSTENCIL_NONE);

        // //正交投影垂直矩阵尺寸
        // camera.orthographicVerticalSize = 10;
        // camera.convertScreenCoordToOrthographicCoord(new Laya.Vector3(310, 500, 0),new Laya.Vector3(0, 0, 0));


        this.camera = camera;
        //添加方向光
        var directionLight: Laya.DirectionLight = this.parentScene.addChild(new Laya.DirectionLight()) as Laya.DirectionLight;
        directionLight.color = new Laya.Vector3(1, 1, 1);
        // directionLight.transform.worldMatrix.setForward(new Laya.Vector3(1, -1, 0));
        directionLight.transform.rotationEuler = new Laya.Vector3(0, 0, 0)
        directionLight.intensity = 1.5;


        //    this. AddPrefab();
    }

    public ResetCameraPos() {
        this.camera.transform.position = new Laya.Vector3(0, 0, 0)
        this.camera.transform.rotationEuler = new Laya.Vector3(0, 0, 0)
        this.camera.transform.translate(new Laya.Vector3(0, 1, 5));//(0, 3, 3));
        this.camera.transform.rotate(new Laya.Vector3(-10, 96, 0), true, false);
        // camera.addComponent(CameraMoveScript)
        this.camera.transform.lookAt(new Laya.Vector3(0, 0, 0), new Laya.Vector3(0, 1, 0))

        if (this.prefab != null) {
            this.prefab.transform.position = new Laya.Vector3(0, 0, 0);
            this.prefab.transform.rotationEuler = new Laya.Vector3(0, 0, 0);
        }

    }

    public AddPrefab() {
        //不重复加载游戏
        if (this.prefab == null) {
            let urls = [ConstDefine.Bronzeware]
            Laya.loader.create(urls,
                Laya.Handler.create(this, this.onArrayCreated, [urls]),
                Laya.Handler.create(this, this.onCreateArrayLoading, null, false));
            // this.onArrayCreated([ConstDefine.Bronzeware]);
            // this.onCreateArrayLoading(null,false);
            var modelViewer: ModelViewer = this.camera.addComponent(ModelViewer);
            // modelViewer.AroundPos = new Laya.Vector3(-30, 1, 3);
            modelViewer.AroundPos = new Laya.Vector3(0, 0, 0);//new Laya.Vector3(-30, 1, 3);

        }else{
            this.prefab.transform.position = new Laya.Vector3(0, 0, 0);
        }
    }


    public RemovePrefab() {
        if (this.prefab != null) {
            // this.prefab.destroy();
            // this.prefab = null;
            this.prefab.transform.position = new Laya.Vector3(100000, 100000, 100000);
        }
    }
    prefab: Laya.Sprite3D = null;
    private onArrayCreated(urlobj: any[], comFun: Function = null, failFun: Function = null, taskid: number = 0) {
        // Log.Debug("=====>res loaded array: " + urlobj.length + " " + urlobj)
        // for (var index = 0; index < urlobj.length; index++) {
        //     var element = urlobj[index];
        //     Log.Debug("=========>loaded: " + element.url ? element.url : element);
        // }

        for (let index = 0; index < urlobj.length; index++) {
            const element = urlobj[index];
            var url = urlobj[index].url ? urlobj[index].url : urlobj[index];
            console.log("3d资源加载成功 taskid url[0]:" + url)
            this.prefab = Laya.loader.getRes(url) as Laya.Sprite3D;

            let node = this.prefab;// Laya.MeshSprite3D.instantiate(this.prefab);
            // console.log(node);
            this.parentScene.addChild(node);
            node.transform.position = new Laya.Vector3(0, 0, 0);



            // Laya.stage.on(Laya.Event.RESIZE, null, function():void {
            //    this. camera.convertScreenCoordToOrthographicCoord(new Laya.Vector3(310, 500, 0),new Laya.Vector3(0, 0, 0));
            //     node.transform.position = this._translate;
            // });
        }
        this.parentScene.zOrder = 9
        this.parentScene.updateZOrder();

    }
    //批量资源加载中
    private onCreateArrayLoading(progressFun: Function = null, progress: any = null) {
        // console.log("progress" + progressFun)
        // if (progressFun) {
        //     progressFun(progress)
        // }
    }


}

export class ModelViewer extends Laya.Script {
    // Text m_debugTip;
    public canRotation_X: boolean = true;
    public canRotation_Y: boolean = true;
    public canScale: boolean = true;

    /// <summary>
    /// Around center.
    /// </summary>
    //public target: Transform3D;
    public AroundPos: Laya.Vector3 = new Laya.Vector3();
    /// <summary>
    /// Settings of mouse button, pointer and scrollwheel.
    /// </summary>
    public mouseSettings: MouseSettings = new MouseSettings(0, 0.3, 0.5);

    /// <summary>
    /// Range limit of angle.
    /// </summary>
    public angleRange: MyRange = new MyRange(-90, 90);

    /// <summary>
    /// Range limit of distance.
    /// </summary>
    public distanceRange: MyRange = new MyRange(1, 50);//(50, 2000);

    /// <summary>
    /// Damper for move and rotate.
    /// </summary>
    ///[Range(0, 10)]
    public damper: number = 10;

    /// <summary>
    /// Camera current angls.
    /// </summary>
    public CurrentAngles: Laya.Vector3 = new Laya.Vector3();
    public CurrentAnglesTemp: Laya.Vector3 = new Laya.Vector3();
    /// <summary>
    /// Current distance from camera to target.
    /// </summary>
    public CurrentDistance: number;

    /// <summary>
    /// Camera target angls.
    /// </summary>
    protected targetAngles: Laya.Vector3 = new Laya.Vector3();


    /// <summary>
    /// Target distance from camera to target.
    /// </summary>
    protected targetDistance: number;


    //protected camera: Laya.Camera;
    constructor() {
        super();
    }
    public transform: Laya.Transform3D;

    onStart(): void {

        this.transform = (this.owner as Laya.Sprite3D).transform;

        this.CurrentAngles = new Laya.Vector3(-this.transform.rotationEuler.x, this.transform.rotationEuler.y, 0);
        this.targetAngles = new Laya.Vector3(-this.transform.rotationEuler.x, this.transform.rotationEuler.y, 0);
        this.CurrentDistance = Laya.Vector3.distance(this.transform.position, this.AroundPos);
        this.targetDistance = Laya.Vector3.distance(this.transform.position, this.AroundPos);
        // Laya.stage.on(Laya.Event.MOUSE_DOWN, this, this.mouseDown);
        // Laya.stage.on(Laya.Event.MOUSE_MOVE, this, this.mouseMove);
        // Laya.stage.on(Laya.Event.MOUSE_UP, this, this.mouseUp);
        // Laya.stage.on(Laya.Event.MOUSE_OUT, this, this.mouseUp);
        Laya.stage.on(Laya.Event.MOUSE_DOWN, this, this.mouseDown);
        Laya.stage.on(Laya.Event.MOUSE_MOVE, this, this.mouseMove);
        Laya.stage.on(Laya.Event.MOUSE_UP, this, this.mouseUp);
        Laya.stage.on(Laya.Event.MOUSE_OUT, this, this.mouseUp);

        Laya.stage.on(Laya.Event.MOUSE_WHEEL, this, this.mouseWheel)
    }
    onUpdate(): void {
        if (this.myevent == null) return;
        if (Laya.Browser.onMobile) {
            this.AroundByMobileInput();
        } else {
            this.AroundByMouseInput();
        }
        if (!this.canRotation_X) this.targetAngles.y = 0;
        if (!this.canRotation_Y) this.targetAngles.x = 0;
        if (this.mouseRunning == false) {
            this.targetAngles.y -= 0.05;

        }

        //Lerp.
        this.CurrentAngles = this.LerpVector3(this.CurrentAngles, this.targetAngles, this.deltaTime * this.damper);
        this.CurrentDistance = this.LerpNum(this.CurrentDistance, this.targetDistance, this.deltaTime * this.damper);
        //Update transform position and rotation.
        // Quaternion.createFromYawPitchRoll(this.CurrentAngles.y,this.CurrentAngles.x,this.CurrentAngles.z,this.tempRotationZ)
        // this.transform.rotation = this.tempRotationZ;
        this.CurrentAnglesTemp.x = -this.CurrentAngles.x;
        this.CurrentAnglesTemp.y = this.CurrentAngles.y;
        this.CurrentAnglesTemp.z = this.CurrentAngles.z;
        this.transform.rotationEuler = this.CurrentAnglesTemp;
        Laya.Vector3.scale(this.GetForward, this.CurrentDistance, this.tempV)
        Laya.Vector3.subtract(this.AroundPos, this.tempV, this.tempV1)
        this.transform.position = this.tempV1;
        this.lastMouseX = Laya.stage.mouseX;
        this.lastMouseY = Laya.stage.mouseY;
    }

    //记录上一次手机触摸位置判断用户是在左放大还是缩小手势  
    private oldPosition1: Laya.Vector3 = new Laya.Vector3();
    private oldPosition2: Laya.Vector3 = new Laya.Vector3();

    private m_IsSingleFinger: boolean;
    /*
    private void ScaleCamera()
    {
        //计算出当前两点触摸点的位置  
        var tempPosition1 = Input.GetTouch(0).position;
        var tempPosition2 = Input.GetTouch(1).position;
        float currentTouchDistance = Vector3.Distance(tempPosition1, tempPosition2);
        float lastTouchDistance = Vector3.Distance(oldPosition1, oldPosition2);
        //计算上次和这次双指触摸之间的距离差距  
        //然后去更改摄像机的距离  
        distance -= ( currentTouchDistance - lastTouchDistance ) * scaleFactor * Time.deltaTime;
        //把距离限制住在min和max之间  
        distance = Mathf.Clamp(distance, minDistance, maxDistance);
        //备份上一次触摸点的位置，用于对比  
        oldPosition1 = tempPosition1;
        oldPosition2 = tempPosition2;
    }
    */

    public get TouchCount(): number {
        // if (Laya.TouchManager.I._event.touches == null) {
        //     return 0;
        // } else {
        //     return this.myevent.touches.length;
        // }
        return this.myevent.touches.length;
    }
    public get Touchs(): Array<any> {
        return this.myevent.touches
    }
    public get GetAxisX(): number {
        return Laya.stage.mouseX - this.lastMouseX;
    }
    public get GetAxisY(): number {
        return Laya.stage.mouseY - this.lastMouseY;
    }
    public get deltaTime(): number {
        return Laya.timer.delta / 1000;
    }

    public deltaWheel: number = 0;
    public closeupSpeedOnPC: number = 0.2; //拉近速度

    public FORWORD: Laya.Vector3 = new Laya.Vector3();
    public get GetForward(): Laya.Vector3 {
        this.transform.getForward(this.FORWORD);
        return this.FORWORD
    }
    protected lastMouseX: number = 0;
    protected lastMouseY: number = 0;
    protected mouseRunning: boolean = false;

    protected mouseDown(e: Laya.Event): void {
        this.lastMouseX = Laya.stage.mouseX;
        this.lastMouseY = Laya.stage.mouseY;
        this.mouseRunning = true;
        // console.log("on mouse down")
    }
    myevent: Laya.Event;
    protected mouseMove(e: Laya.Event): void {
        this.myevent = e;
    }

    protected mouseWheel(e: Laya.Event): void {
        this.deltaWheel = e.delta * this.closeupSpeedOnPC;
    }
    protected mouseUp(e: Laya.Event): void {
        this.mouseRunning = false;
        this.myevent = null;
        // console.log("on mouse up")
    }

    protected Clamp(num, min, max): number {
        if (num < min) {
            return min;
        } else if (num > max) {
            return max;
        } else {
            return num;
        }
    }

    protected LerpVector3(min: Laya.Vector3, max: Laya.Vector3, t: number): Laya.Vector3 {
        var vec: Laya.Vector3 = new Laya.Vector3();
        vec.x = min.x + t * (max.x - min.x);
        vec.y = min.y + t * (max.y - min.y);
        vec.z = min.z + t * (max.z - min.z);
        return vec;
    }
    protected LerpNum(min: number, max: number, t: number): number {
        return min + t * (max - min);
    }



    protected AroundByMobileInput(): void {
        if (this.TouchCount == 1) {//if (this.mouseRunning) { //用mouseruning就不管用
            // console.log(this.targetAngles);
            this.targetAngles.y -= this.GetAxisX * this.mouseSettings.pointerSensitivity;
            this.targetAngles.x += this.GetAxisY * this.mouseSettings.pointerSensitivity;
            //Range.
            // this.targetAngles.y = this.Clamp(this.targetAngles.y, this.angleRange.min, this.angleRange.max);
            //Mouse pointer.
            this.m_IsSingleFinger = true;
        }
        //Mouse scrollwheel.
        if (this.canScale) {
            if (this.TouchCount > 1) {
                //计算出当前两点触摸点的位置  
                if (this.m_IsSingleFinger) {
                    this.oldPosition1 = new Laya.Vector3(this.Touchs[0].stageX, this.Touchs[0].stageY);
                    this.oldPosition2 = new Laya.Vector3(this.Touchs[1].stageX, this.Touchs[1].stageY);
                }
                var tempPosition1 = new Laya.Vector3(this.Touchs[0].stageX, this.Touchs[0].stageY);
                var tempPosition2 = new Laya.Vector3(this.Touchs[1].stageX, this.Touchs[1].stageY);


                var currentTouchDistance = Laya.Vector3.distance(tempPosition1, tempPosition2);
                var lastTouchDistance = Laya.Vector3.distance(this.oldPosition1, this.oldPosition2);

                //计算上次和这次双指触摸之间的距离差距  
                //然后去更改摄像机的距离  
                this.targetDistance -= (currentTouchDistance - lastTouchDistance) * this.deltaTime * this.mouseSettings.wheelSensitivity;
                //  m_debugTip.text = ( currentTouchDistance - lastTouchDistance ).ToString() + " + " + targetDistance.ToString();

                //把距离限制住在min和max之间  

                //备份上一次触摸点的位置，用于对比  
                this.oldPosition1 = tempPosition1;
                this.oldPosition2 = tempPosition2;
                this.m_IsSingleFinger = false;
                this.targetDistance = this.Clamp(this.targetDistance, this.distanceRange.min, this.distanceRange.max);
            }
        }
    }
    tempRotationZ: Laya.Quaternion = new Laya.Quaternion();
    tempV: Laya.Vector3 = new Laya.Vector3();
    tempV1: Laya.Vector3 = new Laya.Vector3();


    /// <summary>
    /// Camera around target by mouse input.
    /// </summary>
    protected AroundByMouseInput(): void {
        if (this.mouseRunning) {
            //Mouse pointer.
            this.targetAngles.y -= (this.GetAxisX * this.mouseSettings.pointerSensitivity);
            this.targetAngles.x += (this.GetAxisY * this.mouseSettings.pointerSensitivity);
            //Range.
            // this.targetAngles.x = this.Clamp(this.targetAngles.x, this.angleRange.min, this.angleRange.max);
        }
        //Mouse scrollwheel.
        if (this.canScale) {
            this.targetDistance -= this.deltaWheel * this.mouseSettings.wheelSensitivity * 50;
            this.deltaWheel = 0;
            this.targetDistance = this.Clamp(this.targetDistance, this.distanceRange.min, this.distanceRange.max);
        }
    }

}

class MouseSettings {
    /// <summary>
    /// ID of mouse button.
    /// </summary>
    public mouseButtonID: number;

    /// <summary>
    /// Sensitivity of mouse pointer.
    /// </summary>
    public pointerSensitivity: number;

    /// <summary>
    /// Sensitivity of mouse ScrollWheel.
    /// </summary>
    public wheelSensitivity: number;

    /// <summary>
    /// Constructor.
    /// </summary>
    /// <param name="mouseButtonID">ID of mouse button.</param>
    /// <param name="pointerSensitivity">Sensitivity of mouse pointer.</param>
    /// <param name="wheelSensitivity">Sensitivity of mouse ScrollWheel.</param>
    constructor(mouseButtonID: number, pointerSensitivity: number, wheelSensitivity: number) {
        this.mouseButtonID = mouseButtonID;
        this.pointerSensitivity = pointerSensitivity;
        this.wheelSensitivity = wheelSensitivity;
    }
}

/// <summary>
/// Range form min to max.
/// </summary>
class MyRange {
    /// <summary>
    /// Min value of range.
    /// </summary>
    public min: number;

    /// <summary>
    /// Max value of range.
    /// </summary>
    public max: number;

    /// <summary>
    /// Constructor.
    /// </summary>
    /// <param name="min">Min value of range.</param>
    /// <param name="max">Max value of range.</param>
    constructor(min: number, max: number) {
        this.min = min;
        this.max = max;
    }
}


/// <summary>
/// Rectangle area on plane.
/// </summary>
class PlaneArea {
    /// <summary>
    /// Center of area.
    /// </summary>
    public center: Laya.Transform3D;

    /// <summary>
    /// Width of area.
    /// </summary>
    public width: number;

    /// <summary>
    /// Length of area.
    /// </summary>
    public length: number;

    /// <summary>
    /// Constructor.
    /// </summary>
    /// <param name="center">Center of area.</param>
    /// <param name="width">Width of area.</param>
    /// <param name="length">Length of area.</param>
    constructor(center: Laya.Transform3D, width: number, length: number) {
        this.center = center;
        this.width = width;
        this.length = length;
    }
}