<template>
<div>
  <h3>评论</h3>
  <nuxt-link :to="{name:'goods-comment-uid', params:{uid: 1}, query:{a:123, b123}}">评论1</nuxt-link>
  <nuxt/>
</div>
</template>

<script>
export default {
  name: "comment"
}
</script>

<style scoped>

</style>
