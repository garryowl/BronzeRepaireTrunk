import { IByteConfig } from "../../../framework/manager/ByteTableManager";

export class PictureConfigRow implements IByteConfig {

    public id: number;
    public pictureRes: string;

    public LoadRowBytes(buffer: Laya.Byte) {
        
        this.id = buffer.getInt32();
        this.pictureRes = buffer.getUTFString();

    }

    public GetID(): number { return this.id }//每个表必须有唯一的主键栏位


    public Print(): string {
         let log = "";
        log += " id: " + this.id;
        log += " pictureRes: " + this.pictureRes;
        log += "\n";
        return log;
    }

    public GetTableName(): string {
        return "PictureConfigRow"
    }
}
