<template>
  <div>
    Hey there partner {{todos}}
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { mapMutations } from 'vuex'

@Component({
  components: {},
  computed: {
    todos () {
      return this.$store.state.todos.list
    }
  },
})

export default class TestHome extends Vue {}

</script>
