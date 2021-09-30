<template>
  <div>
    <navbar />
    <router-view />
    <Footer />
  </div>
</template>

<script>
  import Navbar from "@/components/Navbar/Navbar.vue";
  import Footer from "@/components/Footer/Footer.vue";

  import { defineComponent } from "vue";
  export default defineComponent({
    name: "App",
    components: {
      Navbar,
      Footer,
    },
  });
</script>

<style lang="scss">
  @import "./global/style";

  @import url("https://fonts.googleapis.com/css2?family=Average+Sans&display=swap");
  @import url("https://fonts.googleapis.com/css2?family=Average&display=swap");

  // reset
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-size: 16px;
    font-family: "Average Sans", sans-serif;
    // font-family: "Poppins", sans-serif;
  }
  body,
  html {
    min-height: 100vh;
    background: #fff;
  }
  body {
    position: relative;
    left: 0;
    top: 0;
  }

  // CUSTOM ANIMATED HR
  .animated-hr {
    display: flex;
    flex-direction: column;
    gap: 4px;

    // overwrite custom hr when the page is active
    // &.router-link-active::after,
    // &.router-link-active:hover::after {
    //   width: 100%;
    //   height: 2px;
    // }

    &::after {
      display: inline-block;
      margin-left: auto;
      margin-right: 0;
      content: "";
      width: 0;
      height: 1px;
      background: #fff;
      animation: customhrremove 0.3s ease-out;
    }
    &.black::after {
      background: #333;
    }
    &:hover::after {
      margin-left: 0;
      margin-right: auto;
      right: 0;
      left: auto;
      animation: customhr 0.3s ease-in;
      width: 100%;
    }

    @keyframes customhr {
      from {
        width: 0;
      }
      to {
        width: 100%;
      }
    }
    @keyframes customhrremove {
      from {
        width: 100%;
      }
      to {
        width: 0;
      }
    }
    // ----
  }
</style>
