<template>
  <div class="ml-3 mb-2" >
    <p class="mb-1">{{ projectDetails.title }}</p>
    
    <div class="detail-body">
      <!-- <p class="details ml-2 mb-1">
        {{ projectDetails.description.join(" ") }}
      </p> -->
      <ul class="details">
        <li v-for="(bulletPoint, index) in projectDetails.description" :key="index">
          {{ bulletPoint }}
        </li>
      </ul>     
      <p class="details ml-2 mb-1"><span>Tools: </span>{{ projectDetails.tools }}</p>
      <p
        v-if="projectDetails.url" 
        class="details ml-2 mb-1"
      >
        <span>URL: </span>
        <b-link :href="projectDetails.url" @click.stop.prevent="newTab">Click Here</b-link>
      </p>
    </div>
  </div>
</template>
<script lang="ts">
  import { Component, Prop, Vue } from 'vue-property-decorator'
  import { Detail } from '@/fixtures/resume'

  import HelperMethods from '@/mixins/helper-methods'

  @Component({
    mixins: [HelperMethods]
  })
  export default class ResumeDetail extends Vue{
    @Prop()
    private projectDetails!: Detail
  }
</script>
<style lang="scss">
  .details {
    font-size: 0.875rem;
  }
  ul.details {
    list-style-type: square;
    margin: 0;
    padding-left: 1.5rem;
  }
  .detail-body {
    border-left: 2px solid #e3e3e3;
    &:hover {
      border-left-color: goldenrod;
    }
  }
</style>