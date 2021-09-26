<template>
  <div class="home">
    <!-- main section -->
    <video-banner />

    <!-- welcome section -->
    <section id="welcome">
      <div class="top-left">
        <h1 class="welcome-to-our-world">
          <span class="welcome-to">
            Welcome to
          </span>
          <span class="our-world">
            our world
          </span>
        </h1>
        <p class="welcome-text">
          Discover the unique atmosphere of our private residential club
          communities. Once experienced. Never forgotten. This is classic,
          comfortable, modern living in nature’s most spectacular settings
          worldwide. Reassuringly exclusive. Generously welcoming. Find your
          unique world – a place where families love to be; creating
          unforgettable moments, together.
        </p>
      </div>
      <div class="right">
        <img :src="require('@/assets/home/welcome/0.jpg')" alt="Ocean View" />
      </div>
      <div class="bottom-left">
        <img :src="require('@/assets/home/welcome/1.jpg')" alt="Leisure" />
      </div>
    </section>

    <home-explore />
  </div>
</template>

<script type="module" src="./Home.ts"></script>

<style scoped lang="scss">
  @import "./Home";
</style>
