import OurWorldsCard from "@/components/OurWorldsCard/OurWorldsCard.vue";

import { defineComponent } from "vue";
export default defineComponent({
  name: "DefineComponent",
  components: {
    OurWorldsCard,
  },
  data() {
    return {
      images: [] as {
        source: string;
        text: string;
        subtext: string;
      }[],
    };
  },
  created() {
    [
      {
        text: "NORTH SHORE PRESERVE",
        subtext: "Kaua'i Hawaii",
      },
      {
        text: "JAMES ISLAND",
        subtext: "Southern Gulf Islands, British Columbia, Canada",
      },
      {
        text: "COSTATERRA",
        subtext: "Comporta, Portugal",
      },
      {
        text: "BARBUDA OCEAN CLUB",
        subtext: "Barbuda, West Indies",
      },
      {
        text: "DRIFTWOOD",
        subtext: "Austin, Texas",
      },
      {
        text: "TROUBADOUR",
        subtext: "Nashville, Tennessee",
      },
      {
        text: "PLAYA GRANDE",
        subtext: "Rio San Juan, Dominican Republic",
      },
      {
        text: "CHILENO BAY",
        subtext: "Cabo San Lucas, Mexico",
      },
    ].forEach((el, idx) => {
      this.images.push({
        source: require(`@/assets/our-worlds/${idx}.jpg`),
        text: el.text,
        subtext: el.subtext,
      });
    });
  },
});
