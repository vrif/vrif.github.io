<template>
  <div class="home">
    <h1>Projects</h1>
    <PortfolioCard :portfolioData="projectsData" />
    <h1>Jupyter Notebooks</h1>
    <PortfolioCard :portfolioData="notebooksData" />
    <!-- <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/> -->
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
