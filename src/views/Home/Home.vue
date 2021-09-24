<template>
  <div class="home">
    <!-- <div class="main"> -->
    <navbar />
    <video class="main-bg" autoplay muted loop>
      <source
        :src="mainVideo"
        type="video/mp4"
      />
    </video>
  </div>
</template>

<script type="module" src="./Home.ts"></script>

<style scoped lang="scss">
  @import "./Home"
</style>
