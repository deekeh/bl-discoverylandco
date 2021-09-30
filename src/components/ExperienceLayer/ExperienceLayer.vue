<template>
  <section class="experience-layer" :class="[isinversed ? 'inverse' : '']">
    <div class="image">
      <img
        :src="image"
        alt="Golf"
      />
    </div>
    <div class="text">
      <h1 class="heading" v-html="heading"></h1>
      <p class="content" v-html="content"></p>
      <div class="explore-outer">
        <button class="explore">
          Explore
        </button>
      </div>
    </div>
  </section>
</template>

<script type="module" src="./ExperienceLayer.ts"></script>

<style scoped lang="scss">
  @import "src/global/style";
  @import "./ExperienceLayer";
</style>
