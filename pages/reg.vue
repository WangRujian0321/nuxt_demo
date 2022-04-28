<template>
<div>
  <h3>注册</h3>
</div>
</template>

<script>
export default {
  name: "reg",
  // 使用beforeRouteLeave完成组件独享的内部后置首位
  beforeRouteLeave(to, from, next){
    let bl = window.confirm("是否要离开！");
    next(bl);
  }
}
</script>

<style scoped>

</style>
