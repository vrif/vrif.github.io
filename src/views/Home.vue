<template>
  <div class="home">
    <b-container>
      <h1>Projects</h1>
    </b-container>
    <PortfolioCard :portfolioData="projectsData" />
    <b-container>
      <h1>Jupyter Notebooks</h1>
    </b-container>
    <PortfolioCard :portfolioData="notebooksData" />
  </div>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator'
  import PortfolioCard from '@/components/portfolio/PortfolioCard.vue'

  import portfolio from '@/assets/portfolio'
  import { Portfolio } from '@/fixtures/portfolio'

  @Component({
    components: {
      PortfolioCard,
    },
  })
  export default class Home extends Vue {
    portfolio: Portfolio[] = portfolio

    public get projectsData(): Portfolio[] {
      return this.portfolio.filter( (el: Portfolio) => el.type === "Project")
    }

    public get notebooksData(): Portfolio[] {
      return this.portfolio.filter( (el: Portfolio) => el.type === "Notebook")
    }
  }
</script>
<style lang="scss">
  .home {
    text-align: center
  }
</style>
