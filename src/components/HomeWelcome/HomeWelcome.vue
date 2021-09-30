<template>
  <section id="welcome" :class="[isreversed ? 'reversed' : '']">
    <div class="top-left">
      <h1 class="welcome-to-our-world">
        <span class="welcome-to" v-html="heading"></span>
        <span class="our-world" v-html="subheading"></span>
      </h1>
      <p class="welcome-text" v-html="txt"></p>
    </div>
    <div class="right">
      <img :src="leftimg" alt="Ocean View" />
    </div>
    <div class="bottom-left" :class="[isleftimghidden ? 'd-none' : '']">
      <img :src="rightimg" alt="Leisure" />
    </div>
  </section>
</template>

<script type="module" src="./HomeWelcome.ts"></script>

<style scoped lang="scss">
  @import "./HomeWelcome"
</style>
