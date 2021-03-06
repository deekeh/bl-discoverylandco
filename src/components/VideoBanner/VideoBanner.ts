import { defineComponent } from "vue";

export default defineComponent({
  name: "VideoBanner",
  props: {
    video: {
      type: String,
    },
    image: {
      type: String,
      default: require("@/assets/about-dlc/banner.jpg"),
    },
    heading: {
      type: String,
    },
    subheading: {
      type: String,
    },
  },
  // data() {
  //   return {
  //     mainVideo: require("@/assets/home/main.mp4"),
  //   };
  // },
});
