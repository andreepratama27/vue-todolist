<style>
  .hide {
    display: none;
  }
</style>
<template>
  <div>
    <div v-if="!isLoading">loading</div>
    <ul class='list-data'>
      <li v-for="i in tasks">
        <div class='list-text'>
            {{ i.task }}
        </div>
        <div class='list-delete'>
            <div class='delete-btn'>
                <i class='fa fa-trash' @click="this.delTask(i.id)"></i>
            </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
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