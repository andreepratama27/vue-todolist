export default {
  'GATHER_TODOS'(state, data) {
    state.todos = data;
  },

  'SUBMIT_TODO'(state, data) {
    state.todos.push(data);
  },
};
