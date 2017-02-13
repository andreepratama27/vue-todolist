<template>
  <div>
    <input class='form-control' type="text" v-model="task" @keyup.enter="addTask()">
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
      addTask () {
        this.$store.dispatch('addTask', { task: this.task })
        this.task = ''
      }
    }
  }
</script>