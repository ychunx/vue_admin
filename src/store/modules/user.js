import { login, logout, getInfo } from '@/api/user'
import { getToken, setToken, removeToken } from '@/utils/auth'
import { resetRouter, asyncRoutes, constantRoutes, anyRoutes } from '@/router'
import router from '@/router'

const getDefaultState = () => {
  return {
    token: getToken(),
    name: '',
    avatar: '',
    routes: [],
    roles: [],
    buttons: [],
    allowAbleRoutes: []
  }
}

// 计算用户被允许进入的异步路由
const getAsyncRoutes = (asyncRoutes, routes) => {
  return asyncRoutes.filter(item => {
    if (routes.indexOf(item.name) != -1) {
      // 递归全部
      if (item.children && item.children.length) {
        item.children = getAsyncRoutes(item.children, routes)
      }
      return true
    }
  })
}

const state = getDefaultState()

const mutations = {
  RESET_STATE: (state) => {
    Object.assign(state, getDefaultState())
  },
  SET_TOKEN: (state, token) => {
    state.token = token
  },
  SET_USERINFO: (state, userInfo) => {
    state.name = userInfo.name
    state.avatar = userInfo.avatar
    state.routes = userInfo.routes
    state.roles = userInfo.roles
    state.buttons = userInfo.buttons
  },
  SET_ALLOWABLEROUTES: (state, res) => {
    state.allowAbleRoutes = constantRoutes.concat(res, anyRoutes)
    // 添加被允许的路径给路由（不能给全部路由，因为本来就有常量路由，会重复）
    router.addRoutes(res.concat(anyRoutes))
  }
}

const actions = {
  async login({ commit }, userInfo) {
    const { username, password } = userInfo
    const res = await login({ username: username.trim(), password: password })
    if (res.code === 20000) {
      commit('SET_TOKEN', res.data.token)
      setToken(res.data.token)
      return 'ok'
    } else {
      return Promise.reject(new Error('faile'))
    }
  },

  async getInfo({ commit, state }) {
    const res = await getInfo(state.token)
    if (res.code === 20000 && res.data) {
      commit('SET_USERINFO', res.data)
      commit('SET_ALLOWABLEROUTES', getAsyncRoutes(asyncRoutes, res.data.routes))
      return 'ok'
    } else {
      return Promise.reject(new Error('faile'))
    }
  },

  async logout({ commit, state }) {
    const res = await logout(state.token)
    if (res.code === 20000) {
      removeToken() // must remove  token  first
      resetRouter()
      commit('RESET_STATE')
      return 'ok'
    } else {
      return Promise.reject(new Error('faile'))
    }
  },

  resetToken({ commit }) {
    return new Promise(resolve => {
      removeToken() // must remove  token  first
      commit('RESET_STATE')
      resolve()
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
