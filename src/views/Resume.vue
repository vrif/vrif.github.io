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
          <p v-for="(paragraph, index) in about" :key="index">
            {{ paragraph.join(" ") }}
          </p>
        </ResumeText>
      </div>
      <div class="resume-section">
        <h2>Skills</h2> 
        <ResumeText>
          <p v-for="(bulletPoint, index) in skills" :key="index" class="none">
            {{bulletPoint}}
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
  import { experience, education, partTimeCourses, about, skills } from '@/assets/resume'

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
    about: string[][] = about
    skills: string[] = skills
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