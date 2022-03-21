import { IByteConfig } from "../../../framework/manager/ByteTableManager";

export class UIInfoRow implements IByteConfig {

    public index: number;
    public UIID: string;
    public atlas: string[];
    public unpackImagList: string[];
    public uiOpenAnimType: number;
    public uiCloseAnimType: number;
    public uiAutoCloseType: number;
    public uiShowType: number;
    public depth: number;
    public showImageBG: boolean;
    public imageBGPath: string;
    public imageBGSizeGrid: string;
    public UIWebPathPrefix: string;
    public showLoading: boolean;

    public LoadRowBytes(buffer: Laya.Byte) {
        
        this.index = buffer.getFloat32();
        this.UIID = buffer.getUTFString();
        let atlasLen = buffer.getInt16();
        this.atlas= [];
        for (let index = 0; index < atlasLen; index++) {
            this.atlas.push(buffer.getUTFString())
        }
        let unpackImagListLen = buffer.getInt16();
        this.unpackImagList= [];
        for (let index = 0; index < unpackImagListLen; index++) {
            this.unpackImagList.push(buffer.getUTFString())
        }
        this.uiOpenAnimType = buffer.getFloat32();
        this.uiCloseAnimType = buffer.getFloat32();
        this.uiAutoCloseType = buffer.getFloat32();
        this.uiShowType = buffer.getFloat32();
        this.depth = buffer.getFloat32();
        this.showImageBG = buffer.getInt32() > 0;
        this.imageBGPath = buffer.getUTFString();
        this.imageBGSizeGrid = buffer.getUTFString();
        this.UIWebPathPrefix = buffer.getUTFString();
        this.showLoading = buffer.getInt32() > 0;

    }

    public GetID(): number { return this.index }//每个表必须有唯一的主键栏位


    public Print(): string {
         let log = "";
        log += " index: " + this.index;
        log += " UIID: " + this.UIID;
        log += " atlas: ";
        let atlascount = this.atlas.length;
        for (let t = 0; t < atlascount; t++)
        {
            log += this.atlas[t];
            if (t < atlascount - 1) log += ",";
        }
        log += " unpackImagList: ";
        let unpackImagListcount = this.unpackImagList.length;
        for (let t = 0; t < unpackImagListcount; t++)
        {
            log += this.unpackImagList[t];
            if (t < unpackImagListcount - 1) log += ",";
        }
        log += " uiOpenAnimType: " + this.uiOpenAnimType;
        log += " uiCloseAnimType: " + this.uiCloseAnimType;
        log += " uiAutoCloseType: " + this.uiAutoCloseType;
        log += " uiShowType: " + this.uiShowType;
        log += " depth: " + this.depth;
        log += " showImageBG: " + this.showImageBG;
        log += " imageBGPath: " + this.imageBGPath;
        log += " imageBGSizeGrid: " + this.imageBGSizeGrid;
        log += " UIWebPathPrefix: " + this.UIWebPathPrefix;
        log += " showLoading: " + this.showLoading;
        log += "\n";
        return log;
    }

    public GetTableName(): string {
        return "UIInfoRow"
    }
}
