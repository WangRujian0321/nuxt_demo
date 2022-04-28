<template>
  <div class="container">
    <h3>首页</h3>
    <div>
      <h3>同域资源</h3>
      <p>{{title}}</p>
    </div>
    <div>
      <h3>跨域资源</h3>
      <p>{{subtitle}}</p>
    </div>
  </div>
</template>
<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-content: center;
}
</style>
<script>
// import data from "~/static/data/list.json"
export default {
  name: 'IndexPage',
  async asyncData({$axios}) {
    let res = await $axios({url: '/data/list.json'});
    // console.log('res',res.data)
    let res1 = await $axios({url:'/api/test.json'});
    console.log('res', res.data);
    console.log('res1', res1.data)
    return {
      title:res.data.title,
      subtitle:res1.data.title
    }
  },
  async fetch({$axios}){
    // let res = await $axios({url: '/data/list.json'});
    // console.log('res',res.data)
  }
}
//   // SSR 服务端运行的钩子，不能获得window对象，服务端的this指向undifined，但能够获得服务端上下文context
//   middleware () {
//     console.log('Index page middleware')
//   },
//
//   validate ({ params, query }) {
//     // 所携带参数的校验,完成所谓校验业务，返回真假表现校验结果
//
//     console.log('validate!')
//     return true
//   },
//   // 读数据返回给组件
//   asyncData (context) {
//     // 异步业务逻辑，读取服务端数据
//     console.log('async data')
//     return {
//       b:2,
//     }
//   },
//   // 读数据，返回vuex
//   fetch ({ store }) {
//     // 异步业务逻辑，返回服务端数据提交给vuex
//     console.log('fetch')
//
//   },
//
//   data(){
//     return {
//       a: 1,
//     }
//   },
//
//   // SSR & CSR
//   // 会同时运行在服务端和客户端
//   beforeCreate() {
//     console.log('beforeCreate')
//   },
//
//   created() {
//     console.log('created')
//   },
//
//   // CSR 运行在客户端的钩子， 可以拿到window，this指向组件，不能拿到context
//   beforeMount() {},
//   mounted() { console.log('mounted!') },
//   beforeUpdate() {},
//   updated() { console.log('updated!')},
//   beforeDestroy() {},
//   destroyed() {},
//
//   // 服务端渲染失活，不存在
//   activated() {console.log('activated!')},
//   deactivated() {}
// }
</script>
