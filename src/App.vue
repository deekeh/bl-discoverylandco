<template>
  <!-- <navbar /> -->
  <router-view />
</template>

<script>
  // import Navbar from "./components/Navbar.vue";
  import { defineComponent } from "vue";
  export default defineComponent({
    name: "App",
    components: {
      // Navbar,
    },
  });
</script>

<style lang="scss">
  @import url("https://fonts.googleapis.com/css2?family=Average+Sans&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");

  // reset
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-size: 16px;
    font-family: "Average Sans", sans-serif;
    font-family: "Poppins", sans-serif;
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
