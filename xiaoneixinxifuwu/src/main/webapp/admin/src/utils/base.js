const base = {
    get() {
        return {
            url : "http://localhost:8080/xiaoneixinxifuwu/",
            name: "xiaoneixinxifuwu",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/xiaoneixinxifuwu/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "校内信息服务发布系统"
        } 
    }
}
export default base
