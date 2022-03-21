
import { NotificationNames } from "./script/data/const/NotificationNames";
import { StartupInitCommand } from "./script/commands/StartupInitCommand";

class Main {
	constructor() {
		this.next();
	}

	private next() {
		puremvc.Facade.getInstance().registerCommand(NotificationNames.START_UP_INIT_COMMAND, StartupInitCommand);
		puremvc.Facade.getInstance().sendNotification(NotificationNames.START_UP_INIT_COMMAND)
	}


}
//激活启动类
new Main();
