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

<script lang="ts">
  import Logo from "./svg/Logo.vue";
  import { defineComponent } from "vue";

  export default defineComponent({
    name: "Navbar",
    components: {
      Logo,
    },
  });
</script>

<style scoped lang="scss">
  nav.header {
    background: transparent;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 2;

    // horizontal spacing
    padding: 3rem 6rem;
    @media screen and (max-width: 900px) {
      & {
        padding: 1rem 2rem;
      }
    }

    // flex properties
    display: flex;
    align-items: center;
    justify-content: space-between;
    @media screen and (max-width: 730px) {
      flex-direction: column;
    }

    .nav-options {
      display: flex;
      align-items: center;
      justify-content: space-around;
      column-gap: 2rem;
      @media screen and (max-width: 900px) {
        column-gap: 1rem;
      }
      @media screen and (max-width: 500px) {
        flex-direction: column;
      }

      .nav-option {
        text-decoration: none;
        color: #fff;

        // overwrite custom hr when the page is active
        &.router-link-active::after,
        &.router-link-active:hover::after {
          width: 100%;
          height: 2px;
        }
      }
    }

    .logo {
      width: 14rem;
    }
  }
</style>
