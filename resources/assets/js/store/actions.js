import axios from 'axios'
import * as types from './mutation-types'

export const getTask = ({ commit }) => {
  axios.get('http://589c33e2e85b861200daac18.mockapi.io/api/v1/tasks')
    .then((res) => {
      commit(types.GET_TASK, res.data)
    })

    .catch(err => {
      throw err
    })
}

export const addTask = ({ commit }, data) => {
  axios.post('http://589c33e2e85b861200daac18.mockapi.io/api/v1/tasks', data)
    .then((res) => {
      commit(types.ADD_TASK, res.data)
    })

    .catch(err => {
      throw err
    })
}

export const delTask = ({ commit }, data) => {
  axios.delete('http://589c33e2e85b861200daac18.mockapi.io/api/v1/tasks/' + data)
    .then((res) => {
      commit(types.DEL_TASK, res)
    })

    .catch(err => {
      throw err
    })
}