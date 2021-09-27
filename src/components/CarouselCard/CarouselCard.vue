<template>
  <section class="carousel-card" :style="`background: url(${photo}); background-size: cover;`">
    <div class="title" v-text="title"></div>
    <div class="subtitle" v-text="subtitle"></div>
  </section>
</template>

<script type="module" src="./CarouselCard.ts"></script>

<style scoped lang="scss">
  @import "../../global/style";
  @import "./CarouselCard";
</style>
