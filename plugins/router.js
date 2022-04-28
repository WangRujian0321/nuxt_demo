export default function ({app, redirect, params, query, store}){
  console.log('插件')
  // 页面初次加载或者刷新时运行
  // 可以拿到app实例
  // app.router.beforeEach((to, from, next)=>{
  //   // 全局前置守卫，插件
  //   // next(true)/next(false)
  //   console.log('插件配置 全局守卫')
  //   if(to.name === 'login' || to.name === 'goods'){
  //     next();
  //   } else{
  //     console.log()
  //     redirect({name:'login'});
  //   }
  // })
  app.router.afterEach((to, from) => {
    console.log("插件全局后置守卫")

  })
}
