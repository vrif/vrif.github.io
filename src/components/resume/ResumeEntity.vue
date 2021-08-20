<template>
  <div class="ml-1 mb-4">
    <h4 v-if="entityDetails.name">
      <span class="font-weight-bold">{{ entityDetails.name }}</span>
    </h4>
    <ResumeSummary 
      v-for="(summary, index) in entityDetails.summary"
      :key="`summary-${index}`"
      :summaryDetails="summary" 
    />
  </div>
  </template>
<script lang="ts">
  import { Component, Prop, Vue } from 'vue-property-decorator'
  import ResumeSummary from '@/components/resume/ResumeSummary.vue'

  import { Entity } from '@/fixtures/resume'

  @Component({
    components: {
      ResumeSummary,
    }
  })

  export default class ResumeEntity extends Vue{
    @Prop()
    private entityDetails!: Entity
  }
</script>
