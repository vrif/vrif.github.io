<template>
  <div class="portfolio-container">
    <b-card 
      v-for="(entrys, index) in portfolioData" :key="index"
      class="portfolio-card"
      align="left"
      :style="{
        opacity: `${loading ? 0 : 1 }`,
        transform: `${loading ? 'translateY(2em)' : 'translateY(0)' }`,
        transition: 
          `opacity 700ms ease ${index*.15}s,
          transform 350ms ease ${index*.15}s`
      }"
    >
      <b-card-body class="p-0">
        <b-card-title>{{entrys.name}}</b-card-title>
        <hr />
        <b-badge 
          v-for="(tag, index2) in entrys.tags" :key="index2"
          class="mb-1 p-1"
          :variant="badgeColor(tag)"
        > 
          {{tag}} 
        </b-badge>
        <b-card-text class="mb-2">
          <strong>Description:</strong> {{entrys.topics}}
        </b-card-text>
        <b-card-text>
          <strong>Tools:</strong> {{entrys.tools}}
        </b-card-text>
      </b-card-body>

      <template #footer>
        <b-row>
          <b-col
            v-for="(link, index3) in entrys.links" :key="`${index}-${index3}`"
          >
            <b-button 
              :href="link.url"
              @click.stop.prevent="newTab"
              size="sm"
              variant="dark"
              block
            >
              <b-icon icon="github"></b-icon> {{link.name ? link.name : `Repo`}}
            </b-button>
          </b-col>
        </b-row>
      </template>
    </b-card>
    <h5
      v-if="portfolioData.length === 0"
      class="text-muted"
    >
    None...
    </h5>
  </div>
</template>
<script lang="ts">
  import { Component, Prop, Vue } from 'vue-property-decorator'
  import HelperMethods from '@/mixins/helper-methods'
  import { Portfolio } from '@/fixtures/portfolio'

  @Component({
    mixins: [HelperMethods]
  })    
  export default class PortfolioCard extends Vue {
    @Prop()
    private portfolioData!: Portfolio

    private loading = true

    private badgeColor(tagName: string): string {
      switch (tagName) {
        case "Software Engineering":
          return "warning"
        case "Data Science":
          return "info"
        default:
          return "secondary"
      }
    }

    created(): void {
      console.log(this.loading)
    }

    mounted(): void {
      this.loading = false
    }
  }
</script>
<style lang="scss">
  .portfolio-container {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: flex-start;
  }
  .portfolio-card {
    width: 30rem;
    height: auto;
    display: flex;
    margin-bottom: 1.5rem;
    &-blank {
      @extend .portfolio-card;
      border: none;
    }
    &:hover {
      box-shadow: 0 0 10px 0 grey;
      z-index: 50;
    }
  }
  .portfolio-card-body {
    margin-top: auto;
  }
</style>
