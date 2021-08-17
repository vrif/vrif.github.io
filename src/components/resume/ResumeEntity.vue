<template>
  <div class="ml-1 mb-4">
    <h4><span class="font-weight-bold">{{ entityDetails.name }}</span></h4>
    <ResumePosition 
      v-for="(position, index) in entityDetails.position"
      :key="`position-${index}`"
      :positionDetails="position" 
    />
  </div>
  </template>
<script lang="ts">
  import { Component, Prop, Vue } from 'vue-property-decorator'
  import ResumePosition from '@/components/resume/ResumePosition.vue'

  import { Entity } from '@/fixtures/resume'

  @Component({
    components: {
      ResumePosition,
    }
  })

  export default class ResumeEntity extends Vue{
    @Prop()
    private entityDetails!: Entity
  }
</script>
