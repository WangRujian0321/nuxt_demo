### 安装
npx-create-nuxt-app xx

### 开发
npm run dev

### 打包
npm run build
npm run start

### 生命周期
nextServerInit

middleware
// 中间件执行流程顺序
nuxt.config.js -> 匹配布局 -> 匹配页面
属于服务端钩子，只能获得服务端的信息。

validate
参数校验，校验失败，则会自动跳转到错误页面


vuex使用方式
模块方式 store目录下每个js文件都会被转换为状态树，index是根模块

classic方式 store/index.js创建vuex.store方法 不建议使用



