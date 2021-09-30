import { defineComponent } from "@vue/runtime-core";

export default defineComponent({
  name: "HomeWelcome",
  props: {
    isreversed: {
      type: Boolean,
      default: false,
    },
    rightimg: {
      type: String,
    },
    leftimg: {
      type: String,
    },
    isleftimghidden: {
      type: Boolean,
      defult: false,
    },
    heading: {
      type: String,
    },
    subheading: {
      type: String,
    },
    txt: {
      type: String,
    },
  },
});
