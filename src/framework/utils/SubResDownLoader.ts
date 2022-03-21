
/*
* name;
*/
export class SubResDownLoader {

    /**
     * 监控下载进度
     * @param allDownloadTask 所有下载任务
     * @param progress 下载进度回调 progress(curPro, TOTAL_PROGRESS)总进度, 目标进度
     */
    public MonitorDownloadProgress(allDownloadTask: any[], progress?: Function) {
        //记录下载进度, 每个task的进度都保存在list, 遍历list统计总进度
        let curProgressArray = [];//当前进度
        let TOTAL_PROGRESS = allDownloadTask.length * 100;//目标进度
        for (let index = 0; index < allDownloadTask.length; index++) {
            let task = allDownloadTask[index];
            curProgressArray[index] = 0;
            this.startProgress(task, index,
                //回调:任务索引, 任务进度
                (curIndex, curProgress) => {
                    curProgressArray[curIndex] = curProgress //记录当前进度
                    //统计总下载进度
                    let curPro = 0;
                    for (let index = 0; index < curProgressArray.length; index++) {
                        curPro += curProgressArray[index];
                    }
                    if (progress) progress(curPro, TOTAL_PROGRESS)
                })
        }
    }

    /**
     * 监听下载任务
     * @param task 下载任务 
     * @param index 任务索引
     * @param progress 下载进度回调 
     */
    private startProgress(task: any, index: number, progress: Function) {
        task.onProgressUpdate((res) => {
            //Log.Debug(index + '下载进度'+ res.progress)
            // Log.Debug('已经下载的数据长度', res.totalBytesWritten)
            // Log.Debug('预期需要下载的数据总长度', res.totalBytesExpectedToWrite)
            //Log.Debug('totaol 下载进度', curProgress / totalProgress)
            if (progress) progress(index, res.progress)
        })
    }
}