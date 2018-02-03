import Vue from 'vue'
import Vuex, { Store } from 'vuex'

Vue.use(Vuex)

const state = {
    todos: []
}

const getters = {
    todos: state => state.todos
}

const actions = {
    gatherTodos ({ commit }, data) {
        commit('GATHER_TODOS', data)
    },

    deleteTodo ({ commit }, id) {
        commit('DELETE_TODO', id)
    }
}

const mutations = {
    GATHER_TODOS (state, data) {
        state.todos.push(data)
    },

    DELETE_TODO (state, id) {
        state.todos.splice(id, 1)
    }
}

export default new Store({
    state,
    getters,
    actions,
    mutations
})