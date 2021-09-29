<template>
  <section class="text-image">
    <div class="part one">
      <h1 class="heading" v-html="heading"></h1>
      <div class="sub-headings">
        <p
          class="sub-heading"
          v-for="(subheading, idx) in subheadings"
          :key="idx"
          v-html="subheading"
        ></p>
      </div>
    </div>
    <div class="part two">
      <img :src="image" :alt="heading" />
    </div>
  </section>
</template>

<script type="module" src="./TextImage.ts"></script>

<style scoped lang="scss">
  @import "../../global/style";
  @import "./TextImage"
</style>
