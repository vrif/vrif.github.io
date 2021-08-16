<template>
  <div id="footer">
    <b-container>
      <hr />
      <b-icon icon="github" />
      <b-icon icon="linkedin" />
    </b-container>
  </div>
</template>
<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator'

  @Component
    export default class Footer extends Vue{}
</script>
<style lang="scss">
  .icon-footer {
    width: 2rem;
  }
</style>