<template>
  <div class='col-md-8 col-md-offset-2 todo-container'>
    <inputan></inputan>
    <list></list>
  </div>
</template>

<script>
  import Inputan from './Inputan.vue'
  import List from './List.vue'

  export default {
    components: {
      Inputan,
      List
    }
  }
</script>