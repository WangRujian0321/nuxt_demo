<template>
  <div>
    <h3>详情页</h3>
  </div>
</template>

<script>
export default {
  name: "_id",
  validate({params, query}){
    return typeof params.id === "number"
  },
  transition:'testAnimation'
}
</script>

<style scoped>

</style>
