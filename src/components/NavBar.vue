<template>
  <div id="nav" class="bg-light">
    <b-container>
      <b-navbar toggleable="lg" type="dark" variant="light">

        <b-navbar-toggle target="nav-collapse">
          <template #default="{ expanded }">
            <b-icon v-if="expanded" icon="chevron-bar-up" class="icon-color"></b-icon>
            <b-icon v-else icon="chevron-bar-down" class="icon-color"></b-icon>
          </template>
        </b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item to="/">Home</b-nav-item>
            <b-nav-item to="/resume">Resume</b-nav-item>
            <b-nav-item to="/tech">Tech</b-nav-item>
            <b-nav-item to="/contact">Contact</b-nav-item>
          </b-navbar-nav>
          <b-navbar-nav class="ml-auto">
            <b-nav-item href="https://github.com/vrif/"><b-icon icon="github" class="icon-right" /></b-nav-item>
            <b-nav-item href="https://www.linkedin.com/in/harryyau/"><b-icon icon="linkedin" class="icon-right" /></b-nav-item>
          </b-navbar-nav>
        </b-collapse>

      </b-navbar>
    </b-container>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
  export default class NavBar extends Vue {}
</script>
<style lang="scss">
  #nav {
    position: sticky;
    top: 0;
    z-index: 99;
    box-shadow: 0 1px 5px;
    margin-bottom: 1rem;

    a {
      font-weight: bold;
      color: #2c3e50;

      &.router-link-exact-active {
        color: #42b983;
      }
      &:hover {
        color: #42b983;
      }
    }
  }
  
  .icon-color {
    color: #2c3e50;
  }
  .icon-right {
    width: 2rem;
    height: 2rem;
  }
</style>