<template>
  <section class="main">
    <video class="main-bg" autoplay muted loop :style="{
      '--fallback': `url('${image}')`
    }">
      <source :src="video" type="video/mp4" />
    </video>
    <main class="discover-your-world">
      <span class="discover" v-html="heading"></span>
      <span class="your-world" v-html="subheading"></span>
    </main>
  </section>
</template>

<script type="module" src="./VideoBanner.ts"></script>

<style scoped lang="scss">
  @import "./VideoBanner";
</style>
