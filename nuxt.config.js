export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  mode: "universal",
  head: {
    title: 'test1',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  router:{
    middleware : "auth",
    // 扩展路由
    extendRoutes(routes, resolve){
      routes.push({
        name: 'root',
        path: '/index',
        component: resolve(__dirname, 'pages/index.vue')
      })
    }
  },
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    // 全局样式
    "assets/css/transition.css",
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/router.js',
    {
      src: '~/plugins/axios.js',
      ssr: true // 服务端
    }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios'
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
    proxy: true
  },
  // 定义系统默认loading效果，或者指定一段loading组件
  // loading:{
  //   color: "#399",
  //   height: "5px"
  // },
  loading: '~/components/loading.vue',
  proxy:{
    "/api":{
      target: 'http://localhost:3001', //代理转发地址
      changeOrigin: true,
      pathRewrite:{
        '^/api':""
      }
    }
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
