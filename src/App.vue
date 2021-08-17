<template>
  <div id="app">
    <NavBar />
    <transition name="fade">
      <router-view/>
    </transition>
  </div>
</template>
<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator'

  import NavBar from '@/components/NavBar.vue'

  @Component({
    components: {
      NavBar,
    }
  })

  export default class App extends Vue{}
</script>
<style lang="scss">
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: left;
    color: #2c3e50;
  }
  .fade-enter-active, .fade-leave-active {
    transition: opacity 0.5s;
  }
  .fade-enter, .fade-leave-to {
    opacity: 0;
  }
</style>
