<template>
  <div>
    <input class='form-control' type="text" v-model="task" @keyup.enter="addingTask()">
  </div>
</template>

<script>
  export default {
    data () {
      return {
        task: ''
      }
    },

    methods: {
      addingTask () {
								axios.post('http://589c33e2e85b861200daac18.mockapi.io/api/v1/tasks', {data: this.task })
										.then(res => {
														console.log(res)
										})
										.catch(err => {
														throw err
										})
						}
    }
  }
</script>