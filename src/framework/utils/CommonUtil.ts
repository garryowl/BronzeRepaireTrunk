import Vec2 from "../commonstruct/Vec2";
import Log from "./Log";

/*
* name;
*/
export default class CommonUtil {




    // 判断是否时复杂值（对象值）
    public static isObject(m): boolean {
        return (typeof m === 'function' || (typeof m === 'object' && m !== null));
    }

    public static OnMiniGame(): boolean {
        return Laya.Browser.onMiniGame
    }


    /**
     * 转换arraybuffer成二进制数组
     * @param buffer 
     */
    public static ConvertArrayBuffer(buffer: ArrayBuffer): Laya.Byte {
        let recivBytes: Laya.Byte = new Laya.Byte();
        recivBytes.endian = Laya.Byte.LITTLE_ENDIAN; //Unity导出的字节配置默认是little endian. 网络消息是BigEndian
        recivBytes.clear();
        recivBytes.writeArrayBuffer(buffer);
        recivBytes.pos = 0;
        //返回二进制数组
        //let mbuffer: Uint8Array = recivBytes.getUint8Array(recivBytes.pos, recivBytes.length)
        return recivBytes;
    }




    //去除重复id
    public static RemoveRepeated(idList: any[]): any[] {
        let idsToLoad = []
        //去除重复id
        for (let index = 0; index < idList.length; index++) {
            let element = idList[index];
            if (idsToLoad.indexOf(element) < 0) idsToLoad.push(element)
        }
        return idsToLoad;
    }


}