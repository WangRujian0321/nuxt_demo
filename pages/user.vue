<template>
<div>
  <h3>用户</h3>
</div>
</template>

<script>
export default {
  name: "user",
  middleware({store, route, redirect, params, query}){
    // 组件独享的前置守卫
    // console.log('middleware 组件独享守卫')
    // redirect('/login')
  }
}
</script>

<style scoped>

</style>
