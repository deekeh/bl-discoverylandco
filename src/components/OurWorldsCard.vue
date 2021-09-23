<template>
  <section class="our-worlds-card">
    <img class="location-image" :src="photo" :alt="text" />
    <div class="data">
      <div class="text" v-text="text"></div>
      <div class="subtext" v-text="subtext"></div>
    </div>
  </section>
</template>

<script>
  import { defineComponent } from "vue";
  export default defineComponent({
    name: "OurWorldsCard",
    props: {
      photo: {
        type: String,
      },
      text: {
        type: String,
      },
      subtext: {
        type: String,
      },
    },
  });
</script>

<style scoped lang="scss">
.our-worlds-card {
  .location-image {
    width: 100%;
  }

  .data {
    margin-top: 0.5rem;

    .text {
      font-size: 0.9rem;
    }

    .subtext {
      font-size: 0.85rem;
      color: #777;
    }
  }
}
</style>
