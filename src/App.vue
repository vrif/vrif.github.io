<template>
  <div id="app">
    <NavBar />
    <router-view/>
  </div>
</template>
<script lang="ts">
  import { Component, Vue, Watch } from 'vue-property-decorator'
  import { RouteConfig } from 'vue-router'
  import NavBar from '@/components/NavBar.vue'

  @Component({
    components: {
      NavBar,
    }
  })

  export default class App extends Vue{
    @Watch("$route", { immediate: true })
    public onRouteChange(to: RouteConfig): void {
        document.title = to.meta && to.meta.title || "Harry's Portfolio"
    }
  }
</script>
<style lang="scss">
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: left;
    color: #2c3e50;
  }
</style>
