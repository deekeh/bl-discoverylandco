// import Navbar from "@/components/Navbar/Navbar.vue";
import VideoBanner from "@/components/VideoBanner/VideoBanner.vue";
import HomeExplore from "@/components/HomeExplore/HomeExplore.vue";

import { defineComponent } from "vue";

export default defineComponent({
  name: "Home",
  components: {
    // Navbar,
    VideoBanner,
    HomeExplore,
  },
  data() {
    return {
      mainVideo: require("@/assets/home/main.mp4"),
    };
  },
});
