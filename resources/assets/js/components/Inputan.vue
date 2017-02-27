<template>
  <div>
    <input class='form-control' type="text" v-model="task" @keyup.enter="addingTask()">
  </div>
</template>

<script>
		import axios from 'axios'
		import { mapActions } from 'vuex'

  export default {
    data () {
      return {
        task: ''
      }
    },

    methods: {
						...mapActions([
								'addTask'
						]),

      addingTask () {
								axios.post('http://589c33e2e85b861200daac18.mockapi.io/api/v1/tasks', {task: this.task })
										.then(res => {
														this.addTask(res.data)
										})
										.catch(err => {
														throw err
										})
								this.task = ''
						}
    }
  }
</script>