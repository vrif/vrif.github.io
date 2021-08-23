<template>
  <div class="card-entity ml-3 pl-3">
    <div class="mb-2">
      <h5 class="mb-0"><span>{{ summaryDetails.title }}</span></h5>
      <p v-if="summaryDetails.institution">
        <span>{{ summaryDetails.institution }}</span>
      </p>
      <p v-if="summaryDetails.duration"><span class="text-muted">{{ summaryDetails.duration }}</span></p>
      <p><span v-if="summaryDetails.location" class="text-muted">{{ summaryDetails.location }}</span></p>

      <!-- Mooc -->
      <p v-if="summaryDetails.issued" class="text-muted">Issued {{ summaryDetails.issued}} &#183; 
        <span v-if="summaryDetails.expiry"> Expires {{ summaryDetails.expiry}}</span>
        <span v-else>No Expiration Date</span>
      </p>
      <p v-if="summaryDetails.credentialId"><span class="text-muted">Credential ID: {{summaryDetails.credentialId}}</span></p>
      <p v-if="summaryDetails.credentialUrl">
        <span class="text-muted">Credential Url: </span><b-link :href="summaryDetails.credentialUrl" @click.stop.prevent="newTab">Click Here</b-link>
      </p>
      <!-- -->

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
        <span>Url: </span><b-link :href="summaryDetails.url" @click.stop.prevent="newTab">Click Here</b-link>
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
  
  import { Summary, MOOCSummary } from '@/fixtures/resume'

  import HelperMethods from '@/mixins/helper-methods'

  @Component({
    components: {
      ResumeDetail,
    },
    mixins: [HelperMethods]
  })
  export default class ResumeSummary extends Vue{
    @Prop()
    private summaryDetails!: Summary | MOOCSummary
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
