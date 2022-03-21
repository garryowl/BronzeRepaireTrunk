(function () {
	'use strict';

	class NotificationNames {
	}
	NotificationNames.OPENUI = "OPENUI";
	NotificationNames.OPENUIWITHPARAM = "OPENUIWITHPARAM";
	NotificationNames.HIDEUI = "HIDEUI";
	NotificationNames.HIDEALLUI = "HIDEALLUI";
	NotificationNames.DESTROYUI = "DESTROYUI";
	NotificationNames.DESTROYALLUI = "DESTROYALLUI";
	NotificationNames.START_UP_INIT_COMMAND = "START_UP_INIT_COMMAND";
	NotificationNames.CHECK_VERSION_COMMAND = "CHECK_VERSION_COMMAND";
	NotificationNames.RES_HOTUPDATE_COMMAND = "RES_HOTUPDATE_COMMAND";
	NotificationNames.PRELOAD_COMMAND = "PRELOAD_COMMAND";
	NotificationNames.GAME_INIT_COMMAND = "GAME_INIT_COMMAND";
	NotificationNames.GET_PLATFORM_AUTH_COMMAND = "GET_PLATFORM_AUTH_COMMAND";
	NotificationNames.INIT_PLATFORM_INFO_COMMAND = "INIT_PLATFORM_INFO_COMMAND";
	NotificationNames.NETWORK_GAME_LOG_IN_COMMAND = "NETWORK_GAME_LOG_IN_COMMAND";
	NotificationNames.ENTER_LOGIN_SCENE_COMMAND = "ENTER_LOGIN_SCENE_COMMAND";
	NotificationNames.InputEvent = "InputEvent";
	NotificationNames.LoadingUIProgress = "LoadingUIProgress";
	NotificationNames.CalibrationCorrect = "CalibrationCorrect";
	NotificationNames.NEXT_STAGE = "NEXT_STAGE";
	NotificationNames.RESTART_GAME = "RESTART_GAME";

	class Log {
	    static Debug(message, ...optionalParams) {
	        console.log((Laya.timer ? ("FrameNO: " + Laya.timer.currFrame) : "") + " message:" + message, ...optionalParams);
	    }
	    static Info(message, ...optionalParams) {
	        console.log((Laya.timer ? ("FrameNO: " + Laya.timer.currFrame) : "") + " message:" + message, ...optionalParams);
	    }
	    static Warn(message, ...optionalParams) {
	        console.warn((Laya.timer ? ("FrameNO: " + Laya.timer.currFrame) : "") + " [WARNING]:" + message, ...optionalParams);
	    }
	    static Error(message, ...optionalParams) {
	        console.error((Laya.timer ? ("FrameNO: " + Laya.timer.currFrame) : "") + " [ERROR]:" + message, ...optionalParams);
	    }
	}

	class GameConfig {
	    constructor() {
	    }
	    static init() {
	        var reg = Laya.ClassUtils.regClass;
	    }
	}
	GameConfig.width = 1920;
	GameConfig.height = 1080;
	GameConfig.scaleMode = "fixedheight";
	GameConfig.screenMode = "horizontal";
	GameConfig.alignV = "middle";
	GameConfig.alignH = "center";
	GameConfig.startScene = "uiprefab/BronzewareContentUI.scene";
	GameConfig.sceneRoot = "";
	GameConfig.debug = false;
	GameConfig.stat = true;
	GameConfig.physicsDebug = false;
	GameConfig.exportSceneToJson = true;
	GameConfig.init();

	class Dictionary {
	    constructor() {
	        this.items = {};
	    }
	    set(key, value) {
	        this.items[key] = value;
	    }
	    remove(key) {
	        if (this.has(key)) {
	            delete this.items[key];
	            return true;
	        }
	        else {
	            return false;
	        }
	    }
	    has(key) {
	        return key in this.items;
	    }
	    get(key) {
	        return this.has(key) ? this.items[key] : null;
	    }
	    clear() {
	        this.items = {};
	    }
	    get size() {
	        let count = 0;
	        for (var prop in this.items) {
	            if (this.items.hasOwnProperty(prop))
	                ++count;
	        }
	        return count;
	    }
	    get keys() {
	        let values = [];
	        for (var k in this.items) {
	            values.push(k);
	        }
	        return values;
	    }
	    get values() {
	        let values = [];
	        for (var k in this.items) {
	            values.push(this.items[k]);
	        }
	        return values;
	    }
	    get Items() {
	        return this.items;
	    }
	    Clone() {
	        let clone = new Dictionary();
	        for (var k in this.items) {
	            clone.set(k, this.items[k]);
	        }
	        return clone;
	    }
	}

	class CommonUtil {
	    static isObject(m) {
	        return (typeof m === 'function' || (typeof m === 'object' && m !== null));
	    }
	    static OnMiniGame() {
	        return Laya.Browser.onMiniGame;
	    }
	    static ConvertArrayBuffer(buffer) {
	        let recivBytes = new Laya.Byte();
	        recivBytes.endian = Laya.Byte.LITTLE_ENDIAN;
	        recivBytes.clear();
	        recivBytes.writeArrayBuffer(buffer);
	        recivBytes.pos = 0;
	        return recivBytes;
	    }
	    static RemoveRepeated(idList) {
	        let idsToLoad = [];
	        for (let index = 0; index < idList.length; index++) {
	            let element = idList[index];
	            if (idsToLoad.indexOf(element) < 0)
	                idsToLoad.push(element);
	        }
	        return idsToLoad;
	    }
	}

	class ConfigTable {
	    constructor() {
	        this.configDic = new Dictionary();
	    }
	    Load(buffer, type) {
	        this.curType = type;
	        let bytes = CommonUtil.ConvertArrayBuffer(buffer);
	        let rowNum = bytes.getInt32();
	        for (let index = 0; index < rowNum; index++) {
	            let configData = new this.curType();
	            configData.LoadRowBytes(bytes);
	            if (this.configDic.get(configData.GetID())) {
	                Log.Error("配置表 %s ID %s 重复", configData.GetTableName(), configData.GetID());
	                continue;
	            }
	            this.configDic.set(configData.GetID(), configData);
	        }
	    }
	    GetByID(id) {
	        let data = this.configDic.get(id);
	        return data;
	    }
	    GetAll() {
	        return this.configDic.values;
	    }
	    GetCount() {
	        return this.configDic.keys.length;
	    }
	    PrintTable() {
	        let allRows = this.configDic.values;
	        let tableString = "\n";
	        for (let index = 0; index < allRows.length; index++) {
	            let row = allRows[index];
	            if (index == 0) {
	                tableString += "打印表 " + row.GetTableName() + "=========================================================================\n";
	            }
	            tableString += row.Print();
	        }
	        tableString += "表尾=========================================================================\n";
	        Log.Debug(tableString);
	    }
	    GetTableName() {
	        let allRows = this.configDic.values;
	        return allRows.length > 0 ? allRows[0].GetTableName() : "EnmptyTable";
	    }
	}
	class ByteTableManager {
	    constructor() {
	        this.m_configDic = new Dictionary();
	    }
	    OnTableLoaded(type, buffer) {
	        if (this.m_configDic.get(type)) {
	            Log.Error("表格重复添加, %s 已经存在", type.toString());
	            return;
	        }
	        let configTable = new ConfigTable();
	        configTable.Load(buffer, type);
	        this.m_configDic.set(type, configTable);
	    }
	    GetConfigByID(id, type) {
	        let table = this.m_configDic.get(type);
	        if (table) {
	            let config = table.GetByID(id);
	            if (config == null)
	                Log.Warn("配置表 %s中id %d 不存在", table.GetTableName(), id);
	            return config;
	        }
	        else {
	            Log.Warn("配置表不存在 %s", type.toString());
	            return null;
	        }
	    }
	    GetAll(type) {
	        let table = this.m_configDic.get(type);
	        if (table) {
	            return table.GetAll();
	        }
	        else {
	            Log.Warn("配置表不存在 %s", type.toString());
	            return null;
	        }
	    }
	    GetCount(type) {
	        let table = this.m_configDic.get(type);
	        if (table) {
	            return table.GetCount();
	        }
	        else {
	            Log.Warn("配置表不存在 %s", type.toString());
	            return null;
	        }
	    }
	}

	class PathUtil {
	    static GetUrlFromObj(urlObject) {
	        return urlObject.url ? urlObject.url : urlObject;
	    }
	    static IsUrlFormated(urlToCheck) {
	        return true;
	    }
	    static FormatURL(url) {
	        if (this.IsUrlFormated(url))
	            return url;
	        return url;
	    }
	    static FormatURLArray(urls) {
	        let urllist = [];
	        for (let index = 0; index < urls.length; index++) {
	            let element = urls[index];
	            urllist.push(this.FormatURL(element));
	        }
	        return urllist;
	    }
	    static ReformatURL(url) {
	        if (!this.IsUrlFormated(url))
	            return url;
	        return url;
	    }
	    static ReformatURLArray(urls) {
	        let urllist = [];
	        for (let index = 0; index < urls.length; index++) {
	            let element = urls[index];
	            urllist.push(this.ReformatURL(element));
	        }
	        return urllist;
	    }
	}

	class ResourceManager {
	    constructor() {
	        this.unloadingMap = new Dictionary();
	        this.loaded3DRes = new Dictionary();
	        this.loaded3DDeps = new Dictionary();
	        this.taskMap = new Dictionary();
	        this.loadingUrlMap = new Dictionary();
	        Laya.loader.on(Laya.Event.ERROR, this, this.onError);
	    }
	    static get Instance() {
	        if (this._intance == null) {
	            this._intance = new ResourceManager();
	        }
	        return this._intance;
	    }
	    onError(msg) {
	        Log.Error("ResourceManager load error:" + msg);
	    }
	    LoadRes(url, comFun, type) {
	        let formatURL = PathUtil.GetUrlFromObj(PathUtil.FormatURL(url));
	        if (this.unloadingMap.get(formatURL)) {
	            Log.Debug("加载资源, 取消卸载" + formatURL);
	            this.recordUnloaded(formatURL);
	        }
	        {
	            let resExist = this.checkResLoaded(formatURL);
	            if (resExist) {
	                if (comFun)
	                    comFun(new LoadTaskCallbackParam(true, this.GetRes(formatURL)));
	            }
	            else {
	                let loadTask = this.createLoadingTask(formatURL, formatURL, comFun, null);
	                let needLoad = this.recordTask(loadTask);
	                if (!needLoad)
	                    return;
	                Laya.loader.load(formatURL, Laya.Handler.create(this, this.onloaded, [formatURL, comFun, null, loadTask]), null, type);
	            }
	        }
	    }
	    LoadBytesFile(url, comFun) {
	        this.LoadRes(url, comFun, Laya.Loader.BUFFER);
	    }
	    LoadJsonFile(url, comFun) {
	        this.LoadRes(url, comFun, Laya.Loader.JSON);
	    }
	    onloaded(url, comFun, failFun, task, loadeContent) {
	        let commpleted = this.checkAllTaskComplete(task.TaskID);
	        if (commpleted) {
	            this.executeCallbackAndClearTask(task.TaskID, loadeContent);
	        }
	    }
	    LoadResArray(urls, comFun, type, progressFun) {
	        let urlcopy = urls;
	        let urllist = [];
	        for (let index = 0; index < urlcopy.length; index++) {
	            let tempUrl = PathUtil.GetUrlFromObj(urlcopy[index]);
	            if (this.unloadingMap.get(tempUrl)) {
	                Log.Debug("加载资源, 取消卸载" + tempUrl);
	                this.recordUnloaded(tempUrl);
	            }
	            {
	                let resExist = this.checkResLoaded(tempUrl);
	                if (resExist) {
	                    Log.Warn("资源已经2d加载, 不需要重复加载 " + tempUrl);
	                }
	                else {
	                    urllist.push(tempUrl);
	                }
	            }
	        }
	        if (urllist.length == 0) {
	            if (comFun)
	                comFun(new LoadTaskCallbackParam(true, urls));
	            return;
	        }
	        let notLoadingUrlList = this.getNotLoadingUrl(urllist);
	        let loadTask = this.createLoadingTask(urllist, urlcopy, comFun, null);
	        let needLoad = this.recordTask(loadTask);
	        if (!needLoad)
	            return;
	        if (notLoadingUrlList.length == 0)
	            Log.Error("没有需要加载的2d资源, 但是通过了this.recordTask的检测.");
	        Laya.loader.load(notLoadingUrlList, Laya.Handler.create(this, this.onArrayloaded, [urllist, comFun, null, loadTask, progressFun]), Laya.Handler.create(this, this.onArrayLoading, [progressFun], false), type);
	    }
	    onArrayLoading(progressFun, progress) {
	        if (progressFun) {
	            progressFun(progress);
	        }
	    }
	    onArrayloaded(urlList, comFun, failFun, task, progressFun, result) {
	        if (progressFun) {
	            progressFun(1);
	        }
	        let commpleted = this.checkAllTaskComplete(task.TaskID);
	        if (commpleted) {
	            this.executeCallbackAndClearTask(task.TaskID);
	        }
	    }
	    GetRes(url) {
	        let resUrl = PathUtil.FormatURL(url);
	        let obj = Laya.loader.getRes(resUrl);
	        if (obj == null) {
	            Log.Error("获取资源为空, 没有加载:" + resUrl);
	        }
	        return obj;
	    }
	    HasRes(url) {
	        let resUrl = PathUtil.FormatURL(url);
	        let obj = Laya.loader.getRes(resUrl);
	        return obj != null;
	    }
	    Release(resurl, comFun) {
	        if (!resurl) {
	            Log.Debug("卸载的资源为空, 不需要卸载");
	            if (comFun)
	                comFun();
	            return;
	        }
	        let relaseUrl = null;
	        if (resurl instanceof Laya.Image) {
	            if (resurl && resurl.texture && resurl.texture.url) {
	                relaseUrl = resurl.texture.url;
	            }
	            else {
	                if (!resurl.texture) {
	                    Log.Error("Image的texture为空, 只能卸载通过 Image.texture = ResourceManger.getRes() 方式加载的Image! 其他的只能手动destory Image后, release(url)");
	                    if (comFun)
	                        comFun();
	                    return;
	                }
	            }
	        }
	        else if (Laya.Sprite3D && resurl instanceof Laya.Sprite3D) {
	            if (resurl && resurl.url) {
	                relaseUrl = resurl.url;
	            }
	        }
	        else if (Laya.SkyBoxMaterial && resurl instanceof Laya.SkyBoxMaterial) {
	            if (resurl && resurl.url) {
	                relaseUrl = resurl.url;
	            }
	            else {
	                Log.Error("Laya.SkyBoxMaterial的url为空, 只能通过release(url)卸载");
	                if (comFun)
	                    comFun();
	                return;
	            }
	        }
	        else {
	            relaseUrl = resurl;
	        }
	        let formatedRelaseUrl = PathUtil.FormatURL(relaseUrl);
	        if (this.checkIsLoading(formatedRelaseUrl)) {
	            Log.Warn("正在加载资源, 不进行卸载" + formatedRelaseUrl);
	            if (comFun)
	                comFun();
	            return;
	        }
	        let resExist = this.checkResLoaded(formatedRelaseUrl);
	        if (!resExist) {
	            if ((Laya.Sprite3D && resurl instanceof Laya.Sprite3D) || resurl instanceof Laya.Image) {
	                Log.Warn("资源已经卸载, 但是sprite3d模型/Image变量没有设空, 导致重复卸载!!" + formatedRelaseUrl);
	            }
	            else {
	                Log.Warn("资源没有加载, 不需要卸载" + formatedRelaseUrl);
	            }
	            if (comFun)
	                comFun();
	            return;
	        }
	        if (resurl instanceof Laya.Image) {
	            this.releaseImage(resurl, comFun);
	        }
	        else if (Laya.Sprite3D && resurl instanceof Laya.Sprite3D) {
	            this.releaseSprite3d(resurl, comFun);
	        }
	        else if (Laya.SkyBoxMaterial && resurl instanceof Laya.SkyBoxMaterial) {
	            this.releaseSkyMaterial(resurl, comFun);
	        }
	        else {
	            let url = PathUtil.FormatURL(resurl);
	            this.recordUnloading(resurl);
	            this.releaseDependency(url, (ok) => {
	                if (ok) {
	                    Laya.loader.clearRes(url);
	                    this.loaded3DRes.remove(url);
	                    this.recordUnloaded(url);
	                }
	                else {
	                    Log.Debug("卸载中断");
	                }
	                if (comFun)
	                    comFun();
	            });
	        }
	    }
	    releaseImage(image, comFun) {
	        if (image && image.texture) {
	            let url = image.texture.url;
	            if (url) {
	                this.Release(url, () => {
	                    if (comFun)
	                        comFun();
	                    image.destroy(true);
	                    image = null;
	                });
	            }
	            else {
	                Log.Error("传入的imageTexture的url为空, 无法卸载");
	            }
	        }
	        else if (image.skin != "") {
	            image.destroy(true);
	            image = null;
	        }
	        else {
	            Log.Error("传入的image为空,或者image的texture为空, 同时不包含图集中小图, 无法卸载");
	        }
	    }
	    releaseSprite3d(model, comFun) {
	        if (model && model.url) {
	            let resurl = model.url;
	            let url = PathUtil.FormatURL(resurl);
	            this.Release(url, () => {
	                model.destroy(true);
	                if (comFun)
	                    comFun();
	            });
	        }
	        else {
	            Log.Error("传入的model为空,或者model的url为空 无法卸载");
	        }
	    }
	    releaseSkyMaterial(model, comFun) {
	        if (model && model.url) {
	            let resurl = model.url;
	            let url = PathUtil.FormatURL(resurl);
	            this.Release(url, () => {
	                model.destroy();
	                if (comFun)
	                    comFun();
	            });
	        }
	        else {
	            Log.Error("传入的model为空,或者model的url为空 无法卸载");
	        }
	    }
	    releaseDependency(resurl, comFun) {
	        let index = resurl.lastIndexOf(".lh");
	        if (index < 0) {
	            index = resurl.lastIndexOf(".ls");
	            if (index < 0) {
	                comFun(true);
	                return;
	            }
	        }
	        Log.Debug("开始卸载依赖资源 " + resurl);
	        let depResJsonUrl = resurl.substring(0, index) + ".json";
	        Log.Debug("--卸载依赖资源, 使用依赖资源记录文档-" + depResJsonUrl);
	        this.LoadRes(depResJsonUrl, (param) => {
	            if (param.Ok) {
	                let json = param.Param;
	                Log.Debug("加载卸载依赖资源json完成 " + resurl);
	                if (!this.unloadingMap.get(resurl)) {
	                    Log.Debug("资源卸载被取消, 不继续卸载 " + resurl);
	                    comFun(false);
	                    return;
	                }
	                for (let index = 0; index < json.denpendenciesList.length; index++) {
	                    let dependentResInfo = json.denpendenciesList[index];
	                    let lhParentDir = depResJsonUrl.substring(0, depResJsonUrl.lastIndexOf("/"));
	                    let depResUrl = lhParentDir + "/" + dependentResInfo.Path;
	                    let refCount = this.loaded3DDeps.get(depResUrl);
	                    if (refCount && refCount > 1) {
	                        refCount -= 1;
	                        this.loaded3DDeps.set(depResUrl, refCount);
	                    }
	                    else {
	                        this.loaded3DDeps.remove(depResUrl);
	                        let res = Laya.loader.getRes(depResUrl);
	                        if (res)
	                            res.dispose();
	                        else {
	                            Log.Warn(depResJsonUrl + " 资源不存在, 已经卸载," + depResUrl);
	                        }
	                    }
	                }
	                Log.Debug("卸载完依赖资源");
	                this.Release(depResJsonUrl);
	                comFun(true);
	            }
	            else {
	                Log.Error("加载依赖资源json出错. " + depResJsonUrl);
	                comFun(false);
	            }
	        });
	    }
	    CreateTextureArray(url, comFun) {
	        this.CreateResArray(url, comFun, Laya.Texture2D);
	    }
	    CreateResArray(url, comFun, clas, progressFun) {
	        Log.Debug("开始加载资源 " + url[0]);
	        let urlcopy = CommonUtil.RemoveRepeated(url);
	        urlcopy = PathUtil.FormatURLArray(urlcopy);
	        let urllist = [];
	        try {
	            for (let index = 0; index < urlcopy.length; index++) {
	                let tempUrl = urlcopy[index];
	                if (this.unloadingMap.get(tempUrl)) {
	                    Log.Debug("加载资源, 取消卸载" + tempUrl);
	                    this.recordUnloaded(tempUrl);
	                }
	                {
	                    let resExist = this.checkResLoaded(tempUrl);
	                    if (resExist) {
	                        Log.Warn("资源已经加载, 不需要重复加载 " + tempUrl);
	                    }
	                    else {
	                        urllist.push(tempUrl);
	                    }
	                }
	            }
	            if (urllist.length == 0) {
	                Log.Debug("没有需要加载的资源");
	                if (comFun)
	                    comFun(new LoadTaskCallbackParam(true, url));
	                return;
	            }
	            let notLoadingUrlList = this.getNotLoadingUrl(urllist);
	            let loadTask = this.createLoadingTask(urllist, urlcopy, comFun, null);
	            let needLoad = this.recordTask(loadTask);
	            if (!needLoad)
	                return;
	            if (notLoadingUrlList.length == 0)
	                Log.Error("没有需要加载的资源, 但是通过了this.recordTask的检测.");
	            Laya.loader.create(notLoadingUrlList, Laya.Handler.create(this, this.onArrayCreated, [urllist, comFun, null, loadTask.TaskID]), Laya.Handler.create(this, this.onCreateArrayLoading, [progressFun], false), clas, null);
	        }
	        catch (error) {
	            for (let index = 0; index < urllist.length; index++) {
	                let element = urllist[index];
	                Log.Debug("加载报错 " + (element.url ? element.url : element));
	            }
	            Log.Error("createResArray catch error:" + error + " ");
	        }
	    }
	    onArrayCreated(urlobj, comFun, failFun, taskid) {
	        Log.Debug("3d资源加载成功 taskid:" + taskid + " url[0]:" + urlobj[0].url);
	        let commpleted = this.checkAllTaskComplete(taskid);
	        if (commpleted) {
	            let completedTask = this.taskMap.get(taskid);
	            let loadedUrlObj = this.getLoadedArray(completedTask.LoadingUrlArray);
	            this.recordLoadedDependencies(loadedUrlObj, () => {
	                this.executeCallbackAndClearTask(taskid);
	            });
	        }
	    }
	    onCreateArrayLoading(progressFun, progress) {
	        if (progressFun) {
	            progressFun(progress);
	        }
	    }
	    getLoadedArray(urlobj) {
	        let loadedUrl = [];
	        for (let index = 0; index < urlobj.length; index++) {
	            let urlTemp = urlobj[index];
	            let exist = this.checkResLoaded(urlTemp);
	            if (exist) {
	                loadedUrl.push(urlTemp);
	            }
	        }
	        return loadedUrl;
	    }
	    recordLoadedDependencies(resurls, comFun) {
	        Log.Debug("开始记录 依赖资源");
	        let total = resurls.length;
	        let count = 0;
	        for (let index = 0; index < resurls.length; index++) {
	            let element = resurls[index];
	            let url = PathUtil.GetUrlFromObj(element);
	            this.recordLoadedDependency(url, () => {
	                count += 1;
	                if (count == total) {
	                    Log.Debug("完成 依赖资源记录");
	                    if (comFun)
	                        comFun();
	                }
	            });
	        }
	    }
	    recordLoadedDependency(resurl, comFun) {
	        if (this.loaded3DRes.get(resurl)) {
	            Log.Debug("3d资源已经加载过, 不记录相同依赖资源" + resurl);
	            comFun(true);
	            return;
	        }
	        let index = resurl.lastIndexOf(".lh");
	        if (index < 0) {
	            index = resurl.lastIndexOf(".ls");
	            if (index < 0) {
	                comFun(true);
	                return;
	            }
	        }
	        this.loaded3DRes.set(resurl, 1);
	        resurl = resurl.substring(0, index) + ".json";
	        Log.Debug("--根据依赖配置文件, 记录加载依赖 " + resurl);
	        this.LoadRes(resurl, (param) => {
	            if (param.Ok) {
	                let json = param.Param;
	                Log.Debug("依赖资源json 加载成功");
	                for (let index = 0; index < json.denpendenciesList.length; index++) {
	                    let dependentResInfo = json.denpendenciesList[index];
	                    let lhParentDir = resurl.substring(0, resurl.lastIndexOf("/"));
	                    let depResUrl = lhParentDir + "/" + dependentResInfo.Path;
	                    let refCount = this.loaded3DDeps.get(depResUrl);
	                    if (refCount) {
	                        this.loaded3DDeps.set(depResUrl, refCount + 1);
	                    }
	                    else {
	                        this.loaded3DDeps.set(depResUrl, 1);
	                    }
	                }
	                this.Release(resurl);
	                comFun(true);
	            }
	            else {
	                Log.Error("加载依赖资源json出错. " + resurl);
	                comFun(false);
	            }
	        });
	    }
	    createLoadingTask(urlObjectToLoad, allUrlObject, comFun, failFunc) {
	        let task = new LoadingTask();
	        if (comFun)
	            task.CompleteCallbackList.push(comFun);
	        if (failFunc)
	            task.FailCallbackList.push(failFunc);
	        if (urlObjectToLoad instanceof Array) {
	            task.LoadingUrlArray = this.converUrlObjectArray(urlObjectToLoad);
	            task.AllTaskUrlArray = this.converUrlObjectArray(allUrlObject);
	        }
	        else {
	            task.LoadingUrlArray = [PathUtil.GetUrlFromObj(urlObjectToLoad)];
	            task.AllTaskUrlArray = [PathUtil.GetUrlFromObj(allUrlObject)];
	        }
	        task.isArray = task.LoadingUrlArray.length > 1;
	        task.TaskID = ResourceManager.LOADING_TASK_ID++;
	        return task;
	    }
	    recordTask(task) {
	        let isAllLoading = true;
	        ;
	        for (let index = 0; index < task.LoadingUrlArray.length; index++) {
	            let tempUrl = task.LoadingUrlArray[index];
	            if (!this.checkIsLoading(tempUrl)) {
	                isAllLoading = false;
	                break;
	            }
	        }
	        if (isAllLoading) {
	            for (let index = 0; index < task.LoadingUrlArray.length; index++) {
	                let existTaskIDList = this.loadingUrlMap.get(task.LoadingUrlArray[index]);
	                if (!existTaskIDList) {
	                    this.loadingUrlMap.set(task.LoadingUrlArray[index], [task.TaskID]);
	                }
	                else {
	                    existTaskIDList.push(task.TaskID);
	                }
	                task.LoadingComplete = true;
	                this.taskMap.set(task.TaskID, task);
	            }
	            return false;
	        }
	        if (!task.isArray && !isAllLoading) {
	            this.loadingUrlMap.set(task.LoadingUrlArray[0], [task.TaskID]);
	            this.taskMap.set(task.TaskID, task);
	            return true;
	        }
	        if (task.isArray && !isAllLoading) {
	            this.taskMap.set(task.TaskID, task);
	            for (let index = 0; index < task.LoadingUrlArray.length; index++) {
	                let tempUrl = task.LoadingUrlArray[index];
	                let existTaskIDList = this.loadingUrlMap.get(tempUrl);
	                if (!existTaskIDList) {
	                    this.loadingUrlMap.set(tempUrl, [task.TaskID]);
	                }
	                else {
	                    if (existTaskIDList.indexOf(task.TaskID) < 0)
	                        existTaskIDList.push(task.TaskID);
	                }
	            }
	        }
	        return true;
	    }
	    checkAllTaskComplete(taskid) {
	        let completedTask = this.taskMap.get(taskid);
	        if (completedTask) {
	            completedTask.LoadingComplete = true;
	            let allTaskComplete = true;
	            for (let index = 0; index < completedTask.LoadingUrlArray.length; index++) {
	                let tempUrl = completedTask.LoadingUrlArray[index];
	                let existTaskIDList = this.loadingUrlMap.get(tempUrl);
	                if (existTaskIDList) {
	                    for (let index = 0; index < existTaskIDList.length; index++) {
	                        let tempTaskId = existTaskIDList[index];
	                        let tempCheckTask = this.taskMap.get(tempTaskId);
	                        if (!tempCheckTask.LoadingComplete) {
	                            allTaskComplete = false;
	                            Log.Debug("任务id:" + taskid + " 加载完成, 其中url:" + tempUrl + " 还有相关task任务没有完成下载");
	                            Log.Debug("完成的任务 id:" + taskid + "包含url");
	                            for (let index = 0; index < completedTask.LoadingUrlArray.length; index++) {
	                                let element = completedTask.LoadingUrlArray[index];
	                                Log.Debug("url:" + element);
	                            }
	                            Log.Debug("没完成的任务 id:" + tempTaskId + "包含url");
	                            for (let index = 0; index < tempCheckTask.LoadingUrlArray.length; index++) {
	                                let element = tempCheckTask.LoadingUrlArray[index];
	                                Log.Debug("url:" + element);
	                            }
	                            break;
	                        }
	                    }
	                    if (!allTaskComplete) {
	                        break;
	                    }
	                }
	                else {
	                    Log.Error("检测加载完成任务的url完成情况, url不存在 " + tempUrl);
	                }
	            }
	            return allTaskComplete;
	        }
	        else {
	            Log.Error("加载完成, taskid不存在 " + taskid);
	            return false;
	        }
	    }
	    executeCallbackAndClearTask(taskid, callbackParam) {
	        let completedTask = this.taskMap.get(taskid);
	        if (completedTask) {
	            let callbackArray = [];
	            let callbackParamArray = [];
	            for (let index = 0; index < completedTask.LoadingUrlArray.length; index++) {
	                let tempUrl = completedTask.LoadingUrlArray[index];
	                let existTaskIDList = this.loadingUrlMap.get(tempUrl);
	                for (let index = 0; index < existTaskIDList.length; index++) {
	                    let tempTaskId = existTaskIDList[index];
	                    let tempCallbackTask = this.taskMap.get(tempTaskId);
	                    if (tempCallbackTask.CallBackExecuted)
	                        continue;
	                    let isSucceeded = this.checkLoadedSuccess(tempCallbackTask.LoadingUrlArray);
	                    let callbackList = tempCallbackTask.CompleteCallbackList;
	                    for (let index = 0; index < callbackList.length; index++) {
	                        let callback = callbackList[index];
	                        callbackArray.push(callback);
	                        let param = new LoadTaskCallbackParam(isSucceeded, callbackParam ? callbackParam : PathUtil.ReformatURLArray(tempCallbackTask.AllTaskUrlArray));
	                        callbackParamArray.push(param);
	                    }
	                    tempCallbackTask.CallBackExecuted = true;
	                }
	            }
	            for (let index = 0; index < completedTask.LoadingUrlArray.length; index++) {
	                let tempUrl = completedTask.LoadingUrlArray[index];
	                let existTaskIDList = this.loadingUrlMap.get(tempUrl);
	                for (let index = 0; index < existTaskIDList.length; index++) {
	                    let tempTaskId = existTaskIDList[index];
	                    this.taskMap.remove(tempTaskId);
	                }
	                this.loadingUrlMap.remove(tempUrl);
	            }
	            for (let index = 0; index < callbackArray.length; index++) {
	                let callback = callbackArray[index];
	                callback(callbackParamArray[index]);
	            }
	            if (callbackArray.length == 0) {
	                let isSucceeded = this.checkLoadedSuccess(completedTask.LoadingUrlArray);
	                Log.Warn("当前任务执行 " + (isSucceeded ? "成功" : "失败") + ", 但是没有设置对应回调! task:" + taskid);
	            }
	        }
	        else {
	            Log.Error("任务不存在, 无法执行回调 " + taskid);
	        }
	    }
	    checkResLoaded(urlObj) {
	        let url = PathUtil.GetUrlFromObj(urlObj);
	        let resUrl = PathUtil.FormatURL(url);
	        let obj = Laya.loader.getRes(resUrl);
	        if (!obj)
	            return false;
	        if (CommonUtil.isObject(obj) && "loaded" in obj) {
	            return obj.loaded;
	        }
	        else {
	            return true;
	        }
	    }
	    recordUnloaded(urlObject) {
	        let url = PathUtil.GetUrlFromObj(urlObject);
	        let exist = this.unloadingMap.get(url);
	        if (!exist) {
	            Log.Warn("没有在卸载map中, 无法删除记录" + url);
	            return;
	        }
	        else {
	            this.unloadingMap.remove(url);
	        }
	    }
	    recordUnloading(urlObject) {
	        let url = urlObject.url ? urlObject.url : urlObject;
	        let exist = this.unloadingMap.get(url);
	        if (exist) {
	            Log.Warn("已经在卸载ap中, 重复记录" + url);
	            return;
	        }
	        else {
	            this.unloadingMap.set(url, true);
	        }
	    }
	    checkIsLoading(formatedUrlObj) {
	        let url = PathUtil.GetUrlFromObj(formatedUrlObj);
	        let existTaskIDList = this.loadingUrlMap.get(url);
	        return existTaskIDList ? true : false;
	    }
	    getNotLoadingUrl(notLoadedUrllist) {
	        let notLoadingUrlList = [];
	        for (let index = 0; index < notLoadedUrllist.length; index++) {
	            let url = PathUtil.GetUrlFromObj(notLoadedUrllist[index]);
	            if (!this.checkIsLoading(url)) {
	                notLoadingUrlList.push(url);
	            }
	        }
	        return notLoadingUrlList;
	    }
	    checkLoadedSuccess(urlobj) {
	        let failUrl = [];
	        for (let index = 0; index < urlobj.length; index++) {
	            let urlTemp = urlobj[index];
	            let exist = this.checkResLoaded(urlTemp);
	            if (!exist) {
	                failUrl.push(urlTemp);
	            }
	        }
	        if (failUrl.length > 0) {
	            Log.Warn("资源加载失败, 数量:" + failUrl.length);
	            for (let index = 0; index < failUrl.length; index++) {
	                let element = failUrl[index];
	                Log.Warn("加载失败资源:" + (element.url ? element.url : element));
	            }
	            return false;
	        }
	        return true;
	    }
	    converUrlObjectArray(urlObjectArray) {
	        let urlArray = [];
	        for (let index = 0; index < urlObjectArray.length; index++) {
	            let element = urlObjectArray[index];
	            urlArray.push(PathUtil.GetUrlFromObj(element));
	        }
	        return urlArray;
	    }
	}
	ResourceManager._intance = null;
	ResourceManager.LOADING_TASK_ID = 1;
	class DependenciesResInfos {
	}
	class DependenciesResInfo {
	}
	class LoadingTask {
	    constructor() {
	        this.CompleteCallbackList = [];
	        this.FailCallbackList = [];
	        this.isArray = false;
	        this.LoadingComplete = false;
	        this.CallBackExecuted = false;
	    }
	}
	class LoadTaskCallbackParam {
	    constructor(ok, param) {
	        this.Ok = ok;
	        this.Param = param;
	    }
	}

	var UIID;
	(function (UIID) {
	    UIID[UIID["BronzewareContentUIUIID"] = 0] = "BronzewareContentUIUIID";
	    UIID[UIID["CalibrationUIUIID"] = 1] = "CalibrationUIUIID";
	    UIID[UIID["ColorMatchingUIUIID"] = 2] = "ColorMatchingUIUIID";
	    UIID[UIID["EndUIUIID"] = 3] = "EndUIUIID";
	    UIID[UIID["LoadingUIUIID"] = 4] = "LoadingUIUIID";
	    UIID[UIID["StartUIUIID"] = 5] = "StartUIUIID";
	})(UIID || (UIID = {}));

	class UIInfoRow {
	    LoadRowBytes(buffer) {
	        this.index = buffer.getFloat32();
	        this.UIID = buffer.getUTFString();
	        let atlasLen = buffer.getInt16();
	        this.atlas = [];
	        for (let index = 0; index < atlasLen; index++) {
	            this.atlas.push(buffer.getUTFString());
	        }
	        let unpackImagListLen = buffer.getInt16();
	        this.unpackImagList = [];
	        for (let index = 0; index < unpackImagListLen; index++) {
	            this.unpackImagList.push(buffer.getUTFString());
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
	    GetID() { return this.index; }
	    Print() {
	        let log = "";
	        log += " index: " + this.index;
	        log += " UIID: " + this.UIID;
	        log += " atlas: ";
	        let atlascount = this.atlas.length;
	        for (let t = 0; t < atlascount; t++) {
	            log += this.atlas[t];
	            if (t < atlascount - 1)
	                log += ",";
	        }
	        log += " unpackImagList: ";
	        let unpackImagListcount = this.unpackImagList.length;
	        for (let t = 0; t < unpackImagListcount; t++) {
	            log += this.unpackImagList[t];
	            if (t < unpackImagListcount - 1)
	                log += ",";
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
	    GetTableName() {
	        return "UIInfoRow";
	    }
	}

	class ResPathConst {
	}
	ResPathConst.Web_URL_Version = "?version=" + new Date().getTime();
	ResPathConst.Web_Load_Files = [];
	ResPathConst.Wx_Native_Files = ["wxlocal",
	    "res/sound",
	    "res/texture", "res/configs",
	    "fileconfig.json", "version.json",
	    "uiprefab", "prefab",
	    "unpack.json",
	    "res/atlas",
	    "res/model"
	];
	ResPathConst.ConfigURLVersion = "";

	class GameConfigRow {
	    LoadRowBytes(buffer) {
	        this.id = buffer.getInt32();
	        this.stageCategory = buffer.getInt32();
	        this.detailNum = buffer.getInt32();
	        this.stepType = buffer.getInt32();
	        this.eventId = buffer.getInt32();
	        this.titleConfigId = buffer.getInt32();
	        this.stepContent = buffer.getUTFString();
	    }
	    GetID() { return this.id; }
	    Print() {
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
	    GetTableName() {
	        return "GameConfigRow";
	    }
	}

	class PictureConfigRow {
	    LoadRowBytes(buffer) {
	        this.id = buffer.getInt32();
	        this.pictureRes = buffer.getUTFString();
	    }
	    GetID() { return this.id; }
	    Print() {
	        let log = "";
	        log += " id: " + this.id;
	        log += " pictureRes: " + this.pictureRes;
	        log += "\n";
	        return log;
	    }
	    GetTableName() {
	        return "PictureConfigRow";
	    }
	}

	class VideoConfigRow {
	    LoadRowBytes(buffer) {
	        this.id = buffer.getInt32();
	        this.videoRes = buffer.getUTFString();
	        this.videoType = buffer.getInt32();
	        this.videoStage = buffer.getInt32();
	    }
	    GetID() { return this.id; }
	    Print() {
	        let log = "";
	        log += " id: " + this.id;
	        log += " videoRes: " + this.videoRes;
	        log += " videoType: " + this.videoType;
	        log += " videoStage: " + this.videoStage;
	        log += "\n";
	        return log;
	    }
	    GetTableName() {
	        return "VideoConfigRow";
	    }
	}

	class TextConfigRow {
	    LoadRowBytes(buffer) {
	        this.id = buffer.getInt32();
	        this.textContent = buffer.getUTFString();
	        this.textRes = buffer.getUTFString();
	    }
	    GetID() { return this.id; }
	    Print() {
	        let log = "";
	        log += " id: " + this.id;
	        log += " textContent: " + this.textContent;
	        log += " textRes: " + this.textRes;
	        log += "\n";
	        return log;
	    }
	    GetTableName() {
	        return "TextConfigRow";
	    }
	}

	class TitleConfigRow {
	    LoadRowBytes(buffer) {
	        this.id = buffer.getInt32();
	        this.textRes = buffer.getUTFString();
	    }
	    GetID() { return this.id; }
	    Print() {
	        let log = "";
	        log += " id: " + this.id;
	        log += " textRes: " + this.textRes;
	        log += "\n";
	        return log;
	    }
	    GetTableName() {
	        return "TitleConfigRow";
	    }
	}

	var ConfigTypeEnum;
	(function (ConfigTypeEnum) {
	    ConfigTypeEnum[ConfigTypeEnum["CollectionConfig"] = 0] = "CollectionConfig";
	    ConfigTypeEnum[ConfigTypeEnum["DailyTaskConfig"] = 1] = "DailyTaskConfig";
	    ConfigTypeEnum[ConfigTypeEnum["GameShareConfig"] = 2] = "GameShareConfig";
	    ConfigTypeEnum[ConfigTypeEnum["InvitationConfig"] = 3] = "InvitationConfig";
	    ConfigTypeEnum[ConfigTypeEnum["ItemConfig"] = 4] = "ItemConfig";
	    ConfigTypeEnum[ConfigTypeEnum["Localization"] = 5] = "Localization";
	    ConfigTypeEnum[ConfigTypeEnum["NewbieGuideConfig"] = 6] = "NewbieGuideConfig";
	    ConfigTypeEnum[ConfigTypeEnum["NPCDialogConfig"] = 7] = "NPCDialogConfig";
	    ConfigTypeEnum[ConfigTypeEnum["RewardConfig"] = 8] = "RewardConfig";
	    ConfigTypeEnum[ConfigTypeEnum["ShopConfig"] = 9] = "ShopConfig";
	    ConfigTypeEnum[ConfigTypeEnum["SignUpConfig"] = 10] = "SignUpConfig";
	    ConfigTypeEnum[ConfigTypeEnum["SoundConfig"] = 11] = "SoundConfig";
	    ConfigTypeEnum[ConfigTypeEnum["SpineConfig"] = 12] = "SpineConfig";
	    ConfigTypeEnum[ConfigTypeEnum["ToySlot"] = 13] = "ToySlot";
	    ConfigTypeEnum[ConfigTypeEnum["UIInfo"] = 14] = "UIInfo";
	    ConfigTypeEnum[ConfigTypeEnum["GameConfig"] = 15] = "GameConfig";
	    ConfigTypeEnum[ConfigTypeEnum["PictureConfig"] = 16] = "PictureConfig";
	    ConfigTypeEnum[ConfigTypeEnum["TextConfig"] = 17] = "TextConfig";
	    ConfigTypeEnum[ConfigTypeEnum["VideoConfig"] = 18] = "VideoConfig";
	    ConfigTypeEnum[ConfigTypeEnum["TitleConfig"] = 19] = "TitleConfig";
	})(ConfigTypeEnum || (ConfigTypeEnum = {}));
	class ConfigManager {
	    constructor() {
	        this.m_LoadItem = [];
	        this.byteTables = new ByteTableManager();
	    }
	    static get Instance() {
	        if (ConfigManager._Instance == null) {
	            ConfigManager._Instance = new ConfigManager();
	        }
	        return ConfigManager._Instance;
	    }
	    getConfig(arrItem) {
	        this.m_LoadItem =
	            [
	                { url: "res/configs/UIInfo.bin" + ResPathConst.ConfigURLVersion, type: Laya.Loader.BUFFER, CType: ConfigTypeEnum.UIInfo },
	                { url: "res/configs/GameConfig.bin" + ResPathConst.ConfigURLVersion, type: Laya.Loader.BUFFER, CType: ConfigTypeEnum.GameConfig },
	                { url: "res/configs/PictureConfig.bin" + ResPathConst.ConfigURLVersion, type: Laya.Loader.BUFFER, CType: ConfigTypeEnum.PictureConfig },
	                { url: "res/configs/TextConfig.bin" + ResPathConst.ConfigURLVersion, type: Laya.Loader.BUFFER, CType: ConfigTypeEnum.TextConfig },
	                { url: "res/configs/VideoConfig.bin" + ResPathConst.ConfigURLVersion, type: Laya.Loader.BUFFER, CType: ConfigTypeEnum.VideoConfig },
	                { url: "res/configs/TitleConfig.bin" + ResPathConst.ConfigURLVersion, type: Laya.Loader.BUFFER, CType: ConfigTypeEnum.TitleConfig },
	            ];
	        for (let i = 0; i < this.m_LoadItem.length; i++) {
	            arrItem.push(this.m_LoadItem[i]);
	        }
	    }
	    InitOnLoaded() {
	        for (let i = 0; i < this.m_LoadItem.length; i++) {
	            let pData = ResourceManager.Instance.GetRes(this.m_LoadItem[i].url);
	            if (pData != null) {
	                switch (this.m_LoadItem[i].CType) {
	                    case ConfigTypeEnum.UIInfo:
	                        {
	                            this.byteTables.OnTableLoaded(UIInfoRow, pData);
	                            break;
	                        }
	                    case ConfigTypeEnum.GameConfig:
	                        {
	                            this.byteTables.OnTableLoaded(GameConfigRow, pData);
	                            break;
	                        }
	                    case ConfigTypeEnum.PictureConfig:
	                        {
	                            this.byteTables.OnTableLoaded(PictureConfigRow, pData);
	                            break;
	                        }
	                    case ConfigTypeEnum.VideoConfig:
	                        {
	                            this.byteTables.OnTableLoaded(VideoConfigRow, pData);
	                            break;
	                        }
	                    case ConfigTypeEnum.TextConfig:
	                        {
	                            this.byteTables.OnTableLoaded(TextConfigRow, pData);
	                            break;
	                        }
	                    case ConfigTypeEnum.TitleConfig:
	                        {
	                            this.byteTables.OnTableLoaded(TitleConfigRow, pData);
	                            break;
	                        }
	                }
	            }
	            ResourceManager.Instance.Release(this.m_LoadItem[i].url);
	        }
	    }
	    GetConfigDataByUIID(uiid) {
	        let uiList = this.byteTables.GetAll(UIInfoRow);
	        let config = null;
	        uiList.forEach(element => {
	            if (UIID[element.UIID] == uiid) {
	                config = element;
	            }
	        });
	        return config;
	    }
	    GetUIConfig(uiid) {
	        let config = this.GetConfigDataByUIID(uiid);
	        if (config)
	            return config;
	        Log.Error("ui配置不存在, uiid:" + uiid);
	        return null;
	    }
	    GetAllUIConfig() {
	        return this.byteTables.GetAll(UIInfoRow);
	    }
	    GetUIInfo(id) {
	        return this.byteTables.GetConfigByID(id, UIInfoRow);
	    }
	    GetAllUIInfo() {
	        return this.byteTables.GetAll(UIInfoRow);
	    }
	    GetGameConfig(id) {
	        return this.byteTables.GetConfigByID(id, GameConfigRow);
	    }
	    GetAllGameConfig() {
	        return this.byteTables.GetAll(GameConfigRow);
	    }
	    GetPictureConfig(id) {
	        return this.byteTables.GetConfigByID(id, PictureConfigRow);
	    }
	    GetAllPictureConfig() {
	        return this.byteTables.GetAll(PictureConfigRow);
	    }
	    GetVideoConfig(id) {
	        return this.byteTables.GetConfigByID(id, VideoConfigRow);
	    }
	    GetAllVideoConfig() {
	        return this.byteTables.GetAll(VideoConfigRow);
	    }
	    GetTextConfig(id) {
	        return this.byteTables.GetConfigByID(id, TextConfigRow);
	    }
	    GetAllTextConfig() {
	        return this.byteTables.GetAll(TextConfigRow);
	    }
	    GetTitleConfig(id) {
	        return this.byteTables.GetConfigByID(id, TitleConfigRow);
	    }
	    GetAllTitleConfig() {
	        return this.byteTables.GetAll(TitleConfigRow);
	    }
	}
	ConfigManager._Instance = null;

	var Mediator = puremvc.Mediator;
	var Tween = Laya.Tween;
	class WindowConfigData {
	    constructor() {
	        this.uiid = 0;
	        this.uiOpenAnimType = UIAnim.None;
	        this.uiCloseAnimType = UIAnim.None;
	        this.uiShowType = UIShowType.DoNothing;
	        this.depth = 0;
	        this.showImageBG = false;
	        this.imageBGPath = "";
	        this.imageBGSizeGrid = "0,0,0,0,1";
	    }
	}
	var UIShowType;
	(function (UIShowType) {
	    UIShowType[UIShowType["DoNothing"] = 0] = "DoNothing";
	    UIShowType[UIShowType["HideOthers"] = 1] = "HideOthers";
	    UIShowType[UIShowType["DestoryOthers"] = 2] = "DestoryOthers";
	})(UIShowType || (UIShowType = {}));
	var UIAutoCloseType;
	(function (UIAutoCloseType) {
	    UIAutoCloseType[UIAutoCloseType["AffectedByOthers"] = 0] = "AffectedByOthers";
	    UIAutoCloseType[UIAutoCloseType["NotAffectedByOthers"] = 1] = "NotAffectedByOthers";
	})(UIAutoCloseType || (UIAutoCloseType = {}));
	var UIAnim;
	(function (UIAnim) {
	    UIAnim[UIAnim["None"] = 0] = "None";
	    UIAnim[UIAnim["PopOpen"] = 1] = "PopOpen";
	    UIAnim[UIAnim["PopClose"] = 2] = "PopClose";
	    UIAnim[UIAnim["Custom"] = 3] = "Custom";
	})(UIAnim || (UIAnim = {}));
	class BaseUICtrl extends Mediator {
	    constructor(view) {
	        super();
	        this.uiView = view;
	    }
	    Init(parent, id, context = null, onResized = null) {
	        this.uiConfig = this.GetUIWindowConfigData(id);
	        if (this.uiConfig.showImageBG) {
	            this.uiBG = new Laya.Image();
	            this.uiBG.name = "uibg";
	            this.uiBG.zOrder = -1;
	            this.uiBG.skin = this.uiConfig.imageBGPath;
	            this.uiBG.visible = true;
	            this.uiBG.width = Laya.stage.width;
	            this.uiBG.height = Laya.stage.height;
	            this.uiView.addChild(this.uiBG);
	        }
	        this.uiView.updateZOrder();
	        this.uiView.on(Laya.Event.RESIZE, this, this.OnUIResize, [onResized]);
	    }
	    OnUIResize(onResized = null) {
	        this.uiView.width = Laya.stage.width;
	        this.uiView.height = Laya.stage.height;
	        if (onResized)
	            onResized();
	    }
	    Open(context = null) {
	        this.BeforeUIOpen(context);
	        this.uiView.visible = true;
	        let cb = this.OnUIOpened.bind(this, context);
	        this.DoEnteringAnim(cb);
	    }
	    BeforeUIOpen(context = null) {
	    }
	    DoEnteringAnim(action) {
	        this.ResetAnim();
	        this.EnteringAnim(action);
	    }
	    EnteringAnim(action) {
	        let animType = this.uiConfig.uiOpenAnimType;
	        if (animType != UIAnim.None) {
	            this.PlayeEnterTween(animType, action);
	        }
	        else {
	            if (action != null) {
	                action();
	            }
	        }
	    }
	    OnUIOpened(context = null) {
	        if (context && context.OnOpenCallback)
	            context.OnOpenCallback();
	    }
	    Hide(callback = null) {
	        this.DoExitingAnim(() => {
	            this.uiView.visible = false;
	            this.OnUIHide();
	            if (callback != null)
	                callback();
	            this.AfterUIHide();
	        });
	    }
	    HideForce() {
	        this.uiView.visible = false;
	        this.OnUIHide();
	        this.AfterUIHide();
	    }
	    DoExitingAnim(action) {
	        this.ResetAnim();
	        this.ExitingAnim(action);
	    }
	    ExitingAnim(action) {
	        let animType = this.uiConfig.uiCloseAnimType;
	        if (animType != UIAnim.None) {
	            this.PlayeExitTween(animType, action);
	        }
	        else {
	            if (action != null) {
	                action();
	            }
	        }
	    }
	    OnUIHide() {
	    }
	    AfterUIHide() {
	    }
	    ResetAnim() {
	    }
	    Destroy() {
	        this.BeforeUIDestroy();
	        this.uiView.removeSelf();
	        this.uiView.destroy(true);
	        this.uiView = null;
	        this.OnUIDestroy();
	    }
	    BeforeUIDestroy() {
	        if (this.uiBG) {
	            this.uiBG.removeSelf();
	            this.uiBG.destroy(true);
	            this.uiBG = null;
	        }
	    }
	    OnUIDestroy() {
	    }
	    PlayeEnterTween(tweenType, action) {
	        switch (tweenType) {
	            case UIAnim.PopOpen:
	                var delay = 0;
	                Tween.from(this.uiView, { scaleX: 0, scaleY: 0 }, 200, Laya.Ease.strongIn, Laya.Handler.create(this, () => {
	                    if (action != null) {
	                        action();
	                    }
	                }, null), delay);
	                break;
	            default:
	                Log.Error("UI打开执行未定义动画" + tweenType.toString());
	                break;
	        }
	    }
	    PlayeExitTween(tweenType, action) {
	        switch (tweenType) {
	            case UIAnim.PopClose:
	                var delay = 0;
	                let scaleX = this.uiView.scaleX;
	                let scaleY = this.uiView.scaleY;
	                Tween.to(this.uiView, { scaleX: 0, scaleY: 0 }, 100, Laya.Ease.strongIn, Laya.Handler.create(this, () => {
	                    this.uiView.scaleX = scaleX;
	                    this.uiView.scaleY = scaleY;
	                    if (action != null) {
	                        action();
	                    }
	                }, null), delay);
	                break;
	            default:
	                Log.Error("UI关闭执行未定义动画" + tweenType.toString());
	                break;
	        }
	    }
	    GetUIWindowConfigData(uiid) {
	        let configData = ConfigManager.Instance.GetUIConfig(uiid);
	        if (configData == null || configData == undefined) {
	            let windowData = new WindowConfigData();
	            windowData.uiid = uiid;
	            return windowData;
	        }
	        else {
	            let windowData = new WindowConfigData();
	            windowData.uiid = uiid;
	            windowData.uiOpenAnimType = configData.uiOpenAnimType;
	            windowData.uiCloseAnimType = configData.uiCloseAnimType;
	            windowData.uiShowType = configData.uiShowType;
	            windowData.depth = configData.depth;
	            windowData.showImageBG = configData.showImageBG;
	            windowData.imageBGPath = configData.imageBGPath;
	            windowData.imageBGSizeGrid = configData.imageBGSizeGrid;
	            return windowData;
	        }
	    }
	    listNotificationInterests() {
	        super.listNotificationInterests();
	        return [];
	    }
	    handleNotification(notification) {
	        if (!this.uiView.visible)
	            return;
	        super.handleNotification(notification);
	        switch (notification.getName()) {
	        }
	    }
	}

	var REG = Laya.ClassUtils.regClass;
	var ui;
	(function (ui) {
	    var uiprefab;
	    (function (uiprefab) {
	        class BronzewareContentUIUI extends Laya.View {
	            constructor() { super(); }
	            createChildren() {
	                super.createChildren();
	                this.loadScene("uiprefab/BronzewareContentUI");
	            }
	        }
	        uiprefab.BronzewareContentUIUI = BronzewareContentUIUI;
	        REG("ui.uiprefab.BronzewareContentUIUI", BronzewareContentUIUI);
	        class CalibrationUIUI extends Laya.View {
	            constructor() { super(); }
	            createChildren() {
	                super.createChildren();
	                this.loadScene("uiprefab/CalibrationUI");
	            }
	        }
	        uiprefab.CalibrationUIUI = CalibrationUIUI;
	        REG("ui.uiprefab.CalibrationUIUI", CalibrationUIUI);
	        class ColorMatchingUIUI extends Laya.View {
	            constructor() { super(); }
	            createChildren() {
	                super.createChildren();
	                this.loadScene("uiprefab/ColorMatchingUI");
	            }
	        }
	        uiprefab.ColorMatchingUIUI = ColorMatchingUIUI;
	        REG("ui.uiprefab.ColorMatchingUIUI", ColorMatchingUIUI);
	        class EndUIUI extends Laya.View {
	            constructor() { super(); }
	            createChildren() {
	                super.createChildren();
	                this.loadScene("uiprefab/EndUI");
	            }
	        }
	        uiprefab.EndUIUI = EndUIUI;
	        REG("ui.uiprefab.EndUIUI", EndUIUI);
	        class LoadingUIUI extends Laya.View {
	            constructor() {
	                super();
	            }
	            createChildren() {
	                super.createChildren();
	                this.createView(LoadingUIUI.uiView);
	            }
	        }
	        LoadingUIUI.uiView = { "type": "View", "props": { "y": 0, "x": 0, "width": 1920, "top": 0, "right": 0, "left": 0, "height": 1080, "bottom": 0 }, "compId": 2, "child": [{ "type": "Image", "props": { "top": 0, "skin": "uiatlas/loading/gamebg.jpg", "right": 0, "name": "Bg", "left": 0, "bottom": 0 }, "compId": 6 }, { "type": "Image", "props": { "var": "UI_LoadingIcon", "skin": "uiatlas/loading/title.png", "centerY": 0, "centerX": 0 }, "compId": 13, "child": [{ "type": "Image", "props": { "y": -215, "x": -192 }, "compId": 14 }] }, { "type": "Image", "props": { "width": 400, "var": "UI_ProgressBottom", "skin": "uiatlas/loading/img_progress_0.png", "name": "UI_ProgressBottom", "height": 76, "centerY": 343, "centerX": 0, "anchorY": 0, "anchorX": 0, "alpha": 1, "sizeGrid": "0,50,0,50" }, "compId": 7, "child": [{ "type": "Image", "props": { "y": 0, "x": 0, "width": 400, "var": "UI_ProgressUpper", "skin": "uiatlas/loading/img_progress_1.png", "name": "UI_ProgressUpper", "height": 76, "sizeGrid": "0,50,0,50" }, "compId": 8, "child": [{ "type": "Image", "props": { "y": 0, "x": 0, "width": 400, "var": "UI_ProgressMask", "skin": "uiatlas/loading/img_progress_1.png", "renderType": "mask", "name": "UI_ProgressMask", "height": 76, "sizeGrid": "0,50,0,50" }, "compId": 9 }] }, { "type": "Label", "props": { "var": "UI_Prompt_Text", "valign": "top", "top": 76, "fontSize": 30, "font": "SimHei", "color": "#0160dd", "centerX": 0, "align": "center" }, "compId": 21 }] }], "loadList": ["uiatlas/loading/gamebg.jpg", "uiatlas/loading/title.png", "uiatlas/loading/img_progress_0.png", "uiatlas/loading/img_progress_1.png"], "loadList3D": [] };
	        uiprefab.LoadingUIUI = LoadingUIUI;
	        REG("ui.uiprefab.LoadingUIUI", LoadingUIUI);
	        class StartUIUI extends Laya.View {
	            constructor() { super(); }
	            createChildren() {
	                super.createChildren();
	                this.loadScene("uiprefab/StartUI");
	            }
	        }
	        uiprefab.StartUIUI = StartUIUI;
	        REG("ui.uiprefab.StartUIUI", StartUIUI);
	    })(uiprefab = ui.uiprefab || (ui.uiprefab = {}));
	})(ui || (ui = {}));

	class LinkList {
	    constructor() {
	        this.pool = [];
	        this._head = this._tail = null;
	        this.pool = [];
	    }
	    spawn_node(key, data) {
	        let node = this.pool.length > 0 ? this.pool.pop() : null;
	        if (node) {
	            node.key = key;
	            node.data = data;
	            node.next = null;
	        }
	        else {
	            node = { key: key, data: data, next: null };
	        }
	        return node;
	    }
	    get head() {
	        return this._head;
	    }
	    append(key, data) {
	        let node = this.spawn_node(key, data);
	        if (this._tail) {
	            this._tail.next = node;
	            this._tail = node;
	        }
	        else {
	            this._head = this._tail = node;
	        }
	        return node.key;
	    }
	    remove(key) {
	        if (!key) {
	            return null;
	        }
	        if (!this._head) {
	            return null;
	        }
	        let prev;
	        let curr = this._head;
	        while (curr && curr.key != key) {
	            prev = curr;
	            curr = curr.next;
	        }
	        if (!curr) {
	            return null;
	        }
	        if (!prev) {
	            this._head = curr.next;
	            if (!curr.next) {
	                this._tail = null;
	            }
	        }
	        else {
	            prev.next = curr.next;
	            if (!curr.next) {
	                this._tail = prev;
	            }
	        }
	        this.pool.push(curr);
	        return curr.data;
	    }
	}

	class TimeManager {
	    constructor() {
	        this.pool = [];
	        this.key = 0;
	        this.pool = [];
	        this.list = new LinkList();
	        this.lateupdteList = new LinkList();
	        this.speed = 1;
	    }
	    static get Instance() {
	        if (!this.inst) {
	            this.inst = new TimeManager();
	        }
	        return this.inst;
	    }
	    SetSpeed(scale) {
	        this.speed = scale;
	    }
	    add(interval, delay, repeat, cb, is_updater = false) {
	        let timerHandler = this.pool.length > 0 ? this.pool.pop() : null;
	        if (timerHandler) {
	            timerHandler.interval = interval;
	            timerHandler.delay = delay;
	            timerHandler.repeat = repeat;
	            timerHandler.elapsed = 0;
	            timerHandler.times = 0;
	            timerHandler.is_updater = is_updater;
	            timerHandler.cb = cb;
	        }
	        else {
	            timerHandler = { interval: interval, delay: delay, repeat: repeat, elapsed: 0, times: 0, is_updater: is_updater, cb: cb };
	        }
	        return this.list.append(++this.key, timerHandler);
	    }
	    remove(key) {
	        let timerHandler = this.list.remove(key);
	        if (timerHandler) {
	            this.pool.push(timerHandler);
	        }
	    }
	    loop(interval, cb) {
	        return this.add(interval, 0, 0, cb);
	    }
	    loopTimes(interval, repeat, cb) {
	        return this.add(interval, 0, repeat, cb);
	    }
	    lowframeLoop(cb) {
	        return this.add(1 / 24, 0, 0, cb);
	    }
	    delayLoop(interval, delay, cb) {
	        return this.add(interval, delay, 0, cb);
	    }
	    once(delay, cb) {
	        return this.add(0, delay, 1, cb);
	    }
	    nextFrame(delay, cb) {
	        Laya.timer.frameOnce(delay, null, () => {
	            cb.exec();
	        });
	    }
	    addUpdater(cb) {
	        return this.add(0, 0, 0, cb, true);
	    }
	    update(dt) {
	        dt *= this.speed;
	        if (!this.list.head) {
	            return;
	        }
	        let node = this.list.head;
	        while (node) {
	            node.data.elapsed += dt;
	            if (node.data.is_updater) {
	                node.data.cb.exec(dt);
	                node = node.next;
	                continue;
	            }
	            if (node.data.repeat != 0 && node.data.times >= node.data.repeat) {
	                this.remove(node.key);
	                node = node.next;
	                continue;
	            }
	            if (node.data.elapsed >= node.data.delay + node.data.interval) {
	                node.data.times++;
	                node.data.elapsed = node.data.delay;
	                node.data.cb.exec();
	            }
	            node = node.next;
	        }
	    }
	    add_lateupdater(cb) {
	        return this.addLate(0, 0, 0, cb, true);
	    }
	    addLate(interval, delay, repeat, cb, is_updater = false) {
	        let timerHandler = this.pool.length > 0 ? this.pool.pop() : null;
	        if (timerHandler) {
	            timerHandler.interval = interval;
	            timerHandler.delay = delay;
	            timerHandler.repeat = repeat;
	            timerHandler.elapsed = 0;
	            timerHandler.times = 0;
	            timerHandler.is_updater = is_updater;
	            timerHandler.cb = cb;
	        }
	        else {
	            timerHandler = { interval: interval, delay: delay, repeat: repeat, elapsed: 0, times: 0, is_updater: is_updater, cb: cb };
	        }
	        return this.lateupdteList.append(++this.key, timerHandler);
	    }
	    removeLate(key) {
	        let timerHandler = this.lateupdteList.remove(key);
	        if (timerHandler) {
	            this.pool.push(timerHandler);
	        }
	    }
	    lateupdate() {
	        if (!this.lateupdteList.head) {
	            return;
	        }
	        let node = this.lateupdteList.head;
	        while (node) {
	            if (node.data.is_updater) {
	                node.data.cb.exec();
	                node = node.next;
	                continue;
	            }
	            if (node.data.repeat != 0 && node.data.times >= node.data.repeat) {
	                this.remove(node.key);
	                node = node.next;
	                continue;
	            }
	            node.data.times++;
	            node.data.cb.exec();
	            node = node.next;
	        }
	    }
	}

	let handler_pool = [];
	let handler_pool_size = 10;
	class cbhandler {
	    constructor() { }
	    init(cb, host = null, ...args) {
	        this.cb = cb;
	        this.host = host;
	        this.args = args;
	        this.times = 0;
	        this.is_persist = false;
	    }
	    exec(...extras) {
	        let args = this.args.concat(extras);
	        this.cb.apply(this.host, args);
	        this.times++;
	        if (!this.is_persist) {
	            this.release();
	        }
	    }
	    retain() {
	        this.is_persist = true;
	    }
	    release() {
	    }
	    static gen_handler(cb, host = null, ...args) {
	        let single_handler = new cbhandler();
	        single_handler.init(cb, host, ...args);
	        return single_handler;
	    }
	}

	var Facade = puremvc.Facade;
	class LoadingUIUIController extends BaseUICtrl {
	    constructor(view) {
	        super(null);
	        this.curUpdateTimer = -1;
	        this.curTargetProgress = 0;
	        this.curProgress = 0;
	        this.onProgressReachEnd = null;
	        this.curIncreStep = 0;
	    }
	    static get Instance() {
	        if (this._instance == null) {
	            this._instance = new LoadingUIUIController(null);
	        }
	        return this._instance;
	    }
	    Init() {
	        this.mediatorName = UIID.LoadingUIUIID.toString();
	        this.loadingUI = new ui.uiprefab.LoadingUIUI();
	        Laya.stage.addChild(this.loadingUI);
	        this.loadingUI.zOrder = 100;
	        this.SetActive(true);
	        this.RegisterEvent();
	    }
	    InitProgress(progress) {
	        this.loadingUI.UI_ProgressMask.width = progress * this.loadingUI.UI_ProgressUpper.width;
	        this.curTargetProgress = progress;
	        this.curProgress = progress;
	    }
	    SetTargetProgress(progress) {
	        this.curTargetProgress = progress;
	        this.curIncreStep = this.curTargetProgress - this.curProgress;
	    }
	    UpdatreProgress(dt) {
	        if (this.curProgress < this.curTargetProgress) {
	            let incre = this.curIncreStep;
	            incre = incre < 0.1 ? 0.1 : incre;
	            this.curProgress += 1 / 0.5 * incre * dt;
	            if (this.curProgress > 1)
	                this.curProgress = 1;
	            this.loadingUI.UI_ProgressMask.width = this.curProgress * this.loadingUI.UI_ProgressUpper.width;
	            if (this.curProgress == 1 && this.onProgressReachEnd)
	                this.onProgressReachEnd();
	        }
	    }
	    SetActive(active, forceClose = true, onClosed = null, prompt = "") {
	        if (!active) {
	            if (forceClose) {
	                this.loadingUI.visible = active;
	                this.InitProgress(0.01);
	                if (this.curUpdateTimer >= 0)
	                    TimeManager.Instance.remove(this.curUpdateTimer);
	                this.curUpdateTimer = -1;
	                if (onClosed)
	                    onClosed();
	            }
	            else {
	                this.onProgressReachEnd = () => {
	                    this.SetActive(false, true);
	                    if (onClosed)
	                        onClosed();
	                };
	                if (this.curProgress >= 1) {
	                    this.onProgressReachEnd();
	                }
	                else {
	                    this.SetTargetProgress(1);
	                }
	            }
	        }
	        else {
	            this.loadingUI.visible = active;
	            this.InitProgress(0.01);
	            if (this.curUpdateTimer >= 0)
	                TimeManager.Instance.remove(this.curUpdateTimer);
	            this.curUpdateTimer = TimeManager.Instance.addUpdater(cbhandler.gen_handler(this.UpdatreProgress, this));
	            this.loadingUI.UI_Prompt_Text.text = prompt;
	        }
	    }
	    SetLoadingActive(active) {
	        this.loadingUI.UI_LoadingIcon.visible = active;
	        this.loadingUI.UI_ProgressBottom.visible = active;
	    }
	    Destroy() {
	        this.RemoveEvent();
	        this.loadingUI.destroy(true);
	        this.loadingUI = null;
	    }
	    RegisterEvent() {
	        Facade.getInstance().registerMediator(this);
	        this.loadingUI.on(Laya.Event.CLICK, this, this.onLoadingUIClick);
	    }
	    RemoveEvent() {
	        Facade.getInstance().removeMediator(this.getMediatorName());
	        this.loadingUI.on(Laya.Event.CLICK, this, this.onLoadingUIClick);
	    }
	    onLoadingUIClick(e) {
	        e.stopPropagation();
	    }
	    listNotificationInterests() {
	        return [
	            NotificationNames.LoadingUIProgress,
	        ];
	    }
	    handleNotification(note) {
	        switch (note.getName()) {
	            case NotificationNames.LoadingUIProgress: {
	                let progress = note.getBody();
	                if (progress < this.curProgress)
	                    return;
	                this.SetTargetProgress(progress);
	                break;
	            }
	        }
	    }
	}

	class ConstDefine {
	    static get videoResPre() {
	        let url = "https://baizhoudata.oss-cn-beijing.aliyuncs.com/bronze/";
	        return url + "res/video/";
	    }
	}
	ConstDefine.Bronzeware = "https://baizhoudata.oss-cn-beijing.aliyuncs.com/bronze/" + "res/model/Bronze/Conventional/bronze.lh" + "?v=" + new Date().getTime();
	ConstDefine.blankColorUrl = "largeImg/BronzeWareImg/blankColor.png";

	class GameUIManager {
	    constructor() {
	        this.parentScene = null;
	        this.prefab = null;
	    }
	    static get Instance() {
	        if (GameUIManager._instace == null) {
	            GameUIManager._instace = new GameUIManager();
	        }
	        return GameUIManager._instace;
	    }
	    Init() {
	        this.parentScene = Laya.stage.addChild(new Laya.Scene3D());
	        this.parentScene.zOrder = -1;
	        this.parentScene.updateZOrder();
	        var camera = (this.parentScene.addChild(new Laya.Camera(0, 0.1, 100)));
	        camera.transform.translate(new Laya.Vector3(0, 1, 5));
	        camera.transform.rotate(new Laya.Vector3(-10, 96, 0), true, false);
	        camera.transform.lookAt(new Laya.Vector3(0, 0, 0), new Laya.Vector3(0, 1, 0));
	        camera.clearFlag = Laya.BaseCamera.CLEARFLAG_SOLIDCOLOR;
	        camera.clearColor = new Laya.Vector4(245 / 255, 231 / 255, 218 / 255, 0);
	        this.camera = camera;
	        var directionLight = this.parentScene.addChild(new Laya.DirectionLight());
	        directionLight.color = new Laya.Vector3(1, 1, 1);
	        directionLight.transform.rotationEuler = new Laya.Vector3(0, 0, 0);
	        directionLight.intensity = 1.5;
	    }
	    ResetCameraPos() {
	        this.camera.transform.position = new Laya.Vector3(0, 0, 0);
	        this.camera.transform.rotationEuler = new Laya.Vector3(0, 0, 0);
	        this.camera.transform.translate(new Laya.Vector3(0, 1, 5));
	        this.camera.transform.rotate(new Laya.Vector3(-10, 96, 0), true, false);
	        this.camera.transform.lookAt(new Laya.Vector3(0, 0, 0), new Laya.Vector3(0, 1, 0));
	        if (this.prefab != null) {
	            this.prefab.transform.position = new Laya.Vector3(0, 0, 0);
	            this.prefab.transform.rotationEuler = new Laya.Vector3(0, 0, 0);
	        }
	    }
	    AddPrefab() {
	        if (this.prefab == null) {
	            let urls = [ConstDefine.Bronzeware];
	            Laya.loader.create(urls, Laya.Handler.create(this, this.onArrayCreated, [urls]), Laya.Handler.create(this, this.onCreateArrayLoading, null, false));
	            var modelViewer = this.camera.addComponent(ModelViewer);
	            modelViewer.AroundPos = new Laya.Vector3(0, 0, 0);
	        }
	        else {
	            this.prefab.transform.position = new Laya.Vector3(0, 0, 0);
	        }
	    }
	    RemovePrefab() {
	        if (this.prefab != null) {
	            this.prefab.transform.position = new Laya.Vector3(100000, 100000, 100000);
	        }
	    }
	    onArrayCreated(urlobj, comFun = null, failFun = null, taskid = 0) {
	        for (let index = 0; index < urlobj.length; index++) {
	            const element = urlobj[index];
	            var url = urlobj[index].url ? urlobj[index].url : urlobj[index];
	            console.log("3d资源加载成功 taskid url[0]:" + url);
	            this.prefab = Laya.loader.getRes(url);
	            let node = this.prefab;
	            this.parentScene.addChild(node);
	            node.transform.position = new Laya.Vector3(0, 0, 0);
	        }
	        this.parentScene.zOrder = 9;
	        this.parentScene.updateZOrder();
	    }
	    onCreateArrayLoading(progressFun = null, progress = null) {
	    }
	}
	class ModelViewer extends Laya.Script {
	    constructor() {
	        super();
	        this.canRotation_X = true;
	        this.canRotation_Y = true;
	        this.canScale = true;
	        this.AroundPos = new Laya.Vector3();
	        this.mouseSettings = new MouseSettings(0, 0.3, 0.5);
	        this.angleRange = new MyRange(-90, 90);
	        this.distanceRange = new MyRange(1, 50);
	        this.damper = 10;
	        this.CurrentAngles = new Laya.Vector3();
	        this.CurrentAnglesTemp = new Laya.Vector3();
	        this.targetAngles = new Laya.Vector3();
	        this.oldPosition1 = new Laya.Vector3();
	        this.oldPosition2 = new Laya.Vector3();
	        this.deltaWheel = 0;
	        this.closeupSpeedOnPC = 0.2;
	        this.FORWORD = new Laya.Vector3();
	        this.lastMouseX = 0;
	        this.lastMouseY = 0;
	        this.mouseRunning = false;
	        this.tempRotationZ = new Laya.Quaternion();
	        this.tempV = new Laya.Vector3();
	        this.tempV1 = new Laya.Vector3();
	    }
	    onStart() {
	        this.transform = this.owner.transform;
	        this.CurrentAngles = new Laya.Vector3(-this.transform.rotationEuler.x, this.transform.rotationEuler.y, 0);
	        this.targetAngles = new Laya.Vector3(-this.transform.rotationEuler.x, this.transform.rotationEuler.y, 0);
	        this.CurrentDistance = Laya.Vector3.distance(this.transform.position, this.AroundPos);
	        this.targetDistance = Laya.Vector3.distance(this.transform.position, this.AroundPos);
	        Laya.stage.on(Laya.Event.MOUSE_DOWN, this, this.mouseDown);
	        Laya.stage.on(Laya.Event.MOUSE_MOVE, this, this.mouseMove);
	        Laya.stage.on(Laya.Event.MOUSE_UP, this, this.mouseUp);
	        Laya.stage.on(Laya.Event.MOUSE_OUT, this, this.mouseUp);
	        Laya.stage.on(Laya.Event.MOUSE_WHEEL, this, this.mouseWheel);
	    }
	    onUpdate() {
	        if (this.myevent == null)
	            return;
	        if (Laya.Browser.onMobile) {
	            this.AroundByMobileInput();
	        }
	        else {
	            this.AroundByMouseInput();
	        }
	        if (!this.canRotation_X)
	            this.targetAngles.y = 0;
	        if (!this.canRotation_Y)
	            this.targetAngles.x = 0;
	        if (this.mouseRunning == false) {
	            this.targetAngles.y -= 0.05;
	        }
	        this.CurrentAngles = this.LerpVector3(this.CurrentAngles, this.targetAngles, this.deltaTime * this.damper);
	        this.CurrentDistance = this.LerpNum(this.CurrentDistance, this.targetDistance, this.deltaTime * this.damper);
	        this.CurrentAnglesTemp.x = -this.CurrentAngles.x;
	        this.CurrentAnglesTemp.y = this.CurrentAngles.y;
	        this.CurrentAnglesTemp.z = this.CurrentAngles.z;
	        this.transform.rotationEuler = this.CurrentAnglesTemp;
	        Laya.Vector3.scale(this.GetForward, this.CurrentDistance, this.tempV);
	        Laya.Vector3.subtract(this.AroundPos, this.tempV, this.tempV1);
	        this.transform.position = this.tempV1;
	        this.lastMouseX = Laya.stage.mouseX;
	        this.lastMouseY = Laya.stage.mouseY;
	    }
	    get TouchCount() {
	        return this.myevent.touches.length;
	    }
	    get Touchs() {
	        return this.myevent.touches;
	    }
	    get GetAxisX() {
	        return Laya.stage.mouseX - this.lastMouseX;
	    }
	    get GetAxisY() {
	        return Laya.stage.mouseY - this.lastMouseY;
	    }
	    get deltaTime() {
	        return Laya.timer.delta / 1000;
	    }
	    get GetForward() {
	        this.transform.getForward(this.FORWORD);
	        return this.FORWORD;
	    }
	    mouseDown(e) {
	        this.lastMouseX = Laya.stage.mouseX;
	        this.lastMouseY = Laya.stage.mouseY;
	        this.mouseRunning = true;
	    }
	    mouseMove(e) {
	        this.myevent = e;
	    }
	    mouseWheel(e) {
	        this.deltaWheel = e.delta * this.closeupSpeedOnPC;
	    }
	    mouseUp(e) {
	        this.mouseRunning = false;
	        this.myevent = null;
	    }
	    Clamp(num, min, max) {
	        if (num < min) {
	            return min;
	        }
	        else if (num > max) {
	            return max;
	        }
	        else {
	            return num;
	        }
	    }
	    LerpVector3(min, max, t) {
	        var vec = new Laya.Vector3();
	        vec.x = min.x + t * (max.x - min.x);
	        vec.y = min.y + t * (max.y - min.y);
	        vec.z = min.z + t * (max.z - min.z);
	        return vec;
	    }
	    LerpNum(min, max, t) {
	        return min + t * (max - min);
	    }
	    AroundByMobileInput() {
	        if (this.TouchCount == 1) {
	            this.targetAngles.y -= this.GetAxisX * this.mouseSettings.pointerSensitivity;
	            this.targetAngles.x += this.GetAxisY * this.mouseSettings.pointerSensitivity;
	            this.m_IsSingleFinger = true;
	        }
	        if (this.canScale) {
	            if (this.TouchCount > 1) {
	                if (this.m_IsSingleFinger) {
	                    this.oldPosition1 = new Laya.Vector3(this.Touchs[0].stageX, this.Touchs[0].stageY);
	                    this.oldPosition2 = new Laya.Vector3(this.Touchs[1].stageX, this.Touchs[1].stageY);
	                }
	                var tempPosition1 = new Laya.Vector3(this.Touchs[0].stageX, this.Touchs[0].stageY);
	                var tempPosition2 = new Laya.Vector3(this.Touchs[1].stageX, this.Touchs[1].stageY);
	                var currentTouchDistance = Laya.Vector3.distance(tempPosition1, tempPosition2);
	                var lastTouchDistance = Laya.Vector3.distance(this.oldPosition1, this.oldPosition2);
	                this.targetDistance -= (currentTouchDistance - lastTouchDistance) * this.deltaTime * this.mouseSettings.wheelSensitivity;
	                this.oldPosition1 = tempPosition1;
	                this.oldPosition2 = tempPosition2;
	                this.m_IsSingleFinger = false;
	                this.targetDistance = this.Clamp(this.targetDistance, this.distanceRange.min, this.distanceRange.max);
	            }
	        }
	    }
	    AroundByMouseInput() {
	        if (this.mouseRunning) {
	            this.targetAngles.y -= (this.GetAxisX * this.mouseSettings.pointerSensitivity);
	            this.targetAngles.x += (this.GetAxisY * this.mouseSettings.pointerSensitivity);
	        }
	        if (this.canScale) {
	            this.targetDistance -= this.deltaWheel * this.mouseSettings.wheelSensitivity * 50;
	            this.deltaWheel = 0;
	            this.targetDistance = this.Clamp(this.targetDistance, this.distanceRange.min, this.distanceRange.max);
	        }
	    }
	}
	class MouseSettings {
	    constructor(mouseButtonID, pointerSensitivity, wheelSensitivity) {
	        this.mouseButtonID = mouseButtonID;
	        this.pointerSensitivity = pointerSensitivity;
	        this.wheelSensitivity = wheelSensitivity;
	    }
	}
	class MyRange {
	    constructor(min, max) {
	        this.min = min;
	        this.max = max;
	    }
	}
	class PlaneArea {
	    constructor(center, width, length) {
	        this.center = center;
	        this.width = width;
	        this.length = length;
	    }
	}

	class WechatUtil {
	    static getIntance() {
	        if (WechatUtil._instanc == null) {
	            WechatUtil._instanc = new WechatUtil();
	        }
	        return WechatUtil._instanc;
	    }
	    static CreateVideo(leftOnStage, topOnStage, widthOnStage, heightOnStage, src, poster, onEnd) {
	        let wx = Laya.Browser.window.wx;
	        let sysInfo = wx.getSystemInfoSync();
	        let actwidth = sysInfo.windowWidth;
	        let actHeight = sysInfo.windowHeight;
	        let top = topOnStage * (actHeight / Laya.stage.height);
	        let left = leftOnStage * (actwidth / Laya.stage.width);
	        let width = widthOnStage * (actHeight / Laya.stage.height);
	        let height = heightOnStage * (actHeight / Laya.stage.height);
	        console.log("top: " + top + " left" + left + " width:" + width + " h:" + height + " src:" + src + " act " + actwidth + " aH:" + actHeight);
	        let videoInfo = {
	            x: left,
	            y: top,
	            width: width,
	            height: height,
	            src: src,
	            poster: poster,
	            objectFit: 'fill',
	            controls: false,
	            autoplay: true,
	            backgroundColor: "#f5e7da",
	            showCenterPlayBtn: false
	        };
	        let video = wx.createVideo(videoInfo);
	        video.onProgress((res) => {
	            console.log("progress %o", res);
	        });
	        video.onPlay(() => {
	            Log.Debug("start play video " + src);
	        });
	        video.onEnded(() => {
	            Log.Debug("start play video onEnded " + src);
	            if (onEnd)
	                onEnd();
	        });
	        return video;
	    }
	    static PlayVideo(video) {
	        video.play();
	    }
	    static DestroyVideo(video) {
	        video.destroy();
	    }
	}

	var Facade$1 = puremvc.Facade;
	class BronzewareContentUIUIController extends BaseUICtrl {
	    constructor(view) {
	        super(view);
	        this.gameConfigs = [];
	        this.configIndex = 0;
	        this.nowstage = 0;
	        this.videoCount = 1;
	        this.totalClick = 0;
	        this.greenCount = 0;
	        this.blackCount = 0;
	        this.videoTop = 100 + 60;
	        this.video = null;
	    }
	    GetView() {
	        return this.uiView;
	    }
	    Init(parent, id, context = null, onResized = null) {
	        super.Init(parent, id, context, onResized);
	        this.mediatorName = UIID.BronzewareContentUIUIID.toString();
	        parent.addChild(this.uiView);
	        this.uiView.zOrder = this.uiConfig.depth;
	        this.RegisterEvent();
	    }
	    OnUIResize(onResized = null) {
	        super.OnUIResize(onResized);
	    }
	    BeforeUIOpen(context = null) {
	        super.BeforeUIOpen(context);
	    }
	    OnUIOpened(context = null) {
	        this.InitData();
	        super.OnUIOpened(context);
	        Laya.stage.addChild(this.uiView);
	        GameUIManager.Instance.Init();
	    }
	    OnUIHide() {
	        super.OnUIHide();
	    }
	    BeforeUIDestroy() {
	        this.RemoveEvent();
	    }
	    RegisterEvent() {
	        Facade$1.getInstance().registerMediator(this);
	        this.GetView().UI_next_Btn.on(Laya.Event.CLICK, this, this.OnUI_next_BtnClick);
	        this.GetView().UI_start_Btn.on(Laya.Event.CLICK, this, this.OnUI_start_BtnClick);
	    }
	    RemoveEvent() {
	        Facade$1.getInstance().removeMediator(this.getMediatorName());
	        this.GetView().UI_next_Btn.off(Laya.Event.CLICK, this, this.OnUI_next_BtnClick);
	        this.GetView().UI_start_Btn.on(Laya.Event.CLICK, this, this.OnUI_start_BtnClick);
	    }
	    OnUI_next_BtnClick() {
	        GameUIManager.Instance.RemovePrefab();
	        this.facade.sendNotification(NotificationNames.NEXT_STAGE);
	    }
	    OnUI_start_BtnClick() {
	        GameUIManager.Instance.RemovePrefab();
	        this.facade.sendNotification(NotificationNames.NEXT_STAGE);
	    }
	    listNotificationInterests() {
	        let list = super.listNotificationInterests();
	        return list.concat([
	            NotificationNames.NEXT_STAGE,
	            NotificationNames.RESTART_GAME
	        ]);
	    }
	    handleNotification(note) {
	        if (!this.GetView().visible)
	            return;
	        super.handleNotification(note);
	        switch (note.getName()) {
	            case NotificationNames.NEXT_STAGE: {
	                this.HideAllUI();
	                this.configIndex++;
	                console.log(this.configIndex);
	                if (this.configIndex > this.gameConfigs.length)
	                    return;
	                let gameconfig = this.gameConfigs[this.configIndex - 1];
	                if (gameconfig == null)
	                    return;
	                console.log("当前步骤:" + (gameconfig.stepContent));
	                if (this.nowstage != gameconfig.stageCategory) {
	                    this.nowstage = gameconfig.stageCategory;
	                    this.UpdateStageUI();
	                }
	                this.UpdateStageTitle(gameconfig);
	                if (gameconfig.stepType == 1) {
	                    let textConfig = ConfigManager.Instance.GetTextConfig(gameconfig.eventId);
	                    if (textConfig != null) {
	                        this.GetView().UI_text_Img.skin = textConfig.textRes;
	                        this.GetView().UI_text_Img.visible = true;
	                        this.GetView().UI_textContent_Panel.visible = true;
	                        if (this.gameConfigs.length > this.configIndex) {
	                            let nextconfig = this.gameConfigs[this.configIndex];
	                            if (nextconfig.stepType == 1) {
	                                this.GetView().UI_start_Btn.visible = false;
	                                this.GetView().UI_next_Btn.visible = true;
	                            }
	                            else if (nextconfig.stepType == 2 || nextconfig.stepType == 3 || nextconfig.stepType == 4 || nextconfig.stepType == 5 || nextconfig.stepType == 6) {
	                                this.GetView().UI_start_Btn.visible = true;
	                                this.GetView().UI_next_Btn.visible = false;
	                            }
	                        }
	                    }
	                }
	                else if (gameconfig.stepType == 2) {
	                    let videoc = ConfigManager.Instance.GetVideoConfig(gameconfig.eventId);
	                    this.GetView().UI_content_Img.visible = true;
	                    this.GetView().UI_content_Img.skin = ConstDefine.blankColorUrl;
	                    if (videoc != null) {
	                        this.LoadVideo(videoc.videoRes);
	                        this.GetView().UI_start_Btn.visible = false;
	                        this.GetView().UI_next_Btn.visible = false;
	                    }
	                }
	                else if (gameconfig.stepType == 3) {
	                    let picConfig = ConfigManager.Instance.GetPictureConfig(gameconfig.eventId);
	                    if (picConfig != null) {
	                        this.GetView().UI_content_Img.skin = picConfig.pictureRes;
	                        this.GetView().UI_content_Img.visible = true;
	                        this.GetView().UI_start_Btn.visible = false;
	                        this.GetView().UI_next_Btn.visible = false;
	                    }
	                    this.facade.sendNotification(NotificationNames.OPENUI, UIID.CalibrationUIUIID);
	                }
	                else if (gameconfig.stepType == 4) {
	                    this.facade.sendNotification(NotificationNames.OPENUI, UIID.ColorMatchingUIUIID);
	                    this.GetView().UI_start_Btn.visible = false;
	                    this.GetView().UI_next_Btn.visible = false;
	                }
	                else if (gameconfig.stepType == 5) {
	                    let picConfig = ConfigManager.Instance.GetPictureConfig(gameconfig.eventId);
	                    if (picConfig != null) {
	                        this.GetView().UI_content_Img.skin = picConfig.pictureRes;
	                        this.GetView().UI_content_Img.visible = true;
	                        if (this.gameConfigs.length > this.configIndex) {
	                            let nextconfig = this.gameConfigs[this.configIndex];
	                            if (nextconfig.stepType == 4) {
	                                this.GetView().UI_start_Btn.visible = true;
	                                this.GetView().UI_next_Btn.visible = false;
	                            }
	                            else {
	                                this.GetView().UI_start_Btn.visible = false;
	                                this.GetView().UI_next_Btn.visible = true;
	                            }
	                        }
	                    }
	                }
	                else if (gameconfig.stepType == 6) {
	                    GameUIManager.Instance.AddPrefab();
	                    GameUIManager.Instance.ResetCameraPos();
	                    this.GetView().UI_bg_Panel.visible = false;
	                    this.uiView.zOrder = 100;
	                    this.uiView.updateZOrder();
	                    this.GetView().UI_3DModelOpPrompt.visible = true;
	                }
	                else if (gameconfig.stepType == 99) {
	                    this.facade.sendNotification(NotificationNames.NEXT_STAGE);
	                }
	                else if (gameconfig.stepType == 999) {
	                    this.facade.sendNotification(NotificationNames.OPENUI, UIID.EndUIUIID);
	                }
	                if (this.gameConfigs.length > this.configIndex && this.GetView().UI_next_Btn.visible) {
	                    let nextconfig = this.gameConfigs[this.configIndex];
	                    if (nextconfig.stageCategory != this.nowstage) {
	                        this.GetView().UI_start_Btn.visible = true;
	                        this.GetView().UI_next_Btn.visible = false;
	                    }
	                }
	                break;
	            }
	            case NotificationNames.RESTART_GAME: {
	                this.configIndex = 0;
	                this.nowstage = 0;
	                this.InitStageUI();
	                this.facade.sendNotification(NotificationNames.NEXT_STAGE);
	                break;
	            }
	        }
	    }
	    InitData() {
	        this.gameConfigs = ConfigManager.Instance.GetAllGameConfig();
	        this.GetView().UI_content_Img.visible = false;
	        this.GetView().UI_textContent_Panel.visible = false;
	        this.InitVideo();
	        this.InitStageUI();
	        this.HideAllUI();
	        this.GetView().UI_next_Btn.visible = false;
	        this.GetView().UI_progressContent_Panel.visible = false;
	        this.GetView().UI_start_Btn.visible = true;
	        this.GetView().UI_start_Img.visible = true;
	    }
	    InitVideo() {
	        if (CommonUtil.OnMiniGame()) {
	        }
	        else {
	            this.reference = new Laya.Sprite();
	            Laya.stage.addChild(this.reference);
	            this.reference.pos(0, this.videoTop);
	            this.reference.size(Laya.stage.width, Laya.stage.height);
	            this.reference.graphics.drawRect(0, this.videoTop, Laya.stage.width, Laya.stage.height - this.videoTop, "#CCCCCC");
	            this.videoElement = Laya.Browser.createElement("video");
	            Laya.Browser.document.body.appendChild(this.videoElement);
	            this.videoElement.src = ConstDefine.videoResPre + "0_0~1.mp4";
	            this.videoElement.style.zInddex = Laya.Render.canvas.style.zIndex + 1;
	            this.videoElement.controls = false;
	            this.videoElement.setAttribute("x-webkit-airplay", "true");
	            this.videoElement.setAttribute("playsinline", "false");
	            this.videoElement.setAttribute("webkit-playsinline", "false");
	            this.videoElement.setAttribute("x5-video-player-type", "h5");
	            this.videoElement.setAttribute("x5-video-player-fullscreen", "true");
	            this.videoElement.setAttribute("x5-video-orientation", "landscape");
	            this.videoElement.style.setProperty("preload", "auto");
	            let that = this;
	            this.videoElement.addEventListener('ended', function () {
	                that.facade.sendNotification(NotificationNames.NEXT_STAGE);
	            });
	            Laya.Utils.fitDOMElementInArea(this.videoElement, this.reference, 0, 0, Laya.stage.width, Laya.stage.height);
	            Laya.stage.on(Laya.Event.RESIZE, this, Laya.Utils.fitDOMElementInArea, [this.videoElement, this.reference, 0, 0, this.reference.width, this.reference.height]);
	        }
	    }
	    LoadVideo(url) {
	        if (this.videoElement == null) {
	            this.InitVideo();
	        }
	        let videoWidth = 464;
	        let videoHeight = 360;
	        if (url.indexOf("0_0") >= 0) {
	            videoWidth = 464;
	            videoHeight = 360;
	        }
	        else if (url.indexOf("0_1") >= 0
	            || url.indexOf("0_2") >= 0
	            || url.indexOf("0_3") >= 0
	            || url.indexOf("4_0") >= 0
	            || url.indexOf("8_0") >= 0) {
	            videoWidth = 480;
	            videoHeight = 360;
	        }
	        else if (url.indexOf("1_0") >= 0
	            || url.indexOf("1_1") >= 0
	            || url.indexOf("2_0") >= 0
	            || url.indexOf("3_0") >= 0
	            || url.indexOf("3_1") >= 0) {
	            videoWidth = 544;
	            videoHeight = 360;
	        }
	        else if (url.indexOf("5_0") >= 0
	            || url.indexOf("5_1") >= 0
	            || url.indexOf("6_1") >= 0
	            || url.indexOf("6_2") >= 0
	            || url.indexOf("7_0") >= 0
	            || url.indexOf("7_1") >= 0) {
	            videoWidth = 640;
	            videoHeight = 360;
	        }
	        else if (url.indexOf("6_0") >= 0) {
	            videoWidth = 408;
	            videoHeight = 360;
	        }
	        let height = Laya.stage.height - this.videoTop;
	        let width = height / videoHeight * videoWidth;
	        this.GetView().UI_content_Img.width = width;
	        this.GetView().UI_content_Img.height = height;
	        this.GetView().UI_content_Img.bottom = 0;
	        this.GetView().UI_content_Img.centerX = 0;
	        if (CommonUtil.OnMiniGame()) {
	            let that = this;
	            if (this.video != null)
	                WechatUtil.DestroyVideo(this.video);
	            let left = Laya.stage.width * 0.5 - width * 0.5;
	            this.video = WechatUtil.CreateVideo(left, this.videoTop, width, height, ConstDefine.videoResPre + url, "http://baizhoudata.oss-cn-beijing.aliyuncs.com/bronze/bg.jpg", () => {
	                that.facade.sendNotification(NotificationNames.NEXT_STAGE);
	            });
	            WechatUtil.PlayVideo(this.video);
	        }
	        else {
	            this.videoElement.src = ConstDefine.videoResPre + url;
	            this.videoElement.load();
	            this.videoElement.style.width = Laya.stage.width + "";
	            this.videoElement.style.height = (Laya.stage.height - this.videoTop) + "";
	            this.videoElement.play();
	        }
	    }
	    InitStageUI() {
	        let widthProgress = this.GetView().UI_progressContent_Panel.width;
	        this.GetView().UI_progress0.left = widthProgress * 0 / 9;
	        this.GetView().UI_progress1.left = widthProgress * 1 / 9;
	        this.GetView().UI_progress2.left = widthProgress * 2 / 9;
	        this.GetView().UI_progress3.left = widthProgress * 3 / 9;
	        this.GetView().UI_progress4.left = widthProgress * 4 / 9;
	        this.GetView().UI_progress5.left = widthProgress * 5 / 9;
	        this.GetView().UI_progress6.left = widthProgress * 6 / 9;
	        this.GetView().UI_progress7.left = widthProgress * 7 / 9;
	        this.GetView().UI_progress8.left = widthProgress * 8 / 9;
	        this.GetView().UI_progress9.left = widthProgress * 9 / 9;
	        this.GetView().UI_progressColor_Panel.width = 0;
	        this.GetView().UI_progress0_color.visible = true;
	        this.GetView().UI_progress1_color.visible = false;
	        this.GetView().UI_progress2_color.visible = false;
	        this.GetView().UI_progress3_color.visible = false;
	        this.GetView().UI_progress4_color.visible = false;
	        this.GetView().UI_progress5_color.visible = false;
	        this.GetView().UI_progress6_color.visible = false;
	        this.GetView().UI_progress7_color.visible = false;
	        this.GetView().UI_progress8_color.visible = false;
	        this.GetView().UI_progress9_color.visible = false;
	    }
	    UpdateStageUI() {
	        switch (this.nowstage) {
	            case 0: {
	                this.GetView().UI_progressColor_Panel.width = this.GetView().UI_progress0.left;
	                this.GetView().UI_progress0_color.visible = true;
	                break;
	            }
	            case 1: {
	                this.GetView().UI_progressColor_Panel.width = this.GetView().UI_progress1.left;
	                this.GetView().UI_progress1_color.visible = true;
	                break;
	            }
	            case 2: {
	                this.GetView().UI_progressColor_Panel.width = this.GetView().UI_progress2.left;
	                this.GetView().UI_progress2_color.visible = true;
	                break;
	            }
	            case 3: {
	                this.GetView().UI_progressColor_Panel.width = this.GetView().UI_progress3.left;
	                this.GetView().UI_progress3_color.visible = true;
	                break;
	            }
	            case 4: {
	                this.GetView().UI_progressColor_Panel.width = this.GetView().UI_progress4.left;
	                this.GetView().UI_progress4_color.visible = true;
	                break;
	            }
	            case 5: {
	                this.GetView().UI_progressColor_Panel.width = this.GetView().UI_progress5.left;
	                this.GetView().UI_progress5_color.visible = true;
	                break;
	            }
	            case 6: {
	                this.GetView().UI_progressColor_Panel.width = this.GetView().UI_progress6.left;
	                this.GetView().UI_progress6_color.visible = true;
	                break;
	            }
	            case 7: {
	                this.GetView().UI_progressColor_Panel.width = this.GetView().UI_progress7.left;
	                this.GetView().UI_progress7_color.visible = true;
	                break;
	            }
	            case 8: {
	                this.GetView().UI_progressColor_Panel.width = this.GetView().UI_progress8.left;
	                this.GetView().UI_progress8_color.visible = true;
	                break;
	            }
	            case 9: {
	                this.GetView().UI_progressColor_Panel.width = this.GetView().UI_progress9.left;
	                this.GetView().UI_progress9_color.visible = true;
	                break;
	            }
	        }
	    }
	    UpdateStageTitle(gameConfig) {
	        let showtitle = gameConfig.titleConfigId > 0;
	        this.GetView().UI_Title.visible = showtitle;
	        if (showtitle) {
	            let titleConfig = ConfigManager.Instance.GetTitleConfig(gameConfig.titleConfigId);
	            this.GetView().UI_Title.skin = titleConfig.textRes;
	        }
	    }
	    HideAllUI() {
	        this.GetView().UI_start_Btn.visible = false;
	        this.GetView().UI_start_Img.visible = false;
	        this.GetView().UI_progressContent_Panel.visible = true;
	        this.GetView().UI_text_Img.skin = "";
	        this.GetView().UI_content_Img.visible = false;
	        this.GetView().UI_textContent_Panel.visible = false;
	        this.GetView().UI_content_Label.align = "left";
	        this.GetView().UI_3DModelOpPrompt.visible = false;
	        if (CommonUtil.OnMiniGame()) {
	            if (this.video != null) {
	                WechatUtil.DestroyVideo(this.video);
	                this.video = null;
	            }
	        }
	        else {
	            this.videoElement.style.width = 1 + "";
	            this.videoElement.style.height = 1 + "";
	        }
	        this.GetView().UI_next_Btn.visible = true;
	    }
	}

	var EnumInputEvent;
	(function (EnumInputEvent) {
	    EnumInputEvent[EnumInputEvent["TouchDown"] = 0] = "TouchDown";
	    EnumInputEvent[EnumInputEvent["TouchUp"] = 1] = "TouchUp";
	    EnumInputEvent[EnumInputEvent["SlideUp"] = 2] = "SlideUp";
	    EnumInputEvent[EnumInputEvent["SlideDown"] = 3] = "SlideDown";
	    EnumInputEvent[EnumInputEvent["SlideLeft"] = 4] = "SlideLeft";
	    EnumInputEvent[EnumInputEvent["SlideRight"] = 5] = "SlideRight";
	})(EnumInputEvent || (EnumInputEvent = {}));
	class InputEventData {
	    constructor(inputType, param = 0) {
	        this.InputType = inputType;
	        this.param = param;
	    }
	}
	class InputComponent {
	    constructor(touchSprite, onTouchDown = null, onTouchUp = null, onTouchMove = null, onTouchOut = null) {
	        this.touchSprite = touchSprite;
	        this.onTouchDown = onTouchDown;
	        this.onTouchUp = onTouchUp;
	        this.onTouchMove = onTouchMove;
	        this.onTouchOut = onTouchOut;
	        this.Init();
	    }
	    get MouseDown() { return this.isMouseDown; }
	    Init() {
	        this.isMouseDown = false;
	        this.SetActive(true);
	        this.AddEvent();
	    }
	    SetActive(active) {
	        this.active = active;
	    }
	    Destroy() {
	        this.RemoveEvent();
	    }
	    AddEvent() {
	        Laya.stage.on(Laya.Event.MOUSE_DOWN, this, this.mouseDown);
	        Laya.stage.on(Laya.Event.MOUSE_UP, this, this.mouseUp);
	        Laya.stage.on(Laya.Event.MOUSE_OUT, this, this.mouseOut);
	        Laya.stage.on(Laya.Event.MOUSE_MOVE, this, this.mouseMove);
	    }
	    RemoveEvent() {
	        Laya.stage.off(Laya.Event.MOUSE_DOWN, this, this.mouseDown);
	        Laya.stage.off(Laya.Event.MOUSE_UP, this, this.mouseUp);
	        Laya.stage.off(Laya.Event.MOUSE_OUT, this, this.mouseOut);
	        Laya.stage.off(Laya.Event.MOUSE_MOVE, this, this.mouseMove);
	    }
	    mouseDown(e) {
	        if (!this.isMouseDown) {
	            this.lastMouseX = this.touchSprite.mouseX;
	            this.lastMouseY = this.touchSprite.mouseY;
	            this.touchDownID = e.touchId;
	            this.touchDownTime = Laya.timer.currTimer;
	            this.isMouseDown = true;
	            if (!this.active)
	                return;
	            if (this.onTouchDown)
	                this.onTouchDown(this.lastMouseX, this.lastMouseY);
	        }
	    }
	    mouseUp(e) {
	        if (this.isMouseDown) {
	            if (e.touchId != this.touchDownID)
	                return;
	            let mouseUpTime = Laya.timer.currTimer;
	            let deltaTime = (mouseUpTime - this.touchDownTime) / 1000;
	            this.isMouseDown = false;
	            if (!this.active)
	                return;
	            if (this.onTouchUp)
	                this.onTouchUp();
	        }
	    }
	    mouseOut(e) {
	        if (this.isMouseDown) {
	            if (e.touchId != this.touchDownID)
	                return;
	            let mouseUpTime = Laya.timer.currTimer;
	            let deltaTime = (mouseUpTime - this.touchDownTime) / 1000;
	            this.isMouseDown = false;
	            if (!this.active)
	                return;
	            if (this.onTouchOut)
	                this.onTouchOut();
	        }
	    }
	    mouseMove(e) {
	        if (!this.active)
	            return;
	        if (e.touchId != this.touchDownID)
	            return;
	        if (this.isMouseDown) {
	            let offsetX = this.touchSprite.mouseX - this.lastMouseX;
	            let offsety = this.touchSprite.mouseY - this.lastMouseY;
	            this.lastMouseX = this.touchSprite.mouseX;
	            this.lastMouseY = this.touchSprite.mouseY;
	            if (this.onTouchMove)
	                this.onTouchMove(offsetX, offsety);
	        }
	    }
	}

	var Facade$2 = puremvc.Facade;
	class CalibrationUIUIController extends BaseUICtrl {
	    constructor(view) {
	        super(view);
	        this.rotationSpeed = 0.4;
	        this.ispointer = false;
	        this.isclockwise = true;
	        this.scopeMin = 0;
	        this.scopeMax = 0;
	        this.stoptime = 5;
	        this.isstop = true;
	    }
	    GetView() {
	        return this.uiView;
	    }
	    Init(parent, id, context = null, onResized = null) {
	        super.Init(parent, id, context, onResized);
	        this.mediatorName = UIID.CalibrationUIUIID.toString();
	        parent.addChild(this.uiView);
	        this.uiView.zOrder = this.uiConfig.depth;
	        this.RegisterEvent();
	    }
	    OnUIResize(onResized = null) {
	        super.OnUIResize(onResized);
	    }
	    BeforeUIOpen(context = null) {
	        super.BeforeUIOpen(context);
	    }
	    OnUIOpened(context = null) {
	        super.OnUIOpened(context);
	        this.InitData();
	    }
	    OnUIHide() {
	        TimeManager.Instance.remove(this.timerKey);
	        super.OnUIHide();
	    }
	    BeforeUIDestroy() {
	        this.RemoveEvent();
	    }
	    RegisterEvent() {
	        Facade$2.getInstance().registerMediator(this);
	    }
	    RemoveEvent() {
	        Facade$2.getInstance().removeMediator(this.getMediatorName());
	    }
	    listNotificationInterests() {
	        let list = super.listNotificationInterests();
	        return list.concat([
	            NotificationNames.InputEvent
	        ]);
	    }
	    handleNotification(note) {
	        if (!this.GetView().visible)
	            return;
	        super.handleNotification(note);
	        switch (note.getName()) {
	            case NotificationNames.InputEvent: {
	                let InputEvent = note.getBody();
	                if (InputEvent.InputType == EnumInputEvent.TouchDown) {
	                    let a = this.GetView().UI_prompt.visible;
	                    if (this.GetView().UI_prompt.visible || this.GetView().UI_mistake.visible) {
	                        this.GetView().UI_prompt.visible = false;
	                        this.GetView().UI_mistake.visible = false;
	                        this.ispointer = true;
	                    }
	                    else if (!this.GetView().UI_prompt.visible) {
	                        this.ispointer = false;
	                        this.isstop = false;
	                    }
	                }
	                break;
	            }
	        }
	    }
	    InitData() {
	        this.stoptime = 5;
	        this.scopeMin = 0;
	        this.scopeMax = 0;
	        this.GetView().UI_prompt.visible = true;
	        this.GetView().UI_PauseZone1.visible = false;
	        this.GetView().UI_PauseZone2.visible = false;
	        this.GetView().UI_PauseZone3.visible = false;
	        this.GetView().UI_PauseZone4.visible = false;
	        this.GetView().UI_mistake.visible = false;
	        this.ispointer = false;
	        this.isstop = true;
	        this.timerKey = TimeManager.Instance.addUpdater(cbhandler.gen_handler(this.Update, this));
	        this.range();
	    }
	    range() {
	        let num = Math.random();
	        if (num <= 0.25) {
	            this.GetView().UI_PauseZone1.visible = true;
	            this.scopeMin = -25;
	            this.scopeMax = -7;
	        }
	        else if (num <= 0.5) {
	            this.GetView().UI_PauseZone2.visible = true;
	            this.scopeMin = -145;
	            this.scopeMax = -127;
	        }
	        else if (num <= 0.75) {
	            this.GetView().UI_PauseZone3.visible = true;
	            this.scopeMin = -111;
	            this.scopeMax = -93;
	        }
	        else {
	            this.GetView().UI_PauseZone4.visible = true;
	            this.scopeMin = -71;
	            this.scopeMax = -51;
	        }
	    }
	    Update() {
	        if (this.ispointer) {
	            this.pointerRotation();
	        }
	        if (!this.isstop) {
	            this.stoptime -= Laya.timer.delta / 100;
	            if (this.stoptime <= 0) {
	                this.isstop = true;
	                if (this.GetView().UI_pointer.rotation < this.scopeMin || this.GetView().UI_pointer.rotation > this.scopeMax) {
	                    this.GetView().UI_mistake.visible = true;
	                    this.stoptime = 5;
	                }
	                else {
	                    this.facade.sendNotification(NotificationNames.HIDEUI, UIID.CalibrationUIUIID);
	                    this.sendNotification(NotificationNames.NEXT_STAGE);
	                }
	            }
	        }
	    }
	    pointerRotation() {
	        if (this.isclockwise) {
	            this.GetView().UI_pointer.rotation += this.rotationSpeed * Laya.timer.delta;
	            if (this.GetView().UI_pointer.rotation >= 55) {
	                this.isclockwise = false;
	                this.GetView().UI_pointer.rotation = 55;
	            }
	        }
	        else if (!this.isclockwise) {
	            this.GetView().UI_pointer.rotation -= this.rotationSpeed * Laya.timer.delta;
	            if (this.GetView().UI_pointer.rotation <= -184) {
	                this.isclockwise = true;
	                this.GetView().UI_pointer.rotation = -185;
	            }
	        }
	    }
	}

	var Facade$3 = puremvc.Facade;
	class ColorMatchingUIUIController extends BaseUICtrl {
	    constructor(view) {
	        super(view);
	        this.totalClick = 0;
	        this.greenCount = 0;
	        this.blackCount = 0;
	    }
	    GetView() {
	        return this.uiView;
	    }
	    Init(parent, id, context = null, onResized = null) {
	        super.Init(parent, id, context, onResized);
	        this.mediatorName = UIID.ColorMatchingUIUIID.toString();
	        parent.addChild(this.uiView);
	        this.uiView.zOrder = this.uiConfig.depth;
	        this.RegisterEvent();
	    }
	    OnUIResize(onResized = null) {
	        super.OnUIResize(onResized);
	    }
	    BeforeUIOpen(context = null) {
	        super.BeforeUIOpen(context);
	    }
	    OnUIOpened(context = null) {
	        this.ReDataAndUI();
	        super.OnUIOpened(context);
	    }
	    OnUIHide() {
	        super.OnUIHide();
	    }
	    BeforeUIDestroy() {
	        this.RemoveEvent();
	    }
	    RegisterEvent() {
	        Facade$3.getInstance().registerMediator(this);
	        this.GetView().UI_yellow_Btn.on(Laya.Event.CLICK, this, this.OnUI_yellow_BtnClick);
	        this.GetView().UI_black_Btn.on(Laya.Event.CLICK, this, this.OnUI_black_BtnClick);
	        this.GetView().UI_green_Btn.on(Laya.Event.CLICK, this, this.OnUI_green_BtnClick);
	        this.GetView().UI_wrong_Img.on(Laya.Event.CLICK, this, this.OnUI_wrong_ImgClick);
	    }
	    RemoveEvent() {
	        Facade$3.getInstance().removeMediator(this.getMediatorName());
	        this.GetView().UI_yellow_Btn.off(Laya.Event.CLICK, this, this.OnUI_yellow_BtnClick);
	        this.GetView().UI_black_Btn.off(Laya.Event.CLICK, this, this.OnUI_black_BtnClick);
	        this.GetView().UI_green_Btn.off(Laya.Event.CLICK, this, this.OnUI_green_BtnClick);
	        this.GetView().UI_wrong_Img.off(Laya.Event.CLICK, this, this.OnUI_wrong_ImgClick);
	    }
	    OnUI_yellow_BtnClick() {
	        console.log("黄");
	        this.totalClick++;
	        this.OnClick("y");
	        if (this.totalClick >= 3) {
	            this.CheckRight();
	        }
	    }
	    OnUI_black_BtnClick() {
	        console.log("黑");
	        this.totalClick++;
	        this.blackCount++;
	        this.OnClick("b");
	        if (this.totalClick >= 3) {
	            this.CheckRight();
	        }
	    }
	    OnUI_green_BtnClick() {
	        console.log("绿");
	        this.totalClick++;
	        this.greenCount++;
	        this.OnClick("g");
	        if (this.totalClick >= 3) {
	            this.CheckRight();
	        }
	    }
	    OnUI_wrong_ImgClick() {
	        this.ReDataAndUI();
	    }
	    OnInitColor() {
	        this.GetView().UI_Block1.skin = null;
	        this.GetView().UI_Block2.skin = null;
	        this.GetView().UI_Block3.skin = null;
	    }
	    OnClick(color) {
	        if (this.totalClick == 1) {
	            this.GetView().UI_Block1.skin = "largeImg/BronzeWareImg/9/" + color + ".png";
	        }
	        else if (this.totalClick == 2) {
	            this.GetView().UI_Block2.skin = "largeImg/BronzeWareImg/9/" + color + ".png";
	        }
	        else {
	            this.GetView().UI_Block3.skin = "largeImg/BronzeWareImg/9/" + color + ".png";
	        }
	    }
	    listNotificationInterests() {
	        let list = super.listNotificationInterests();
	        return list.concat([]);
	    }
	    handleNotification(note) {
	        if (!this.GetView().visible)
	            return;
	        super.handleNotification(note);
	        switch (note.getName()) {
	        }
	    }
	    CheckRight() {
	        if (this.greenCount == 2 && this.blackCount == 1) {
	            this.facade.sendNotification(NotificationNames.HIDEUI, UIID.ColorMatchingUIUIID);
	            this.facade.sendNotification(NotificationNames.NEXT_STAGE);
	        }
	        else {
	            this.GetView().UI_wrong_Img.visible = true;
	        }
	    }
	    ReDataAndUI() {
	        this.greenCount = 0;
	        this.blackCount = 0;
	        this.totalClick = 0;
	        this.GetView().UI_wrong_Img.visible = false;
	        this.OnInitColor();
	    }
	}

	var Facade$4 = puremvc.Facade;
	class EndUIUIController extends BaseUICtrl {
	    constructor(view) {
	        super(view);
	    }
	    GetView() {
	        return this.uiView;
	    }
	    Init(parent, id, context = null, onResized = null) {
	        super.Init(parent, id, context, onResized);
	        this.mediatorName = UIID.EndUIUIID.toString();
	        parent.addChild(this.uiView);
	        this.uiView.zOrder = this.uiConfig.depth;
	        this.RegisterEvent();
	    }
	    OnUIResize(onResized = null) {
	        super.OnUIResize(onResized);
	    }
	    BeforeUIOpen(context = null) {
	        super.BeforeUIOpen(context);
	    }
	    OnUIOpened(context = null) {
	        super.OnUIOpened(context);
	        this.InitData();
	    }
	    OnUIHide() {
	        super.OnUIHide();
	    }
	    BeforeUIDestroy() {
	        this.RemoveEvent();
	    }
	    RegisterEvent() {
	        Facade$4.getInstance().registerMediator(this);
	        this.GetView().UI_End1Btn.on(Laya.Event.MOUSE_DOWN, this, this.OnUI_End1BtnMOUSE_DOWN);
	        this.GetView().UI_End2Btn.on(Laya.Event.MOUSE_UP, this, this.OnUI_End2BtnMOUSE_UP);
	    }
	    RemoveEvent() {
	        Facade$4.getInstance().removeMediator(this.getMediatorName());
	        this.GetView().UI_End1Btn.off(Laya.Event.MOUSE_DOWN, this, this.OnUI_End1BtnMOUSE_DOWN);
	        this.GetView().UI_End2Btn.off(Laya.Event.MOUSE_UP, this, this.OnUI_End2BtnMOUSE_UP);
	    }
	    OnUI_End1BtnMOUSE_DOWN() {
	        this.GetView().UI_End1Btn.visible = false;
	        this.GetView().UI_End2Btn.visible = true;
	    }
	    OnUI_End2BtnMOUSE_UP() {
	        this.GetView().UI_End2Btn.visible = false;
	        this.GetView().UI_End1Btn.visible = true;
	        this.facade.sendNotification(NotificationNames.HIDEUI, UIID.EndUIUIID);
	        this.facade.sendNotification(NotificationNames.RESTART_GAME);
	    }
	    listNotificationInterests() {
	        let list = super.listNotificationInterests();
	        return list.concat([]);
	    }
	    handleNotification(note) {
	        if (!this.GetView().visible)
	            return;
	        super.handleNotification(note);
	        switch (note.getName()) {
	        }
	    }
	    InitData() {
	        this.GetView().UI_End1Btn.visible = true;
	        this.GetView().UI_End2Btn.visible = false;
	    }
	}

	var Facade$5 = puremvc.Facade;
	class StartUIUIController extends BaseUICtrl {
	    constructor(view) {
	        super(view);
	    }
	    GetView() {
	        return this.uiView;
	    }
	    Init(parent, id, context = null, onResized = null) {
	        super.Init(parent, id, context, onResized);
	        this.mediatorName = UIID.StartUIUIID.toString();
	        parent.addChild(this.uiView);
	        this.uiView.zOrder = this.uiConfig.depth;
	        this.RegisterEvent();
	    }
	    OnUIResize(onResized = null) {
	        super.OnUIResize(onResized);
	    }
	    BeforeUIOpen(context = null) {
	        super.BeforeUIOpen(context);
	    }
	    OnUIOpened(context = null) {
	        super.OnUIOpened(context);
	        this.InitData();
	    }
	    OnUIHide() {
	        super.OnUIHide();
	    }
	    BeforeUIDestroy() {
	        this.RemoveEvent();
	    }
	    RegisterEvent() {
	        Facade$5.getInstance().registerMediator(this);
	        this.GetView().UI_Start1Btn.on(Laya.Event.MOUSE_DOWN, this, this.OnUI_Start1BtnMOUSE_DOWN);
	        this.GetView().UI_Start2Btn.on(Laya.Event.MOUSE_UP, this, this.OnUI_Start2BtnMOUSE_UP);
	    }
	    RemoveEvent() {
	        Facade$5.getInstance().removeMediator(this.getMediatorName());
	        this.GetView().UI_Start1Btn.off(Laya.Event.MOUSE_DOWN, this, this.OnUI_Start1BtnMOUSE_DOWN);
	        this.GetView().UI_Start2Btn.off(Laya.Event.MOUSE_UP, this, this.OnUI_Start2BtnMOUSE_UP);
	    }
	    OnUI_Start1BtnMOUSE_DOWN() {
	        this.GetView().UI_Start1Btn.visible = false;
	        GameUIManager.Instance.RemovePrefab();
	    }
	    OnUI_Start2BtnMOUSE_UP() {
	        this.GetView().UI_Start1Btn.visible = true;
	        this.facade.sendNotification(NotificationNames.HIDEUI, UIID.StartUIUIID);
	        this.facade.sendNotification(NotificationNames.OPENUI, UIID.BronzewareContentUIUIID);
	        this.GetView().UI_Start1Btn.mouseEnabled = false;
	    }
	    listNotificationInterests() {
	        let list = super.listNotificationInterests();
	        return list.concat([
	            NotificationNames.InputEvent
	        ]);
	    }
	    handleNotification(note) {
	        if (!this.GetView().visible)
	            return;
	        super.handleNotification(note);
	        switch (note.getName()) {
	            case NotificationNames.InputEvent: {
	                let InputEvent = note.getBody();
	                if (InputEvent.InputType == EnumInputEvent.TouchDown) {
	                }
	                else if (InputEvent.InputType == EnumInputEvent.TouchUp) {
	                }
	                break;
	            }
	        }
	    }
	    InitData() {
	        this.GetView().UI_Start1Btn.mouseEnabled = true;
	    }
	}

	class UIFactory {
	    constructor() { }
	    static Create(id, onCtrlCreated) {
	        let config = ConfigManager.Instance.GetUIConfig(id);
	        let webPathPrefix = config && config.UIWebPathPrefix ? config.UIWebPathPrefix : "";
	        let prefabPath = this.GetUIPrefabPath(id);
	        if (prefabPath == "") {
	            let baseUICtrl = this.GetUIController(id);
	            onCtrlCreated(baseUICtrl);
	        }
	        else {
	            ResourceManager.Instance.LoadRes(webPathPrefix + this.GetUIPrefabPath(id), () => {
	                let baseUICtrl = this.GetUIController(id);
	                onCtrlCreated(baseUICtrl);
	            });
	        }
	    }
	    static GetUIController(id) {
	        switch (id) {
	            case UIID.BronzewareContentUIUIID:
	                return new BronzewareContentUIUIController(new ui.uiprefab.BronzewareContentUIUI());
	            case UIID.CalibrationUIUIID:
	                return new CalibrationUIUIController(new ui.uiprefab.CalibrationUIUI());
	            case UIID.ColorMatchingUIUIID:
	                return new ColorMatchingUIUIController(new ui.uiprefab.ColorMatchingUIUI());
	            case UIID.EndUIUIID:
	                return new EndUIUIController(new ui.uiprefab.EndUIUI());
	            case UIID.LoadingUIUIID:
	                return new LoadingUIUIController(new ui.uiprefab.LoadingUIUI());
	            case UIID.StartUIUIID:
	                return new StartUIUIController(new ui.uiprefab.StartUIUI());
	            default:
	                break;
	        }
	    }
	    static GetUIPrefabPath(id) {
	        switch (id) {
	            case UIID.BronzewareContentUIUIID:
	                return "uiprefab/BronzewareContentUI.scene";
	            case UIID.CalibrationUIUIID:
	                return "uiprefab/CalibrationUI.scene";
	            case UIID.ColorMatchingUIUIID:
	                return "uiprefab/ColorMatchingUI.scene";
	            case UIID.EndUIUIID:
	                return "uiprefab/EndUI.scene";
	            case UIID.LoadingUIUIID:
	                return "";
	            case UIID.StartUIUIID:
	                return "uiprefab/StartUI.scene";
	            default:
	                break;
	        }
	    }
	}

	class ZOrderDefine {
	}
	ZOrderDefine.UI = 500;

	class UIMediator extends puremvc.Mediator {
	    constructor() {
	        super();
	        puremvc.Facade.getInstance().registerMediator(this);
	    }
	    static GetInstance() {
	        if (UIMediator._instance == null) {
	            UIMediator._instance = new UIMediator();
	        }
	        return UIMediator._instance;
	    }
	    Init(callback) {
	        this.allUIDic = new Dictionary();
	        this.showUIDic = new Dictionary();
	        this.loadingUIDic = new Dictionary();
	        this.uiParent = new Laya.Sprite();
	        this.uiParent.name = "uiparentNode";
	        Laya.stage.addChild(this.uiParent);
	        this.uiParent.zOrder = ZOrderDefine.UI;
	        this.initCallback = callback;
	        var loadItem = [];
	        if (loadItem.length > 0) {
	            ResourceManager.Instance.LoadResArray(loadItem, () => {
	                this.onFinishInit();
	            });
	        }
	        else {
	            this.onFinishInit();
	        }
	    }
	    GetResItem(arrItem) {
	        var m_LoadItem = [
	            { url: "unpack.json", type: Laya.Loader.JSON },
	        ];
	        for (let i = 0; i < m_LoadItem.length; i++) {
	            arrItem.push(m_LoadItem[i]);
	        }
	    }
	    onFinishInit() {
	        if (this.initCallback != null) {
	            this.initCallback();
	        }
	    }
	    Open(id, context = null) {
	        if (this.IsLoadingUI(id)) {
	            Log.Warn("UI正在打开, 不重复打开." + id.toString());
	            return;
	        }
	        if (this.IsShowing(id)) {
	            Log.Warn("UI已经打开, 不重复打开." + id.toString());
	            return;
	        }
	        this.AddLoadingUI(id);
	        let config = ConfigManager.Instance.GetUIConfig(id);
	        if (config && config.showLoading) {
	            LoadingUIUIController.Instance.SetActive(true, null, null, "UI资源准备中...");
	            LoadingUIUIController.Instance.SetLoadingActive(true);
	        }
	        let startFrame = Laya.timer.currFrame;
	        this.loadAtlasBeforeOpen(id, () => {
	            this.prepareUI(id, this.uiParent, (uictrl) => {
	                let onLoadingClosed = () => {
	                    this.doBeforeUIOpen(id);
	                    uictrl.Open(context);
	                    this.AddShowUI(id, uictrl);
	                    this.RemoveLoadingUI(id);
	                };
	                if (config && config.showLoading) {
	                    let offset = Laya.timer.currFrame - startFrame;
	                    LoadingUIUIController.Instance.SetActive(false, offset <= 0, onLoadingClosed);
	                }
	                else {
	                    onLoadingClosed();
	                }
	            }, context);
	        }, (progress) => {
	            if (config && config.showLoading)
	                this.sendNotification(NotificationNames.LoadingUIProgress, progress);
	        });
	    }
	    prepareUI(id, parent, onUIPrepared, context = null) {
	        let uictrl = this.allUIDic.get(id);
	        if (uictrl == null) {
	            UIFactory.Create(id, (createduiCtrl) => {
	                uictrl = createduiCtrl;
	                let callback = () => {
	                    this.AddInstantiated(id, uictrl);
	                    onUIPrepared(uictrl);
	                };
	                uictrl.Init(parent, id, context, () => {
	                    let temp = callback;
	                    callback = null;
	                    if (temp)
	                        temp();
	                });
	            });
	        }
	        else {
	            onUIPrepared(uictrl);
	        }
	    }
	    Hide(id, isAuto = false, callback = null) {
	        if (isAuto) {
	            let config = ConfigManager.Instance.GetUIConfig(id);
	            if (config && config.uiAutoCloseType == UIAutoCloseType.NotAffectedByOthers)
	                return;
	        }
	        let uictrl = this.GetShowUI(id);
	        if (uictrl != null) {
	            uictrl.Hide(() => {
	                this.RemoveShowUI(id);
	                if (callback)
	                    callback();
	            });
	        }
	    }
	    HideAll(isAuto = false) {
	        let idArray = this.showUIDic.keys;
	        idArray.forEach(id => {
	            this.Hide(id, isAuto);
	        });
	    }
	    Destroy(id) {
	        let uictrl = this.GetInstantiated(id);
	        if (uictrl != null) {
	            this.Hide(id, false, () => {
	                uictrl.Destroy();
	                this.RemoveInstantiated(id);
	                this.releaseAtlasOnDestory(id);
	                this.releaseUnpackImageOnDestory(id);
	            });
	        }
	    }
	    DestroyAll() {
	        let keys = [];
	        for (let index = 0; index < this.allUIDic.keys.length; index++) {
	            let element = this.allUIDic.keys[index];
	            keys.push(element);
	        }
	        for (var index = 0; index < keys.length; index++) {
	            var element = keys[index];
	            this.Destroy(element);
	        }
	        this.showUIDic.clear();
	        this.allUIDic.clear();
	        this.loadingUIDic.clear();
	    }
	    IsShowing(id) {
	        return this.showUIDic.get(id) != null;
	    }
	    GetShowUI(id) {
	        return this.showUIDic.get(id);
	    }
	    AddShowUI(id, showui) {
	        this.showUIDic.set(id, showui);
	    }
	    RemoveShowUI(id) {
	        this.showUIDic.remove(id);
	    }
	    IsInstantiated(id) {
	        return this.allUIDic.get(id) != null;
	    }
	    GetInstantiated(id) {
	        return this.allUIDic.get(id);
	    }
	    AddInstantiated(id, intanceUI) {
	        this.allUIDic.set(id, intanceUI);
	    }
	    RemoveInstantiated(id) {
	        this.allUIDic.remove(id);
	    }
	    IsLoadingUI(id) {
	        return this.loadingUIDic.get(id) != null;
	    }
	    AddLoadingUI(id) {
	        this.loadingUIDic.set(id, true);
	    }
	    RemoveLoadingUI(id) {
	        this.loadingUIDic.remove(id);
	    }
	    doBeforeUIOpen(id) {
	        let config = ConfigManager.Instance.GetUIConfig(id);
	        if (config && config.uiShowType == UIShowType.HideOthers) {
	            this.HideAll(true);
	        }
	    }
	    loadAtlasBeforeOpen(id, comFunc, progressFun = null) {
	        let config = ConfigManager.Instance.GetUIConfig(id);
	        if (config && config.atlas.length > 0) {
	            let atlasNames = config.atlas;
	            let toLoad = [];
	            for (let index = 0; index < atlasNames.length; index++) {
	                const tempAtlas = atlasNames[index];
	                let atlasLoaded = ResourceManager.Instance.checkResLoaded(tempAtlas);
	                if (!atlasLoaded)
	                    toLoad.push(tempAtlas);
	            }
	            let spriteNames = config.unpackImagList;
	            for (let index = 0; index < spriteNames.length; index++) {
	                const tmpSprite = spriteNames[index];
	                let tempLoaded = ResourceManager.Instance.checkResLoaded(tmpSprite);
	                if (!tempLoaded)
	                    toLoad.push(tmpSprite);
	            }
	            if (toLoad.length > 0) {
	                ResourceManager.Instance.LoadResArray(toLoad, () => this.onAtlasLoadedForOpen(comFunc), null, progressFun);
	            }
	            else {
	                comFunc();
	            }
	        }
	        else {
	            comFunc();
	        }
	    }
	    onAtlasLoadedForOpen(comFunc) {
	        comFunc();
	    }
	    releaseAtlasOnDestory(id) {
	        let config = ConfigManager.Instance.GetUIConfig(id);
	        if (config && config.atlas.length > 0) {
	            let atlasNames = config.atlas;
	            for (let index = 0; index < atlasNames.length; index++) {
	                const temp = atlasNames[index];
	                ResourceManager.Instance.Release(temp);
	            }
	        }
	    }
	    releaseUnpackImageOnDestory(id) {
	        let config = ConfigManager.Instance.GetUIConfig(id);
	        if (config && config.unpackImagList && config.unpackImagList.length > 0) {
	            for (let index = 0; index < config.unpackImagList.length; index++) {
	                let imagePath = config.unpackImagList[index].trim();
	                if (imagePath != "") {
	                    ResourceManager.Instance.Release(imagePath);
	                }
	            }
	        }
	    }
	    listNotificationInterests() {
	        return [
	            NotificationNames.OPENUI,
	            NotificationNames.OPENUIWITHPARAM,
	            NotificationNames.HIDEUI,
	            NotificationNames.DESTROYUI,
	            NotificationNames.DESTROYALLUI,
	            NotificationNames.HIDEALLUI,
	        ];
	    }
	    handleNotification(note) {
	        switch (note.getName()) {
	            case NotificationNames.OPENUI:
	                {
	                    let id = note.getBody();
	                    this.Open(id);
	                    break;
	                }
	            case NotificationNames.OPENUIWITHPARAM:
	                {
	                    let param = note.getBody();
	                    this.Open(param.ID, param);
	                    break;
	                }
	            case NotificationNames.HIDEUI:
	                {
	                    let id = note.getBody();
	                    this.Hide(id);
	                    break;
	                }
	            case NotificationNames.DESTROYUI:
	                {
	                    let id = note.getBody();
	                    this.Destroy(id);
	                    break;
	                }
	            case NotificationNames.DESTROYALLUI:
	                {
	                    this.DestroyAll();
	                    break;
	                }
	            case NotificationNames.HIDEALLUI:
	                {
	                    this.HideAll();
	                    break;
	                }
	        }
	    }
	}

	class LoginSceneEnterCommand extends puremvc.SimpleCommand {
	    execute(notification) {
	        let that = this;
	        let curprogress = 0;
	        let timer = TimeManager.Instance.addUpdater(cbhandler.gen_handler((dt) => {
	            curprogress += dt / 30;
	            that.facade.sendNotification(NotificationNames.LoadingUIProgress, curprogress);
	        }));
	        Laya.loader.create(ConstDefine.Bronzeware, Laya.Handler.create(this, () => {
	            TimeManager.Instance.remove(timer);
	            LoadingUIUIController.Instance.SetActive(false, false);
	            that.facade.sendNotification(NotificationNames.OPENUI, UIID.StartUIUIID);
	        }), Laya.Handler.create(this, (progress) => {
	            curprogress = progress;
	            that.facade.sendNotification(NotificationNames.LoadingUIProgress, progress);
	        }, null, false));
	    }
	}

	class InputManager {
	    constructor() {
	        this.slideSensitiviy = 1;
	    }
	    static get Instance() {
	        if (InputManager._instace == null) {
	            InputManager._instace = new InputManager();
	        }
	        return InputManager._instace;
	    }
	    set SlideSensitiviy(value) { this.slideSensitiviy = Math.max(0, value); }
	    get MouseDown() { return this.inputComp.MouseDown; }
	    Init() {
	        this.inputComp = new InputComponent(Laya.stage, this.mouseDown.bind(this), this.mouseUp.bind(this), this.mouseMove.bind(this), this.mouseOut.bind(this));
	        this.SetActive(true);
	    }
	    SetActive(active) {
	        this.inputComp.SetActive(active);
	    }
	    Destroy() {
	        this.inputComp.Destroy();
	    }
	    mouseDown(mouseX, mouseY) {
	        puremvc.Facade.instance.sendNotification(NotificationNames.InputEvent, new InputEventData(EnumInputEvent.TouchDown));
	    }
	    mouseUp() {
	        puremvc.Facade.instance.sendNotification(NotificationNames.InputEvent, new InputEventData(EnumInputEvent.TouchUp));
	    }
	    mouseOut() {
	        puremvc.Facade.instance.sendNotification(NotificationNames.InputEvent, new InputEventData(EnumInputEvent.TouchUp));
	    }
	    mouseMove(offsetX, offsety) {
	        if (offsetX > 0 && offsetX > this.slideSensitiviy) {
	            puremvc.Facade.instance.sendNotification(NotificationNames.InputEvent, new InputEventData(EnumInputEvent.SlideRight, offsetX));
	        }
	        else if (offsetX < 0 && offsetX < -this.slideSensitiviy) {
	            puremvc.Facade.instance.sendNotification(NotificationNames.InputEvent, new InputEventData(EnumInputEvent.SlideLeft, offsetX));
	        }
	        if (offsety > 0 && offsetX > this.slideSensitiviy) {
	            puremvc.Facade.instance.sendNotification(NotificationNames.InputEvent, new InputEventData(EnumInputEvent.SlideDown, offsety));
	        }
	        else if (offsety < 0 && offsetX < -this.slideSensitiviy) {
	            puremvc.Facade.instance.sendNotification(NotificationNames.InputEvent, new InputEventData(EnumInputEvent.SlideUp, offsety));
	        }
	    }
	}

	class GameInitCommand extends puremvc.SimpleCommand {
	    execute(notification) {
	        InputManager.Instance.Init();
	        this.initCommands();
	        this.next();
	    }
	    initCommands() {
	        puremvc.Facade.instance.registerCommand(NotificationNames.ENTER_LOGIN_SCENE_COMMAND, LoginSceneEnterCommand);
	    }
	    next() {
	        puremvc.Facade.instance.sendNotification(NotificationNames.ENTER_LOGIN_SCENE_COMMAND);
	    }
	}

	class PreloadCommand extends puremvc.SimpleCommand {
	    constructor() {
	        super(...arguments);
	        this.step = 0;
	    }
	    execute(notification) {
	        super.execute(notification);
	        Laya.AtlasInfoManager.enable("fileconfig.json", Laya.Handler.create(this, this.onfileConfigLoaded));
	    }
	    ReformUIAtlasPath() {
	        let dic = Laya.AtlasInfoManager["_fileLoadDic"];
	        for (let tKey in dic) {
	            let tAtlasPath = dic[tKey];
	            dic[tKey] = PathUtil.FormatURL(tAtlasPath);
	        }
	    }
	    onfileConfigLoaded() {
	        this.ReformUIAtlasPath();
	        ResourceManager.Instance.LoadJsonFile("unpack.json", this.onUnpackConfigLoaded.bind(this));
	    }
	    onUnpackConfigLoaded(cbParam) {
	        UIMediator.GetInstance().Init(() => {
	            let toloadItem = [];
	            UIMediator.GetInstance().GetResItem(toloadItem);
	            ResourceManager.Instance.LoadResArray(toloadItem, (() => this.onLoaded()).bind(this));
	            let configToloadItem = [];
	            ConfigManager.Instance.getConfig(configToloadItem);
	            ResourceManager.Instance.LoadResArray(configToloadItem, (() => this.onLoaded()).bind(this), configToloadItem[0].type);
	        });
	    }
	    onLoaded() {
	        this.step++;
	        if (this.step < 2)
	            return;
	        ConfigManager.Instance.InitOnLoaded();
	        this.next();
	    }
	    next() {
	        this.facade.registerCommand(NotificationNames.GAME_INIT_COMMAND, GameInitCommand);
	        this.facade.sendNotification(NotificationNames.GAME_INIT_COMMAND);
	    }
	}

	class SubResDownLoader {
	    MonitorDownloadProgress(allDownloadTask, progress) {
	        let curProgressArray = [];
	        let TOTAL_PROGRESS = allDownloadTask.length * 100;
	        for (let index = 0; index < allDownloadTask.length; index++) {
	            let task = allDownloadTask[index];
	            curProgressArray[index] = 0;
	            this.startProgress(task, index, (curIndex, curProgress) => {
	                curProgressArray[curIndex] = curProgress;
	                let curPro = 0;
	                for (let index = 0; index < curProgressArray.length; index++) {
	                    curPro += curProgressArray[index];
	                }
	                if (progress)
	                    progress(curPro, TOTAL_PROGRESS);
	            });
	        }
	    }
	    startProgress(task, index, progress) {
	        task.onProgressUpdate((res) => {
	            if (progress)
	                progress(index, res.progress);
	        });
	    }
	}

	class StartupInitCommand extends puremvc.SimpleCommand {
	    constructor() {
	        super(...arguments);
	        this.loadedCount = 0;
	    }
	    execute(notification) {
	        this.initGameEnging(GameConfig.width, GameConfig.height);
	        this.initScreenMode();
	        Laya.timer.frameLoop(1, null, () => { TimeManager.Instance.update(Laya.timer.delta * 0.001); });
	        this.loadSubPack();
	    }
	    initGameEnging(designWith, designheight) {
	        if (window["Laya3D"])
	            Laya3D.init(designWith, designheight);
	        else
	            Laya.init(designWith, designheight);
	        Laya.URL.exportSceneToJson = GameConfig.exportSceneToJson;
	        Laya.stage.frameRate = Laya.Stage.FRAME_FAST;
	        Laya.alertGlobalError = true;
	    }
	    initScreenMode() {
	        Laya.stage.scaleMode = GameConfig.scaleMode;
	        Laya.stage.screenMode = GameConfig.screenMode;
	        Laya.stage.alignV = GameConfig.alignV;
	        Laya.stage.alignH = GameConfig.alignH;
	    }
	    loadSubPack() {
	        LoadingUIUIController.Instance.Init();
	        LoadingUIUIController.Instance.SetActive(true, null, null, "分包下载...");
	        LoadingUIUIController.Instance.SetLoadingActive(true);
	        let subPackNames = ["sub1"];
	        let wx = Laya.Browser.window.wx;
	        if (wx == null || subPackNames.length == 0) {
	            this.next();
	        }
	        else {
	            let that = this;
	            let wxSubPackLoader = new SubResDownLoader();
	            let allTask = [];
	            for (let index = 0; index < subPackNames.length; index++) {
	                const subPackName = subPackNames[index];
	                const loadTask = wx.loadSubpackage({
	                    name: subPackName,
	                    success: function () {
	                        that.onSubPackLoaded(subPackName, false, subPackNames);
	                    },
	                    fail: function () {
	                        that.onSubPackLoaded(subPackName, true, subPackNames);
	                    }
	                });
	                allTask.push(loadTask);
	            }
	            wxSubPackLoader.MonitorDownloadProgress(allTask, (curProgress, totalProgress) => {
	                if (Laya.Browser.onIPhone && CommonUtil.OnMiniGame()) {
	                    curProgress *= 100;
	                }
	                that.sendNotification(NotificationNames.LoadingUIProgress, curProgress / totalProgress);
	            });
	        }
	    }
	    onSubPackLoaded(loadedSubPack, isFailed, totalSubpack) {
	        if (isFailed) {
	            Log.Debug("加载分包失败!!!!" + loadedSubPack);
	        }
	        else {
	            Log.Debug("加载分包成功!!!!" + loadedSubPack);
	        }
	        this.loadedCount++;
	        if (this.loadedCount == totalSubpack.length) {
	            this.next();
	        }
	    }
	    next() {
	        LoadingUIUIController.Instance.SetActive(true, null, null, "资源下载...");
	        this.facade.registerCommand(NotificationNames.PRELOAD_COMMAND, PreloadCommand);
	        this.facade.sendNotification(NotificationNames.PRELOAD_COMMAND);
	    }
	}

	class Main {
	    constructor() {
	        this.next();
	    }
	    next() {
	        puremvc.Facade.getInstance().registerCommand(NotificationNames.START_UP_INIT_COMMAND, StartupInitCommand);
	        puremvc.Facade.getInstance().sendNotification(NotificationNames.START_UP_INIT_COMMAND);
	    }
	}
	new Main();

}());
//# sourceMappingURL=bundle.js.map
