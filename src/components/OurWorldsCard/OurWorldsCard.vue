<template>
  <section class="our-worlds-card">
    <img class="location-image" :src="photo" :alt="text" />
    <div class="data">
      <div class="text" v-text="text"></div>
      <div class="subtext" v-text="subtext"></div>
    </div>
  </section>
</template>

<script type="module" src="./OurWorldsCard.ts"></script>

<style scoped lang="scss">
  @import "./OurWorldsCard";
</style>
