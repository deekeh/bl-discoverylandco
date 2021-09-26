<template>
  <section class="main">
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

<script type="module" src="./OurWorlds.ts"></script>

<style scoped lang="scss">
  @import "./OurWorlds";
</style>
