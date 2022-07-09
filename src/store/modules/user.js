// 用户

// 接口
import Login from '../../api/user'
// 本地
import Storage from '../../utils/storage'

// 统一改值
const TOKEN_KEY = 'token' // token

export default {
  namespaced: true,
  state: {
    token: Storage.getItem(TOKEN_KEY) || ''
  },
  mutations: {
    // 登录
    Login(state, token) {
      state.token = token
      Storage.setItem(TOKEN_KEY, token)
    }

  },
  actions: {
    // 登录
    async getLogin({ commit }, playout) {
      try {
        const response = await Login.getLogin(playout)
        // console.log('登录', response)
        commit('Login', response.token)
      } catch (error) {
        console.log(error)
      }
    },
    // 用户信息
    async getPermissionList({ commit }) {
      try {
        const res = await Login.getPermissionList()
        console.log('vuex用户信息', res)
      } catch (error) {
        console.log(error)
      }
    }
  }
}
