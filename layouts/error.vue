<template>
  <div>
    <h3 v-if="error.statusCode">页面不存在!</h3>
    <h3 v-else>应用发送异常</h3>
    <button @click="$router.replace('/')">跳转到首页</button>
  </div>
</template>

<script>
export default {
  name: "error",
  // 默认传输错误信息 error:{statusCode, message}
  props:['error'],
}
</script>

<style scoped>

</style>
