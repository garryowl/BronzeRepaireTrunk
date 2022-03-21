import { LinkList, LinkListNode } from "./linklist";
import { cbhandler } from "./cbhandler";

//Laya先执行Render再执行timer的update.所以在UI中注册的timer都是在Render之后[List的render]在执行timer
export class TimeManager {
    private static inst: TimeManager;
    private list: LinkList<TimerHandler>;
    private pool: TimerHandler[] = [];
    private key: number;
    private lateupdteList: LinkList<TimerHandler>;
    private speed: number;

    private constructor() {
        this.key = 0;
        this.pool = [];
        this.list = new LinkList<TimerHandler>();
        this.lateupdteList = new LinkList<TimerHandler>();
        this.speed = 1;
    }

    static get Instance(): TimeManager {
        if (!this.inst) {
            this.inst = new TimeManager();
        }
        return this.inst;
    }

    SetSpeed(scale: number) {
        this.speed = scale;
    }

    /**
     * 添加循环
     * @param interval 循环间隔
     * @param delay 延迟开始
     * @param repeat 循环次数, <=0 为无限循环
     * @param cb 回调
     * @param is_updater 设置true:update无效循环. false:按照delay,repeate参数循环 
     */
    add(interval: number, delay: number, repeat: number, cb: cbhandler, is_updater: boolean = false): number {
        let timerHandler: TimerHandler = this.pool.length > 0 ? this.pool.pop() : null;
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

    remove(key: number) {
        let timerHandler: TimerHandler = this.list.remove(key);
        if (timerHandler) {
            this.pool.push(timerHandler);
        }
    }

    /**
     * 间隔循环
     * @param interval 循环间隔
     * @param cb 回调
     */
    loop(interval: number, cb: cbhandler): number {
        return this.add(interval, 0, 0, cb);
    }

    /**
     * 循环次数
     * @param interval 循环间隔
     * @param repeat 循环次数 <=0为无限循环
     * @param cb 
     */
    loopTimes(interval: number, repeat: number, cb: cbhandler): number {
        return this.add(interval, 0, repeat, cb);
    }

    lowframeLoop(cb: cbhandler): number {
        return this.add(1 / 24, 0, 0, cb);
    }
    /**
     * 延迟循环
     * @param interval 
     * @param delay 循环开始的延迟
     * @param cb 
     */
    delayLoop(interval: number, delay: number, cb: cbhandler): number {
        return this.add(interval, delay, 0, cb);
    }
    /**
     * 单次循环
     * @param delay 
     * @param cb 
     */
    once(delay: number, cb: cbhandler): number {
        return this.add(0, delay, 1, cb);
    }

    nextFrame(delay: number, cb: cbhandler) {
        Laya.timer.frameOnce(delay, null, () => {
            cb.exec()
        })
        // return this.add(0, delay, 1, cb);
    }
    /**
     * 添加到Update
     * @param cb 
     */
    addUpdater(cb: cbhandler): number {
        return this.add(0, 0, 0, cb, true);
    }

    update(dt: number) {
        dt *= this.speed;
        if (!this.list.head) {
            return;
        }
        let node: LinkListNode<TimerHandler> = this.list.head;
        while (node) {
            node.data.elapsed += dt; //放在末尾, 执行会完一帧.

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
                node.data.elapsed = node.data.delay//node.data.delay - dt;
                //todo fix:在timer回调函数里先remove，再add一个定时器，复用data会导致times和elpased马上被修改
                node.data.cb.exec();
            }

            //todo  next = node.next
            //node.data.elapsed += dt; //放在末尾, 执行会完一帧.
            node = node.next;
        }
    }

    /**
     * 添加到lateupdate
     * @param cb 
     */
    add_lateupdater(cb: cbhandler): number {
        return this.addLate(0, 0, 0, cb, true);
    }

    addLate(interval: number, delay: number, repeat: number, cb: cbhandler, is_updater: boolean = false): number {
        let timerHandler: TimerHandler = this.pool.length > 0 ? this.pool.pop() : null;
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

    removeLate(key: number) {
        let timerHandler: TimerHandler = this.lateupdteList.remove(key);
        if (timerHandler) {
            this.pool.push(timerHandler);
        }
    }

    lateupdate() {
        if (!this.lateupdteList.head) {
            return;
        }

        let node: LinkListNode<TimerHandler> = this.lateupdteList.head;
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

type TimerHandler = {
    interval: number;    //执行间隔, 只执行一次的定时器值为0，单位秒
    delay: number;       //延时多久执行，单位秒
    repeat: number;      //要执行多少次，0表示无限次
    elapsed: number;     //已过去的时间
    times: number;       //已执行次数
    is_updater: boolean; //是否每帧调用
    cb: cbhandler;         //回调函数
}