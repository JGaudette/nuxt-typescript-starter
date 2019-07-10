<template>
  <div>
    <HelloWorld />

    <div class='testingjon'>
      asdf
    </div>
  </div>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator'
  import HelloWorld from '~/components/HelloWorld.vue'

  @Component({
    components: {
      HelloWorld
    }
  })

  export default class Home extends Vue {}
</script>


<style type='scss' scoped>
  .testingjon{
    color: red;
  }
</style>
