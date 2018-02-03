<template>
    <div class="container">
        <div class="column">
            <div class="field">
                <label for="" class="label">Task</label>
                <div class="control">
                    <input v-model="task" type="" class="input" placeholder="Insert a task"
                    @keydown="addTodo">
                </div>
            </div>
        </div>

        <div class="divider">
        </div>

        <div class="column">
          <ul class="item-list">
            <li class="list" v-for="(i, keys) in todos" :key="keys">
              {{ i }}

              <div class="close" @click="deleteItem(keys)">
                &times;
              </div>
            </li>
          </ul>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  data() {
    return {
      task: '',
      id: 1,
    };
  },

  computed: {
    ...mapGetters([
      'todos'
    ])
  },

  methods: {
    ...mapActions([
      'gatherTodos',
      'deleteTodo'
    ]),

    addTodo(e) {
      if (e.keyCode === 13) {
        this.gatherTodos(this.task)
        this.task = ''
      }
    },

    deleteItem(id) {
      this.deleteTodo(id)
    }
  },
};
</script>

