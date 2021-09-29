import { defineComponent } from "@vue/runtime-core";

export default defineComponent({
  name: "TextImage",
  props: {
    heading: {
      type: String,
    },
    subheadings: {
      type: Array,
    },
    image: {
      type: String,
    },
  },
});
