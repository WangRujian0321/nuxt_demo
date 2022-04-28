export default ({store, route, redirect, params, query, req, res})=>{
  // 全局守卫业务， 可以使用context信息获得服务端上下文
  // 可以进行强制跳转，充当路由守卫的功能
  // console.log("middleware 全局路由守卫");
  // redirect('/login')
}
