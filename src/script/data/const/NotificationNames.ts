/*
* name;
*/
export class NotificationNames {
	//UI
	static OPENUI: string = "OPENUI";   												//打开UI
	static OPENUIWITHPARAM: string = "OPENUIWITHPARAM";									//打开ui带参数
	static HIDEUI: string = "HIDEUI"; 													//隐藏UI
	static HIDEALLUI: string = "HIDEALLUI";												//隐藏所有UI
	static DESTROYUI: string = "DESTROYUI";												//销毁UI
	static DESTROYALLUI: string = "DESTROYALLUI";										//销毁所有UI

	//COMMAND
	static START_UP_INIT_COMMAND: string = "START_UP_INIT_COMMAND"; 					//游戏启动初始化
	static CHECK_VERSION_COMMAND: string = "CHECK_VERSION_COMMAND"; 					//laya 版本管理
	static RES_HOTUPDATE_COMMAND: string = "RES_HOTUPDATE_COMMAND";  					//微信资源热更新
	static PRELOAD_COMMAND: string = "PRELOAD_COMMAND";  								//游戏启动资源预加载
	static GAME_INIT_COMMAND: string = "GAME_INIT_COMMAND";								//游戏初始化
	static GET_PLATFORM_AUTH_COMMAND: string = "GET_PLATFORM_AUTH_COMMAND";				//平台预授权,之后才能获取平台数据
	static INIT_PLATFORM_INFO_COMMAND: string = "INIT_PLATFORM_INFO_COMMAND"; 			//游戏平台相关信息初始化
	static NETWORK_GAME_LOG_IN_COMMAND: string = "NETWORK_GAME_LOG_IN_COMMAND"; 		//网路游戏初始化
	static ENTER_LOGIN_SCENE_COMMAND: string = "ENTER_LOGIN_SCENE_COMMAND"; 			//登录主界面

	//输入
	static InputEvent: string = "InputEvent";	//屏幕Input事件
	//UI消息
	static LoadingUIProgress: string = "LoadingUIProgress";	 //ui加载进度

	static CalibrationCorrect: string = "CalibrationCorrect";	 //校准正确
	public static NEXT_STAGE:string="NEXT_STAGE";
	public static RESTART_GAME:string="RESTART_GAME";
	
}