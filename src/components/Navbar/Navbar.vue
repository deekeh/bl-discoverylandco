<template>
  <nav class="header">
    <router-link :to="{ name: 'Home' }" class="logo">
      <Logo />
    </router-link>
    <div class="nav-options">
      <router-link :to="{ name: 'Home' }" class="nav-option animated-hr"
        >About DLC</router-link
      >
      <router-link :to="{ name: 'Our-Worlds' }" class="nav-option animated-hr"
        >Our Worlds</router-link
      >
      <router-link :to="{ name: 'Home' }" class="nav-option animated-hr"
        >Experiences</router-link
      >
      <router-link :to="{ name: 'Gallery' }" class="nav-option animated-hr"
        >Gallery</router-link
      >
      <router-link :to="{ name: 'Home' }" class="nav-option animated-hr"
        >Press</router-link
      >
    </div>
  </nav>
</template>

<script type="module" src="./Navbar.ts"></script>

<style scoped lang="scss">
  @import "./Navbar"
</style>
