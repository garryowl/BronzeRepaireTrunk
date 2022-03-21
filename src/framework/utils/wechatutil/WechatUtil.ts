import Log from "../Log";
import Handler = Laya.Handler;
/*
* name;
*/
export class WechatUtil {
    private static _instanc: WechatUtil;

    public static getIntance(): WechatUtil {
        if (WechatUtil._instanc == null) {
            WechatUtil._instanc = new WechatUtil();
        }
        return WechatUtil._instanc;
    }

    /**
     * 创建视频
     * @param x 
     * @param y 
     * @param width 
     * @param height 
     * @param src 
     * @param poster 
     * @returns 
     */
    public static CreateVideo(leftOnStage: number, topOnStage: number, widthOnStage: number, heightOnStage: number,
        src: string, poster: string, onEnd: Function) {
        let wx = Laya.Browser.window.wx;

        let sysInfo = wx.getSystemInfoSync();
        let actwidth = sysInfo.windowWidth;//Laya.Browser.width / Laya.Browser.pixelRatio;//
        let actHeight = sysInfo.windowHeight;//Laya.Browser.height / Laya.Browser.pixelRatio// 屏幕的实际大小, 微信的top,left用的这个坐标系

        let top = topOnStage * (actHeight / Laya.stage.height) //stage是ui自适应后UI设计尺寸在屏幕范围内的大小.
        let left = leftOnStage * (actwidth / Laya.stage.width);
        let width = widthOnStage * (actHeight / Laya.stage.height);
        let height = heightOnStage * (actHeight / Laya.stage.height);

        console.log("top: " + top + " left" + left + " width:" + width + " h:" + height + " src:" + src + " act " + actwidth + " aH:" + actHeight)

        let videoInfo = {
            x: left,
            y: top,
            width: width,
            height: height,
            src: src,
            poster: poster,
            objectFit: 'fill',//'contain', //使用fill模式, 否则由于width和height只能是整数,所以视频的宽高会和要求的比例稍微不同. 需要用fill进行填充.
            controls: false,
            autoplay: true,
            backgroundColor: "#f5e7da",
            showCenterPlayBtn: false //去除播放按钮, 
        }


        let video = wx.createVideo(videoInfo)
        // button.onTap((res) => {
        //     console.log("on game club click")
        //     if (onclick) onclick();
        // })
        video.onProgress((res) => {
            console.log("progress %o", res);
        })
        video.onPlay(() => {
            Log.Debug("start play video " + src)
        });

        video.onEnded(() => {
            Log.Debug("start play video onEnded " + src)
            if (onEnd) onEnd();
        });

        return video;
    }

    public static PlayVideo(video) {
        video.play();
    }


    public static DestroyVideo(video) {
        video.destroy();
    }
}