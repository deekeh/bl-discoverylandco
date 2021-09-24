import Navbar from "@/components/Navbar/Navbar.vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "Home",
  components: {
    Navbar,
  },
  data() {
    return {
      mainVideo: require("@/assets/home/main.mp4"),
    };
  },
});
