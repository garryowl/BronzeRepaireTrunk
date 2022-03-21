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

export class ColorMatchingUIUIController extends BaseUICtrl {

    private totalClick: number = 0;

    private greenCount: number = 0;

    private blackCount: number = 0;

    constructor(view: View) {
        super(view);
    }

    public GetView(): ui.uiprefab.ColorMatchingUIUI {
        return this.uiView as ui.uiprefab.ColorMatchingUIUI;
    }

    /**
     * @override
     */
    public Init(parent: Laya.Sprite, id: UIID, context: WindowContextDataBase = null, onResized: Function = null) {
        super.Init(parent, id, context, onResized);
        this.mediatorName = UIID.ColorMatchingUIUIID.toString();

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
        //this.GetView().alpha=1;
        this.ReDataAndUI();
        //将super.OnUIOpened()放最后执行
        super.OnUIOpened(context);
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
        this.GetView().UI_yellow_Btn.on(Laya.Event.CLICK, this, this.OnUI_yellow_BtnClick);
        this.GetView().UI_black_Btn.on(Laya.Event.CLICK, this, this.OnUI_black_BtnClick);
        this.GetView().UI_green_Btn.on(Laya.Event.CLICK, this, this.OnUI_green_BtnClick);
        this.GetView().UI_wrong_Img.on(Laya.Event.CLICK, this, this.OnUI_wrong_ImgClick);


    }
    private RemoveEvent(): void {
        Facade.getInstance().removeMediator(this.getMediatorName());
        this.GetView().UI_yellow_Btn.off(Laya.Event.CLICK, this, this.OnUI_yellow_BtnClick);
        this.GetView().UI_black_Btn.off(Laya.Event.CLICK, this, this.OnUI_black_BtnClick);
        this.GetView().UI_green_Btn.off(Laya.Event.CLICK, this, this.OnUI_green_BtnClick);
        this.GetView().UI_wrong_Img.off(Laya.Event.CLICK, this, this.OnUI_wrong_ImgClick);
    }




    private OnUI_yellow_BtnClick() {
        console.log("黄")
        this.totalClick++;
        this.OnClick("y")
        if (this.totalClick >= 3) {
            this.CheckRight();
        }
    }



    private OnUI_black_BtnClick() {
        console.log("黑")
        this.totalClick++
        this.blackCount++;
        this.OnClick("b")
        if (this.totalClick >= 3) {
            this.CheckRight();
        }
    }



    private OnUI_green_BtnClick() {
        console.log("绿")
        this.totalClick++;
        this.greenCount++;
        this.OnClick("g")
        if (this.totalClick >= 3) {
            this.CheckRight();
        }
    }

    private OnUI_wrong_ImgClick() {
        this.ReDataAndUI();
    }


    //初始化颜色
    private OnInitColor() {
        this.GetView().UI_Block1.skin = null;
        this.GetView().UI_Block2.skin = null;
        this.GetView().UI_Block3.skin = null;
    }

    //点选颜色
    private OnClick(color: string) {
        if (this.totalClick == 1) {
            this.GetView().UI_Block1.skin = "largeImg/BronzeWareImg/9/" + color + ".png"
        } else if (this.totalClick == 2) {
            this.GetView().UI_Block2.skin = "largeImg/BronzeWareImg/9/" + color + ".png"
        } else {
            this.GetView().UI_Block3.skin = "largeImg/BronzeWareImg/9/" + color + ".png"
        }
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

    private CheckRight() {
        if (this.greenCount == 2 && this.blackCount == 1) {//正确
            this.facade.sendNotification(NotificationNames.HIDEUI, UIID.ColorMatchingUIUIID);
            //this.GetView().alpha=0;
            this.facade.sendNotification(NotificationNames.NEXT_STAGE)
        } else {//错误
            this.GetView().UI_wrong_Img.visible = true;
        }
    }

    private ReDataAndUI() {
        this.greenCount = 0;
        this.blackCount = 0;
        this.totalClick = 0;
        this.GetView().UI_wrong_Img.visible = false;
        this.OnInitColor();
    }
}

