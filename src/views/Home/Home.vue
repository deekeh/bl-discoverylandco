<template>
  <div class="home">
    <!-- main section -->
    <video-banner
      :video="require('@/assets/home/main.mp4')"
      :image="require('@/assets/about-dlc/banner.jpg')"
      heading="Discover"
      subheading="your world"
    />

    <!-- welcome section -->
    <home-welcome
      heading="Welcome to"
      subheading="our world"
      txt="Discover the unique atmosphere of our private residential club communities. Once experienced. Never forgotten. This is classic, comfortable, modern living in nature’s most spectacular settings worldwide. Reassuringly exclusive. Generously welcoming. Find your unique world – a place where families love to be; creating unforgettable moments, together."
      :leftimg="require('@/assets/home/welcome/0.jpg')"
      :rightimg="require('@/assets/home/welcome/1.jpg')"
      :style="{
        '--bg': `url(${require('@/assets/home/welcome/bg.jpg')})`,
      }"
    />

    <home-explore
      heading="Explore"
      subheading="our worlds"
      :cards="exploreCards"
    />

    <home-lands />

    <home-bottom />
  </div>
</template>

<script type="module" src="./Home.ts"></script>

<style scoped lang="scss">
  @import "./Home";
</style>
