import { defineComponent } from "vue";

export default defineComponent({
  name: "VideoBanner",
  data() {
    return {
      mainVideo: require("@/assets/home/main.mp4"),
    };
  },
});
