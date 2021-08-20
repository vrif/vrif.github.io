<template>
  <div class="card-entity ml-3 pl-3">
    <div class="mb-2">
      <h5 class="mb-0"><span>{{ summaryDetails.title }}</span></h5>
      <p v-if="summaryDetails.institution">
        <span>{{ summaryDetails.institution }}</span>
      </p>
      <p><span class="text-muted">{{ summaryDetails.duration }}</span></p>
      <p><span v-if="summaryDetails.location" class="text-muted">{{ summaryDetails.location }}</span></p>

      <div v-if="summaryDetails.description">
        <div v-if="summaryDetails.format==='list' || !summaryDetails.format">
          <ul class="mb-0">
            <li
              v-for="(description, index) in summaryDetails.description"
              :key="`description-${index}`"
            >
              {{description}}
            </li>
          </ul>
        </div>
        <div v-else-if="summaryDetails.format==='paragraph'">
          <p class="ml-4">
            {{ summaryDetails.description.join(' ') }}
          </p>
        </div>
      </div>

      <p
        v-if="summaryDetails.url" 
        class="ml-4 mb-1"
      >
        <span>URL: </span><b-link :href="summaryDetails.url">Click Here</b-link>
      </p>

    </div>
    <div 
      v-if="summaryDetails.details"
      class="ml-4"
    >
      <span class="project-title">Project Highlights:</span>
      <ResumeDetail 
        v-for="(details, index) in summaryDetails.details"
        :key="`details-${index}`"
        :projectDetails="details" 
      />
    </div>
  </div>
  </template>
<script lang="ts">
  import { Component, Prop, Vue } from 'vue-property-decorator'
  import ResumeDetail from '@/components/resume/ResumeDetail.vue'

  import { Summary } from '@/fixtures/resume'

  @Component({
    components: {
      ResumeDetail,
    }
  })
  export default class ResumeSummary extends Vue{
    @Prop()
    private summaryDetails!: Summary
  }
</script>
<style lang="scss">
  .card-entity {
    border-left-style: solid;
    border-left-color: #c0d1e2;
    border-left-width: 2px;
    border-radius: 0px;
    &:hover {
      @extend .card-entity;
      border-left-color: goldenrod;
      
    }
  }
  .project-title {
    font-size: 1.125rem;
  }
  p {
    margin-bottom: 0rem;
  }
</style>
