import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const state={
	selectedIndex:'/home/JingXuan'
}
const getters={
	GET_SELECTED_INDEX(state){
		return state.selectedIndex;
	}
}
const mutations={
	SET_SELECTED_INDEX(state,content){
		state.selectedIndex=content;
	}
}
const actions={
	select_Index({commit},content){
		commit('SET_SELECTED_INDEX',content)
	}
}

export default new Vuex.Store({
	state,
	getters,
	mutations,
	actions
})