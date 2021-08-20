<template>
  <div class="resume">
    <b-container>
      <h1 class="title">Resume</h1>
      <div class="resume-section">
        <h2>Harry Yau</h2>
        <ResumeText>
          <p class="none">Software Engineer / Data Scientist</p>
          <p class="text-muted">Vancouver, BC, Canada</p>
        </ResumeText>
      </div>
      <div class="resume-section">
        <h2>About</h2>
        <ResumeText>
          <p>
            A Software Engineer / Data Scientist with a customer centric approach.
            Experienced with implementing product and application enhancements from idea to execution for software development projects.
            Have worked in different careers and industries over the years.
          </p>
          <p>
            An advanced user of Vue from working on multiple client engagements that involved application functionality enhancements. 
            Started working with front-end frameworks by converting a a proof of concept application from JQuery to React. 
          </p>
        </ResumeText>
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
      <div class="resume-section">
        <h2>Part Time Courses</h2>
        <ResumeEntity
          v-for="(ptCourse, index) in partTimeCourses"
          :key="`part-time-courses-${index}`"
          :entityDetails="ptCourse" 
        />
      </div>
    </b-container>
  </div>
</template>
<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator'
  import ResumeEntity from '@/components/resume/ResumeEntity.vue'
  import ResumeText from '@/components/resume/ResumeText.vue'

  import { Entity } from '@/fixtures/resume'
  import { experience, education, partTimeCourses } from '@/assets/resume'

  @Component({
    components: {
      ResumeEntity,
      ResumeText,
    }
  })
  export default class Resume extends Vue{
    experience: Entity[] = experience
    education: Entity[] = education
    partTimeCourses: Entity[] = partTimeCourses
  }
</script>
<style lang="scss">
  .title {
    text-align: center;
  }
  .resume-section {
    margin-bottom: 1.5rem;
    border-bottom: 1px solid #e3e3e3;
  }
  h2 {
    margin-bottom: 1rem
  }
</style>