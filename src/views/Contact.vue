<template>
  <div class="contact">
    <b-container>
      <h1>Contact</h1>
      <h2>
        You may reach me on 
        <b-link href="https://www.linkedin.com/in/harryyau/" @click.stop.prevent="newTab"><b-icon icon="linkedin" /></b-link>
      </h2>
    </b-container>
  </div>
</template>
<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator'
  import HelperMethods from '@/mixins/helper-methods'

  @Component({
    mixins: [HelperMethods]
  })
  export default class Contact extends Vue{}
</script>
<style lang="scss">
  .contact {
    text-align: center;
  }
  a {
    font-weight: bold;
    color: #0073b1;

    &:hover {
      color: #0a66c2;
    }
  }
</style>
