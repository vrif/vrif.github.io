import { Component, Vue } from 'vue-property-decorator'

@Component
export default class HelperMethods extends Vue{
  public newTab(e: Event): void {
    if (e.currentTarget) {
      window.open((e.currentTarget as HTMLAnchorElement).href, "_blank")
    }
  }
}