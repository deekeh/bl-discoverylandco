<template>
  <nav class="header">
    <div class="logo-outer" :class="[isToggled ? 'is-toggled' : '']">
      <router-link @click="isToggled=false" :to="{ name: 'Home' }" class="logo">
        <Logo />
      </router-link>
      <button class="nav-toggler" @click="isToggled=!isToggled">
        <svg width="16" height="16" fill="#fff" class="toggler-svg">
          <rect width="16" height="4" x="0" y="0" />
          <rect width="16" height="4" x="0" y="6" />
          <rect width="12" height="4" x="0" y="12" />
        </svg>
      </button>
    </div>
    <div class="nav-options" :class="[isToggled ? 'is-toggled' : '']">
      <router-link @click="isToggled=false" :to="{ name: 'Home' }" class="nav-option animated-hr"
        >About DLC</router-link
      >
      <router-link @click="isToggled=false" :to="{ name: 'Our-Worlds' }" class="nav-option animated-hr"
        >Our Worlds</router-link
      >
      <router-link @click="isToggled=false" :to="{ name: 'Home' }" class="nav-option animated-hr"
        >Experiences</router-link
      >
      <router-link @click="isToggled=false" :to="{ name: 'Gallery' }" class="nav-option animated-hr"
        >Gallery</router-link
      >
      <router-link @click="isToggled=false" :to="{ name: 'Home' }" class="nav-option animated-hr"
        >Press</router-link
      >
    </div>
  </nav>
</template>

<script type="module" src="./Navbar.ts"></script>

<style scoped lang="scss">
  @import "./Navbar"
</style>
