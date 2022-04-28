export default function({$axios, redirect, route, store}) {
    // 基本设置
    $axios.defaults.timeout = 10000;
    
    // 请求拦截
    $axios.onRequest(config=>{
        console.log("请求拦截")

        // config.header.token = "加token"

        return config
    })

    // 响应拦截
    $axios.onResponse(res=>{
        if(res.data.err === 2 && route.fullPath !== "/login"){
            redirect('/login?path='+route.fullPath);
        }
        return res;
    })
    // 错误处理
    $axios.onError(error=>{
        return error;
    })
}