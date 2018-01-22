<template>
    <div class="container">
        <div class="column">
            <div class="field">
                <label for="" class="label">
                    Task
                </label>
                <div class="control">
                    <input v-model="task" type="" class="input" placeholder="Insert a task"
                    @keydown="addTodo">
                </div>
            </div>
        </div>

        <div class="divider">
        </div>

        <div class="column">
            <!-- <ul class="item-list">
                <li class="list" v-for="(i, keys) in todos" :key="keys">
                  {{ i.text }}

                  <div class="close" @click="deleteItem(i.id)">
                    &times;
                  </div>
                </li>
            </ul> -->
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  computed: {
    ...mapGetters([
      'todos'
    ])
  },

  data() {
    return {
      task: '',
      id: 1,
    };
  },

  methods: {
    ...mapActions([
      'submitTodo'
    ]),

    addTodo(e) {
      const self = this
      if (e.keyCode === 13) {
        self.submitTodo('andre')
      }
    },

    deleteItem(id) {
      console.log(id);
    },
  },
};
</script>

