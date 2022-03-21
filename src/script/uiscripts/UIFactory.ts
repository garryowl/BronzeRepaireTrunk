import { UIID } from "./UIIDDefine";
import { BaseUICtrl } from "./BaseUICtrl";
import { ui } from "../../ui/layaMaxUI";
import ResourceManager from "../../framework/resourceManager/ResourceManager";
import { ConfigManager } from "../manager/ConfigManager";
import { BronzewareContentUIUIController } from "./uicontrollers/BronzewareContentUIUIController";
import { CalibrationUIUIController } from "./uicontrollers/CalibrationUIUIController";
import { ColorMatchingUIUIController } from "./uicontrollers/ColorMatchingUIUIController";
import { EndUIUIController } from "./uicontrollers/EndUIUIController";
import { LoadingUIUIController } from "./uicontrollers/LoadingUIUIController";
import { StartUIUIController } from "./uicontrollers/StartUIUIController";


export class UIFactory {
	constructor() { }

	public static Create(id: UIID, onCtrlCreated: Function) {
		let config = ConfigManager.Instance.GetUIConfig(id);
		//异步加载分离模式的uijson文件, 返回uicontroller
		let webPathPrefix = config && config.UIWebPathPrefix ? config.UIWebPathPrefix : "";
		let prefabPath = this.GetUIPrefabPath(id);
		if (prefabPath == "") {
			//内嵌模式
			let baseUICtrl = this.GetUIController(id);
			onCtrlCreated(baseUICtrl);
		} else {
			//分离模式 先加载prefab.json
			ResourceManager.Instance.LoadRes(webPathPrefix + this.GetUIPrefabPath(id), () => {
				let baseUICtrl = this.GetUIController(id);
				onCtrlCreated(baseUICtrl);
			})
		}
	}
	private static GetUIController(id: UIID): BaseUICtrl {
		switch (id) {

			case UIID.BronzewareContentUIUIID:
				return new BronzewareContentUIUIController(new ui.uiprefab.BronzewareContentUIUI());
			case UIID.CalibrationUIUIID:
				return new CalibrationUIUIController(new ui.uiprefab.CalibrationUIUI());
			case UIID.ColorMatchingUIUIID:
				return new ColorMatchingUIUIController(new ui.uiprefab.ColorMatchingUIUI());
			case UIID.EndUIUIID:
				return new EndUIUIController(new ui.uiprefab.EndUIUI());
			case UIID.LoadingUIUIID:
				return new LoadingUIUIController(new ui.uiprefab.LoadingUIUI());
			case UIID.StartUIUIID:
				return new StartUIUIController(new ui.uiprefab.StartUIUI());

			default:
				break;
		}
	}
	public static GetUIPrefabPath(id: UIID): string {
		switch (id) {

			case UIID.BronzewareContentUIUIID:
				return "uiprefab/BronzewareContentUI.scene";
			case UIID.CalibrationUIUIID:
				return "uiprefab/CalibrationUI.scene";
			case UIID.ColorMatchingUIUIID:
				return "uiprefab/ColorMatchingUI.scene";
			case UIID.EndUIUIID:
				return "uiprefab/EndUI.scene";
			case UIID.LoadingUIUIID:
				return "";
			case UIID.StartUIUIID:
				return "uiprefab/StartUI.scene";

			default:
				break;
		}
	}
}
