<template>
  <div class="card-entity ml-3 pl-3">
    <div class="mb-2">
      <h5 class="mb-0"><span>{{ positionDetails.title }}</span></h5>
      <p><span class="text-muted">{{ positionDetails.duration }}</span></p>
      <p><span v-if="positionDetails.location" class="text-muted">{{ positionDetails.location }}</span></p>
      <ul v-if="positionDetails.description" class="mb-0">
        <li
          v-for="(description, index) in positionDetails.description"
          :key="`description-${index}`"
        >
          {{description}}
        </li>
      </ul>
    </div>
    <div 
      v-if="positionDetails.details"
      class="ml-4"
    >
      <span class="project-title">Project Highlights:</span>
      <ResumeDetail 
        v-for="(details, index) in positionDetails.details"
        :key="`details-${index}`"
        :projectDetails="details" 
      />
    </div>
  </div>
  </template>
<script lang="ts">
  import { Component, Prop, Vue } from 'vue-property-decorator'
  import ResumeDetail from '@/components/resume/ResumeDetail.vue'

  import { Position } from '@/fixtures/resume'

  @Component({
    components: {
      ResumeDetail,
    }
  })
  export default class ResumePosition extends Vue{
    @Prop()
    private positionDetails!: Position
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
    margin-bottom: 0px;
  }
</style>
