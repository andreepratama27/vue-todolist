<style>
    html,
    body {
      height: 100%;
    }
    body {
      background:linear-gradient(135deg, #13f1fc 0%,#0470dc 100%);
    }
    .container {
        width: 90%;
        margin: 0 auto;
    }
    label {
        color: #333;
        background-color: #fff;
        border-radius: .4rem;
        width: 4rem;
        margin: 0 auto;
        text-align: center;
        margin-top: .8rem;
    }
    input {
        font-size: 1.2rem !important;
        margin-top: .8rem;
        box-shadow: none !important;
        height: 3.2rem;
        border-radius: .4rem;
        background-color: transparent !important;
        color: #fff !important;
        border: 0 !important;
        border-bottom: 2px solid #fff !important;
        border-radius: 0 !important;
    }
    input::-webkit-input-placeholder {
        color: #fff !important;
        font-weight: lighter;
    }
    input:focus {
        border-color: #fff;
    }
    ul {
        margin: 0 !important;
        padding: 0 !important;
        list-style-type: square;
        display: grid;
        grid-gap: 20px;
        grid-template-columns: 1fr;
    }
    ul li {
        border-radius: .4rem;
        height: 3.2rem;
        display: grid;
        grid-template-columns: 1fr auto;
        align-items: center;
        padding: 0 15px;
        background-color: #fff;
        color: #333;
        font-size: 1.2rem;
        transition: .3s ease all;
    }

    .content {
      height: 68vh;
      overflow-y: scroll;
    }

    footer {
      text-align: center;
      color: #fff;
    }
</style>

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

        <div class="column content">
          <ul class="item-list">
            <li class="list" v-for="(i, keys) in todos" :key="keys">
              {{ i }}

              <div class="close" @click="deleteItem(keys)">
                &times;
              </div>
            </li>
          </ul>
        </div>

        <footer>
          Build with ☕ by andreepratama27
        </footer>
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

