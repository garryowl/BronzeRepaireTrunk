import { IByteConfig } from "../../../framework/manager/ByteTableManager";

export class TitleConfigRow implements IByteConfig {

    public id: number;
    public textRes: string;

    public LoadRowBytes(buffer: Laya.Byte) {
        
        this.id = buffer.getInt32();
        this.textRes = buffer.getUTFString();

    }

    public GetID(): number { return this.id }//每个表必须有唯一的主键栏位


    public Print(): string {
         let log = "";
        log += " id: " + this.id;
        log += " textRes: " + this.textRes;
        log += "\n";
        return log;
    }

    public GetTableName(): string {
        return "TitleConfigRow"
    }
}
