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
    token: Storage.getItem(TOKEN_KEY) || '',
    name: '',
    email: ''
  },
  mutations: {
    // 登录
    Login(state, token) {
      state.token = token
      Storage.setItem(TOKEN_KEY, token)
    },
    // 邮箱
    userEmail(state, userEmail) {
      state.email = userEmail
    },
    // 名字
    userName(state, userName) {
      state.name = userName
    }

  },
  actions: {
    // 登录
    async getLogin({ commit }, playout) {
      try {
        const { data } = await Login.getLogin(playout)
        console.log('登录', data)
        commit('Login', data.token) // token
        // console.log(data.userEmail, ' 邮箱')
        // console.log(data.userName, '名字')
        commit('userEmail', data.userEmail) // 邮箱
        commit('userName', data.userName) // 名字
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
