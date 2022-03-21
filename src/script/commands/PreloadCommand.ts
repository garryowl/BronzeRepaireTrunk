import { UIMediator } from "../uiscripts/UIMediator";
import ResourceManager, { LoadTaskCallbackParam } from "../../framework/resourceManager/ResourceManager";
import { ConfigManager } from "../manager/ConfigManager";
import { NotificationNames } from "../data/const/NotificationNames";
import { GameInitCommand } from "./GameInitCommand";
import PathUtil from "../../framework/utils/PathUtil";

/*
* 预加载配置, 图集, 天空盒
*/
export class PreloadCommand extends puremvc.SimpleCommand {
    execute(notification: puremvc.INotification) {
        super.execute(notification);
        ////激活大小图映射，加载小图的时候，如果发现小图在大图合集里面，则优先加载大图合集，而不是小图
        Laya.AtlasInfoManager.enable("fileconfig.json", Laya.Handler.create(this, this.onfileConfigLoaded));
    }

    //如果图集是微信下载或PC网络图片, 添加路径头
    private ReformUIAtlasPath() {
        let dic = Laya.AtlasInfoManager["_fileLoadDic"]
        for (let tKey in dic) {
            let tAtlasPath = dic[tKey];
            dic[tKey] = PathUtil.FormatURL(tAtlasPath);//重设图集路径
        }

    }

    //图集信息加载完成
    onfileConfigLoaded(): void {
        this.ReformUIAtlasPath();
        ResourceManager.Instance.LoadJsonFile("unpack.json", this.onUnpackConfigLoaded.bind(this))
    }

    //散图配置
    //LoadTaskCallbackParam{isok:true,  param:loadedcontent}
    onUnpackConfigLoaded(cbParam: LoadTaskCallbackParam) {

        //初始化共用图集
        UIMediator.GetInstance().Init(() => {
            //初始化配置, 统一加载的UI图集
            let toloadItem: any[] = [];
            UIMediator.GetInstance().GetResItem(toloadItem)//需要统一加载的UI图集:非共用图集
            ResourceManager.Instance.LoadResArray(toloadItem, (() => this.onLoaded()).bind(this));
            //加载配置
            let configToloadItem: any[] = [];
            ConfigManager.Instance.getConfig(configToloadItem);//配置表
            ResourceManager.Instance.LoadResArray(configToloadItem, (() => this.onLoaded()).bind(this), configToloadItem[0].type);
        })
    }


    private step: number = 0;
    //初始化
    onLoaded(): void {
        this.step++;
        if (this.step < 2) return;

        ConfigManager.Instance.InitOnLoaded();//配置初始化
        this.next();

    }



    private next() {
        this.facade.registerCommand(NotificationNames.GAME_INIT_COMMAND, GameInitCommand);
        this.facade.sendNotification(NotificationNames.GAME_INIT_COMMAND)
    }
}