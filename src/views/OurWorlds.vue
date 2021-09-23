<template>
  <section class="main">
    <navbar />

    <div class="our-worlds-cards">
      <our-worlds-card
        v-for="(image, idx) in images"
        :key="idx"
        :photo="image.source"
        :text="image.text"
        :subtext="image.subtext"
      />
    </div>
  </section>
</template>

<script lang="ts">
  import Navbar from "@/components/Navbar.vue";
  import OurWorldsCard from "@/components/OurWorldsCard.vue";

  import { defineComponent } from "vue";
  export default defineComponent({
    name: "DefineComponent",
    components: {
      Navbar,
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
</script>

<style scoped lang="scss">
  .main {
    background: #111;

    .our-worlds-cards {
      color: #fff;
      padding: 35vh 1rem 15vh 1rem;

      display: grid;
      grid-template-columns: repeat(4, 1fr);
      column-gap: 1rem;
      row-gap: 4rem;
      @media screen and (min-width: 500.1px) and (max-width: 1000px) {
        grid-template-columns: repeat(3, 1fr);
      }
      @media screen and (max-width: 500px) {
        grid-template-columns: repeat(2, 1fr);
      }
    }
  }
</style>
