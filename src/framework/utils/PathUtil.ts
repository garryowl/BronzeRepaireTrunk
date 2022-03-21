
export default class PathUtil {


    /**
     * 从Object中获取url string
     * getUrlFromObj
     * @param urlObject 
     */
    public static GetUrlFromObj(urlObject: any): string {
        return urlObject.url ? urlObject.url : urlObject
    }

    /**
     * 检测url是否添加了http路径头
     * @param urlToCheck 
     */
    public static IsUrlFormated(urlToCheck: any): boolean {
        return true;
    }

    /**
     * 添加http头
     * @param url 需要添加http头的地址
     */
    public static FormatURL(url: any): any {
        if (this.IsUrlFormated(url)) return url;
        return url
    }

    public static FormatURLArray(urls: any[]): any[] {
        let urllist = []
        for (let index = 0; index < urls.length; index++) {
            let element = urls[index];
            urllist.push(this.FormatURL(element))
        }
        return urllist;
    }

    /**
     * 去除url中添加的http头
     * @param url 
     */
    public static ReformatURL(url: any): any {
        if (!this.IsUrlFormated(url)) return url; //本身没有添加http头 直接返回
        return url

    }
    public static ReformatURLArray(urls: any[]): any[] {
        let urllist = []
        for (let index = 0; index < urls.length; index++) {
            let element = urls[index];
            urllist.push(this.ReformatURL(element))
        }
        return urllist;
    }



}