// interfaces for custom data objects
interface INewsDataItem {
  title: string;
  subtitle: string;
}

// internal components
import ArrowLeft from "@/components/svg/ArrowLeft.vue";
import ArrowRight from "@/components/svg/ArrowRight.vue";
import PressNewsCard from "../PressNewsCard/PressNewsCard.vue";

import { defineComponent } from "@vue/runtime-core";

export default defineComponent({
  name: "PressNews",
  components: {
    ArrowLeft,
    ArrowRight,
    PressNewsCard,
  },
  data() {
    return {
      page: 0 as number,
      newsData: [
        {
          title: "10 Fairways to Tee Off on Now",
          subtitle: "Vegas Magazine I September 2021",
        },
        {
          title:
            "Golf Real Estate Roars Back as Vacation Homes Boom in Pandemic",
          subtitle: "Bloomberg I September 2021",
        },
        {
          title:
            "Brexit drives British millionaires to Portugal for tax and EU perks — but it’s about to get complicated",
          subtitle: "Telegraph UK | August 20, 2021",
        },
        {
          title:
            "This Property Company Ups the Ante with  Luxury and Sustainability",
          subtitle: "Sunset Magazine | August 13, 2021",
        },
        {
          title: "Where Sun, Sand and Splendor Are Still to Be Discovered",
          subtitle: "New York Times | June 9, 2021",
        },
        {
          title:
            "Mike Meldman is one of the most influential real-estate moguls in the country thanks to his luxurious live-in resorts, which became irresistible to the rich and famous during the pandemic",
          subtitle: "Business Insider |  June 4, 2021",
        },
        {
          title:
            "There's a real buy-in for resort communities offering amusement and amenities",
          subtitle: "Luxury Magazine | Spring/Summer 2021",
        },
        {
          title: "This Blue Chip Caribbean Island Hopes to Dethrone St. Barts",
          subtitle: "New York Post | April 5, 2021",
        },
        {
          title: "No Longer Waiting for Retirement",
          subtitle: "New York Times International Homes | March 27-28, 2021",
        },
        {
          title: "Golf and Pickleball are Having a Love Affair",
          subtitle: "New York Times | March 22, 2021",
        },
        {
          title: "For Many, the Pandemic Has Led to the 'Discovery' of Golf",
          subtitle: "New York Times | March 22, 2021",
        },
      ] as INewsDataItem[],
      // desktopNewsData: [] as INewsDataItem[],
    };
  },
  computed: {
    totalPages(): number {
      return this.newsData.length % 4;
    },
    desktopNewsData(): Array<{ title: string; subtitle: string }> {
      console.log(this.newsData.slice(this.page * 4, (this.page + 1) * 4));
      return this.newsData.slice(this.page * 4, (this.page + 1) * 4);
    },
  },
  // watch: {
  //   page(): void {
  //     this.desktopNewsData = this.newsData.slice(
  //       this.page * 4,
  //       (this.page + 1) * 4
  //     );
  //     // console.log(this.desktopNewsData);
  //   },
  // },
  methods: {
    nextPage(): void {
      this.page = (this.page + 1) % this.totalPages;
      // console.log(this.page);
    },
    previousPage(): void {
      this.page = (this.page + this.totalPages - 1) % this.totalPages;
      // console.log(this.page);
    },
  },
});
