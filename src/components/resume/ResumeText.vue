<template>
  <div class="mb-4">
    <slot></slot>
  </div>
</template>
<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator'

  @Component
  export default class ResumeText extends Vue{}
</script>
<style lang="scss" scoped>
  p {
    margin-bottom: 1rem;
    &:last-child {
      margin-bottom: 0rem;
    }
  }
  p.none {
    margin-bottom: 0rem;
  }
</style>
