<template>
  <div class="resume">
    <b-container>
      <h1 class="title">Resume</h1>
      <div class="resume-section">
        <h2>About</h2>
        <div class="ml-1 mb-4">
          A Software Engineer / Data Scientist with a customer centric approach.
          Experienced with implementing products and application enhancements from idea to execution for software development projects.
        </div>
      </div>
      <div class="resume-section">
        <h2>Experience</h2>
        <ResumeEntity
          v-for="(company, index) in experience"
          :key="`company-${index}`"
          :entityDetails="company" 
        />
      </div>
      <div class="resume-section">
        <h2>Education</h2>
          <ResumeEntity
            v-for="(institution, index) in education"
            :key="`institution-${index}`"
            :entityDetails="institution" 
          />
      </div>
    </b-container>
  </div>
</template>
<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator'
  import ResumeEntity from '@/components/resume/ResumeEntity.vue'

  import { Entity } from '@/fixtures/resume'
  import { experience, education } from '@/assets/resume'

  @Component({
    components: {
      ResumeEntity,
    }
  })
  export default class Resume extends Vue{
    experience: Entity[] = experience
    education: Entity[] = education
  }
</script>
<style lang="scss" scoped>
  .title {
    text-align: center;
  }
  .resume-section {
    margin-bottom: 1.5rem;
    border-bottom: 1px solid #e3e3e3;
    &:last-child {
      margin-bottom: 0rem;
    }
  }
  h2 {
    margin-bottom: 1rem
  }
</style>