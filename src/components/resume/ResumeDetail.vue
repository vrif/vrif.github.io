<template>
  <div class="ml-3 mb-2" >
    <p class="mb-1">{{ projectDetails.title }}</p>
    
    <div class="detail-body">
      <p class="details ml-2 mb-1">
        {{ projectDetails.description }}
      </p>
      <p class="details ml-2 mb-1"><span>Tools: </span>{{ projectDetails.tools }}</p>
      <p
        v-if="projectDetails.url" 
        class="details ml-2 mb-1"
      >
        <span>URL: </span>
        <b-link :href="projectDetails.url">Click Here</b-link>
      </p>
    </div>
  </div>
</template>
<script lang="ts">
  import { Component, Prop, Vue } from 'vue-property-decorator'
  import { Detail } from '@/fixtures/resume'

  @Component
  export default class ResumeDetail extends Vue{
    @Prop()
    private projectDetails!: Detail
  }
</script>
<style lang="scss" scoped>
  p.details {
    font-size: 0.875rem;
  }
  .detail-body {
    border-left: 2px solid #e3e3e3;
    &:hover {
      border-left-color: goldenrod;
    }
  }
</style>