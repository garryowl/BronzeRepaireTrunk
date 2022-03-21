import { IByteConfig } from "../../../framework/manager/ByteTableManager";

export class VideoConfigRow implements IByteConfig {

    public id: number;
    public videoRes: string;
    public videoType: number;
    public videoStage: number;

    public LoadRowBytes(buffer: Laya.Byte) {
        
        this.id = buffer.getInt32();
        this.videoRes = buffer.getUTFString();
        this.videoType = buffer.getInt32();
        this.videoStage = buffer.getInt32();

    }

    public GetID(): number { return this.id }//每个表必须有唯一的主键栏位


    public Print(): string {
         let log = "";
        log += " id: " + this.id;
        log += " videoRes: " + this.videoRes;
        log += " videoType: " + this.videoType;
        log += " videoStage: " + this.videoStage;
        log += "\n";
        return log;
    }

    public GetTableName(): string {
        return "VideoConfigRow"
    }
}
