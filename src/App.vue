<template>
  <!-- <navbar /> -->
  <router-view />
  <Footer />
</template>

<script>
  // import Navbar from "./components/Navbar.vue";
  import Footer from "@/components/Footer.vue"

  import { defineComponent } from "vue";
  export default defineComponent({
    name: "App",
    components: {
      // Navbar,
      Footer,
    },
  });
</script>

<style lang="scss">
  @import url('https://fonts.googleapis.com/css2?family=Average+Sans&display=swap');

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
  }
  body {
    position: relative;
    left: 0;
    top: 0;
  }
</style>
