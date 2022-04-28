<template>
  <div>
  <app-header/>
<!--    展示区 类似于router_view-->
    <nuxt></nuxt>
  </div>
</template>

<script>
import AppHeader from "~/layouts/app-header";
export default {
  name: "default",
  components: {AppHeader},
  // middleware: 'auth', //布局层级的中间件定义。使用auth

  // console.log("middleware 全局路由守卫");
  // redirect('/login')
  middleware({store, route, redirect, params, query}){
    // console.log("middleware 全局路由守卫");
    // redirect('/goods')
    console.log('inner middleware')
  },
}
</script>

<style scoped>

</style>
