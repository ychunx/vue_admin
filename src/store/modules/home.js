import mockRequest from '@/utils/mockRequest'

const state = {
    homeList: {}
}
const mutations = {
    GETHOMEDATA(state, data) {
        state.homeList = data
    }
}
const actions = {
    async getHomeData({ commit }) {
        let res = await mockRequest.get('/home/list')
        if (res.code == 20000) {
            commit('GETHOMEDATA', res.data)
            return 'ok'
        } else {
            return Promise.reject(new Error('faile'))
        }
    }
}

export default {
    state,
    mutations,
    actions
}