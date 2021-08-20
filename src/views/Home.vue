<template>
  <div class="home">
    <b-container>
      <h1 class="title">Welcome To Harry's Portfolio!</h1>
      <div class="portfolio-section pb-4">
        <h3>About</h3>
        <p v-for="(paragraph, index) in about" :key="index">
          {{ paragraph.join(" ") }}
        </p>
      </div>
      <div class="portfolio-section">
        <h3>Projects</h3>
        <PortfolioCard :portfolioData="projectsData" />
      </div>
      <div class="portfolio-section">
        <h3>Jupyter Notebooks</h3>
        <PortfolioCard :portfolioData="notebooksData" />
      </div>
    </b-container>
  </div>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator'
  import PortfolioCard from '@/components/portfolio/PortfolioCard.vue'

  import portfolio from '@/assets/portfolio'
  import { Portfolio } from '@/fixtures/portfolio'
  import { about } from '@/assets/resume'

  @Component({
    components: {
      PortfolioCard,
    },
  })
  export default class Home extends Vue {
    portfolio: Portfolio[] = portfolio
    about: string[][] = about

    public get projectsData(): Portfolio[] {
      return this.portfolio.filter( (el: Portfolio) => el.type === "Project")
    }

    public get notebooksData(): Portfolio[] {
      return this.portfolio.filter( (el: Portfolio) => el.type === "Notebook")
    }
  }
</script>
<style lang="scss">
  .title {
    text-align: center
  }
  .home {
    text-align: left
  }
  .portfolio-section {
    margin-bottom: 1.5rem;
    border-bottom: 1px solid #e3e3e3;
  }
  .portfolio-section > p {
    margin-bottom: 1rem;
    &:last-child {
      margin-bottom: 0rem;
    }
  }
</style>
