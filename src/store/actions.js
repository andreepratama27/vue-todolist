import * as types from './mutation-types';

export const gatherTodos = ({ commit, data }) => {
  commit(types.GATHER_TODOS, data);
};

export const submitTodo = ({ commit, data}) => {
  commit(types.SUBMIT_TODO, data);
};
