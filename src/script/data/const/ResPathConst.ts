/*
* name;
*/
export class ResPathConst {

    public static Web_URL_Version = "?version=" + new Date().getTime();//每次进入游戏都更新版本, 可改为每次打包修改一个版本.

    //网络加载的资源
    public static Web_Load_Files = [
    ]

    //目前项目只有res/atlas下的用微信下载和PC下载的, 
    //以这些路径开始的路径或者图集中的小图, 都不会添加 RES_URL_HEADER
    //PathUtil.CheckNeedURlHeader里面进行判断
    public static Wx_Native_Files = ["wxlocal", //微信本地文件
        "res/sound"
        , "res/texture", "res/configs" //分享texture,  配置文件
        , "fileconfig.json", "version.json" //项目version, 图集json
        , "uiprefab", "prefab" //ui prefab json
        , "unpack.json" //ui散图配置
        // , "largeImg", "landdec", "items", "uiatlas"//散图图片, 默认根据unpack.json其中的路径都是本地
        , "res/atlas"//ui 图集
        , "res/model" //3d模型
    ];//微信本地文件




    static ConfigURLVersion: string = "";// "?version=" + new Date().getTime();
}