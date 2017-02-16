export default {

  GET_TASK (state, data) {
    state.tasks = data
  },

  ADD_TASK (state, data) {
    state.tasks.push({task: data.task})
  },

  DEL_TASK (state, data) {
    delete state.tasks[data.id]
    return state.tasks
  }
}