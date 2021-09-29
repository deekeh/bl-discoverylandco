// import Navbar from "@/components/Navbar/Navbar.vue";
import VideoBanner from "@/components/VideoBanner/VideoBanner.vue";
import HomeExplore from "@/components/HomeExplore/HomeExplore.vue";
import HomeLands from "@/components/HomeLands/HomeLands.vue";
import HomeBottom from "@/components/HomeBottom/HomeBottom.vue";

import { defineComponent } from "vue";

export default defineComponent({
  name: "Home",
  components: {
    // Navbar,
    VideoBanner,
    HomeExplore,
    HomeLands,
    HomeBottom,
  },
  data() {
    return {
      mainVideo: require("@/assets/home/main.mp4"),
    };
  },
});
