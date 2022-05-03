export const state = () => ({
  err:1,
  msg:"未登录",
  token:"",
  data:{},
})

export const mutations = {
  M_UPDATE_USER(user, payload){
    console.log(payload)
    user.err = payload.err;
    user.msg = payload.msg;
    user.token = payload.token;
    user.data = payload.data;
  }
}
export const actions = {
  A_UPDATE_USER({commit, state}, payload){
    // 异步业务
    commit('M_UPDATE_USER', payload)
  }

}
