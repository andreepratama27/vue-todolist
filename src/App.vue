<style>
  html,
  body {
    height: 100%;
  }

  body {
    background: tomato;
  }
</style>

<template>
  <div id="app">
    <todolist></todolist>
  </div>
</template>

<script>
import Todolist from './components/Todolist';

export default {
  components: {
    Todolist,
  },
};
</script>
