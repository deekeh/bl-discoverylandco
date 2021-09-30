import { defineComponent } from "@vue/runtime-core";

export default defineComponent({
  name: "ExperienceLayers",
  props: {
    isinversed: {
      type: Boolean,
      default: false,
    },
    image: {
      type: String,
    },
    heading: {
      type: String,
    },
    content: {
      type: String,
    },
  },
});
