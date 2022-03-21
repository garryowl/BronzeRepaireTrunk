/*
* name;
*/
export default class Log {


    public static Debug(message?: any, ...optionalParams: any[]): void {
        console.log((Laya.timer ? ("FrameNO: " + Laya.timer.currFrame) : "") + " message:" + message, ...optionalParams);
    }

    public static Info(message?: any, ...optionalParams: any[]): void {

        console.log((Laya.timer ? ("FrameNO: " + Laya.timer.currFrame) : "") + " message:" + message, ...optionalParams);

    }

    public static Warn(message?: any, ...optionalParams: any[]): void {

        console.warn((Laya.timer ? ("FrameNO: " + Laya.timer.currFrame) : "") + " [WARNING]:" + message, ...optionalParams);

    }

    public static Error(message?: any, ...optionalParams: any[]): void {

        console.error((Laya.timer ? ("FrameNO: " + Laya.timer.currFrame) : "") + " [ERROR]:" + message, ...optionalParams);

    }
}