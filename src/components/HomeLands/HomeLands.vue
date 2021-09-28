<template>
  <section id="home-lands">
    <section class="header">
      <h1 class="title">
        <span class="lands-of">
          Lands of
        </span>
        <span class="discovery">
          Discovery
        </span>
      </h1>

      <div class="subtitle">
        <p>
          A world away from the day-to-day. Your escape. Your haven. Your world.
        </p>
        <p>
          Explore the map below and take a journey to our communities.
        </p>
      </div>

      <nav class="globe-nav">
        <button class="animated-hr black globe-nav-item">
          North America &amp; Caribbean
        </button>
        <button class="animated-hr black globe-nav-item">Hawaii</button>
        <button class="animated-hr black globe-nav-item">Europe</button>
      </nav>
    </section>
    <img
      :src="require('@/assets/home-lands/globe-usa.jpg')"
      alt="Globe showing USA"
      class="globe-image"
    />
  </section>
</template>

<script type="module" src="./HomeLands.ts"></script>

<style scoped lang="scss">
  @import "../../global/style";
  @import "./HomeLands";
</style>
