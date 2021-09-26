<template>
  <section class="main">
    <video class="main-bg" autoplay muted loop>
      <source :src="mainVideo" type="video/mp4" />
    </video>
    <main class="discover-your-world">
      <span class="discover">Discover</span>
      <span class="your-world">your world</span>
    </main>
  </section>
</template>

<script type="module" src="./VideoBanner.ts"></script>

<style scoped lang="scss">
  @import "./VideoBanner";
</style>
