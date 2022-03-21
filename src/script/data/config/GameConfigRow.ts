import { IByteConfig } from "../../../framework/manager/ByteTableManager";

export class GameConfigRow implements IByteConfig {

    public id: number;
    public stageCategory: number;
    public detailNum: number;
    public stepType: number;
    public eventId: number;
    public titleConfigId: number;
    public stepContent: string;

    public LoadRowBytes(buffer: Laya.Byte) {
        
        this.id = buffer.getInt32();
        this.stageCategory = buffer.getInt32();
        this.detailNum = buffer.getInt32();
        this.stepType = buffer.getInt32();
        this.eventId = buffer.getInt32();
        this.titleConfigId = buffer.getInt32();
        this.stepContent = buffer.getUTFString();

    }

    public GetID(): number { return this.id }//每个表必须有唯一的主键栏位


    public Print(): string {
         let log = "";
        log += " id: " + this.id;
        log += " stageCategory: " + this.stageCategory;
        log += " detailNum: " + this.detailNum;
        log += " stepType: " + this.stepType;
        log += " eventId: " + this.eventId;
        log += " titleConfigId: " + this.titleConfigId;
        log += " stepContent: " + this.stepContent;
        log += "\n";
        return log;
    }

    public GetTableName(): string {
        return "GameConfigRow"
    }
}
