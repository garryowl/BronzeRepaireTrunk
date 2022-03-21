/*
* 游戏配置管理
*/
enum ConfigTypeEnum {
    CollectionConfig, //
    DailyTaskConfig, //
    GameShareConfig, //
    InvitationConfig, //
    ItemConfig, //
    Localization, //
    NewbieGuideConfig, //
    NPCDialogConfig, //
    RewardConfig, //
    ShopConfig, //
    SignUpConfig, //
    SoundConfig, //
    SpineConfig, //
    ToySlot, //
    UIInfo, //
    GameConfig,
    PictureConfig,
    TextConfig,
    VideoConfig,
    TitleConfig,
}
import { ByteTableManager } from "../../framework/manager/ByteTableManager";
import ResourceManager from "../../framework/resourceManager/ResourceManager";
import Log from "../../framework/utils/Log";
import { UIID } from "../uiscripts/UIIDDefine";
import { UIInfoRow } from "../data/config/UIInfoRow";
import { ResPathConst } from "../data/const/ResPathConst";
import { GameConfigRow } from "../data/config/GameConfigRow";
import { PictureConfigRow } from "../data/config/PictureConfigRow";
import { VideoConfigRow } from "../data/config/VideoConfigRow";
import { TextConfigRow } from "../data/config/TextConfigRow";
import { TitleConfigRow } from "../data/config/TitleConfigRow";

export class ConfigManager {
    private static _Instance = null;
    private m_LoadItem = [];
    private byteTables: ByteTableManager = new ByteTableManager();

    public static get Instance(): ConfigManager {
        if (ConfigManager._Instance == null) {
            ConfigManager._Instance = new ConfigManager();
        }
        return ConfigManager._Instance;
    }

    public getConfig(arrItem): void {
        this.m_LoadItem =
            [
                //配置url为配置表路径, CType为解析使用
                { url: "res/configs/UIInfo.bin" + ResPathConst.ConfigURLVersion, type: Laya.Loader.BUFFER, CType: ConfigTypeEnum.UIInfo },
                { url: "res/configs/GameConfig.bin" + ResPathConst.ConfigURLVersion, type: Laya.Loader.BUFFER, CType: ConfigTypeEnum.GameConfig },
                { url: "res/configs/PictureConfig.bin" + ResPathConst.ConfigURLVersion, type: Laya.Loader.BUFFER, CType: ConfigTypeEnum.PictureConfig },
                { url: "res/configs/TextConfig.bin" + ResPathConst.ConfigURLVersion, type: Laya.Loader.BUFFER, CType: ConfigTypeEnum.TextConfig },
                { url: "res/configs/VideoConfig.bin" + ResPathConst.ConfigURLVersion, type: Laya.Loader.BUFFER, CType: ConfigTypeEnum.VideoConfig },
                { url: "res/configs/TitleConfig.bin" + ResPathConst.ConfigURLVersion, type: Laya.Loader.BUFFER, CType: ConfigTypeEnum.TitleConfig },
            ]
        for (let i: number = 0; i < this.m_LoadItem.length; i++) {
            arrItem.push(this.m_LoadItem[i]);
        }
    }

    public InitOnLoaded(): void {
        for (let i: number = 0; i < this.m_LoadItem.length; i++) {
            let pData = ResourceManager.Instance.GetRes(this.m_LoadItem[i].url);
            if (pData != null) {
                switch (this.m_LoadItem[i].CType) {

               
                    case ConfigTypeEnum.UIInfo:
                        {
                            this.byteTables.OnTableLoaded<UIInfoRow>(UIInfoRow, pData);
                            break;
                        }

                    case ConfigTypeEnum.GameConfig:
                        {
                            this.byteTables.OnTableLoaded<GameConfigRow>(GameConfigRow, pData);
                            break;
                        }

                    case ConfigTypeEnum.PictureConfig:
                        {
                            this.byteTables.OnTableLoaded<PictureConfigRow>(PictureConfigRow, pData);
                            break;
                        }

                    case ConfigTypeEnum.VideoConfig:
                        {
                            this.byteTables.OnTableLoaded<VideoConfigRow>(VideoConfigRow, pData);
                            break;
                        }

                    case ConfigTypeEnum.TextConfig:
                        {
                            this.byteTables.OnTableLoaded<TextConfigRow>(TextConfigRow, pData);
                            break;
                        }

                    case ConfigTypeEnum.TitleConfig:
                        {
                            this.byteTables.OnTableLoaded<TitleConfigRow>(TitleConfigRow, pData);
                            break;
                        }
                }
            }
            ResourceManager.Instance.Release(this.m_LoadItem[i].url); //加载完成卸载
        }
    }

    /**
     * 根据UIID Enum读取对应的UIConfig
     * @param uiid 
     */
    private GetConfigDataByUIID(uiid: UIID): UIInfoRow {
        let uiList = this.byteTables.GetAll<UIInfoRow>(UIInfoRow);
        let config: UIInfoRow = null;
        uiList.forEach(element => {
            if (UIID[element.UIID] == uiid) {
                config = element;
            }
        });
        return config;
    }


    //获取ui配置
    public GetUIConfig(uiid: UIID): UIInfoRow {
        let config = this.GetConfigDataByUIID(uiid);
        if (config) return config;
        Log.Error("ui配置不存在, uiid:" + uiid)
        return null
    }

    public GetAllUIConfig(): Array<UIInfoRow> {
        return this.byteTables.GetAll<UIInfoRow>(UIInfoRow);
    }

    public GetUIInfo(id: number): UIInfoRow {
        return this.byteTables.GetConfigByID<UIInfoRow>(id, UIInfoRow);
    }
    public GetAllUIInfo(): Array<UIInfoRow> {
        return this.byteTables.GetAll<UIInfoRow>(UIInfoRow);
    }

    public GetGameConfig(id: number): GameConfigRow {
        return this.byteTables.GetConfigByID<GameConfigRow>(id, GameConfigRow);
    }
    public GetAllGameConfig(): Array<GameConfigRow> {
        return this.byteTables.GetAll<GameConfigRow>(GameConfigRow);
    }

    public GetPictureConfig(id: number): PictureConfigRow {
        return this.byteTables.GetConfigByID<PictureConfigRow>(id, PictureConfigRow);
    }
    public GetAllPictureConfig(): Array<PictureConfigRow> {
        return this.byteTables.GetAll<PictureConfigRow>(PictureConfigRow);
    }

    public GetVideoConfig(id: number): VideoConfigRow {
        return this.byteTables.GetConfigByID<VideoConfigRow>(id, VideoConfigRow);
    }
    public GetAllVideoConfig(): Array<VideoConfigRow> {
        return this.byteTables.GetAll<VideoConfigRow>(VideoConfigRow);
    }

    public GetTextConfig(id: number): TextConfigRow {
        return this.byteTables.GetConfigByID<TextConfigRow>(id, TextConfigRow);
    }
    public GetAllTextConfig(): Array<TextConfigRow> {
        return this.byteTables.GetAll<TextConfigRow>(TextConfigRow);
    }

    public GetTitleConfig(id: number): TitleConfigRow {
        return this.byteTables.GetConfigByID<TitleConfigRow>(id, TitleConfigRow);
    }
    public GetAllTitleConfig(): Array<TitleConfigRow> {
        return this.byteTables.GetAll<TitleConfigRow>(TitleConfigRow);
    }

}
