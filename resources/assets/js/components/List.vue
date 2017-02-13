<style>
  .hide {
    display: none;
  }
</style>
<template>
  <div>
    <div v-if="!isLoading">loading</div>
    <ul class='list-data'>
      <li v-for="i in tasks" @click="delTask(i.id)">
        {{ i.task }}
      </li>
    </ul>
  </div>
</template>

<script>
  import axios from 'axios'
  import { mapGetters, mapActions } from 'vuex'

  export default {
    created () {
      this.getTask()
    },

    beforeUpdate () {
      this.isLoading = true
    },

    updated () {
      this.isLoading = false
    },

    data () {
      return {
        isLoading: false
      }
    },

    computed: {
      ...mapGetters([
        'tasks'
      ])
    },

    methods: {
      ...mapActions([
        'getTask'
      ]),

      delTask(id) {
        this.$store.dispatch('delTask', id)
      }
    }
  }
</script>