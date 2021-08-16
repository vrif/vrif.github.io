<template>
  <b-container class="portfolio-container">
    <b-card 
      v-for="(entrys, index) in portfolioData" :key="index"
      class="portfolio-card"
      align="left"
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
  </b-container>
</template>
<script lang="ts">
  import { Component, Prop, Vue } from 'vue-property-decorator'
  import { Portfolio } from '@/fixtures/portfolio'

  @Component    
  export default class PortfolioCard extends Vue {
    @Prop()
    private portfolioData!: Portfolio

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
  }
</script>
<style lang="scss" scoped>
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
    margin-bottom: 1rem;
    &-blank {
      @extend .portfolio-card;
      border: none;
    }
    &:hover {
      box-shadow: 0 0 10px 0 grey
    }
  }
  .portfolio-card-body {
    margin-top: auto;
  }
</style>
