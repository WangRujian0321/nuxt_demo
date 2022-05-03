// 主模块中
// state
export const state=()=>({
  bNav: false,
  // 导航
  bLoading: false
  // 加载
})
// mutations
export const mutations = {
  M_UPDATE_NAV(state, payload) {
    state.bNav = payload
  },
  M_UPDATE_LOADING(state, payload){
    state.bLoading = payload
  }
}

export const actions = {
  nuxtServerInit(store, context){
    // 初始化东西到store中
    // store实例信息
    //  context服务端上下文信息
    // console.log("nuxtServerInit", store, context)
  }
}

// getters

export const getters = {
  getNav(state){
    return state.bNav ? '显示':'隐藏'
  }
}
