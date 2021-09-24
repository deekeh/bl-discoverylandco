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

<script lang="ts">
  import Navbar from "@/components/Navbar/Navbar.vue";
  import { defineComponent } from "vue";

  export default defineComponent({
    name: "Home",
    components: {
      Navbar,
    },
    data() {
      return {
        mainVideo: require("@/assets/home/main.mp4")
      }
    }
  });
</script>

<style scoped lang="scss">
  .home {
    overflow: hidden;
    width: 100%;
    position: relative;

    video.main-bg {
      min-width: 100%;
      min-height: 100vh;
    }
  }
</style>
