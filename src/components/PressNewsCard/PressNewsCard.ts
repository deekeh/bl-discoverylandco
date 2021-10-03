import { defineComponent } from "@vue/runtime-core";

export default defineComponent({
  name: "PressNewsCard",
  props: {
    title: {
      type: String,
    },
    subtitle: {
      type: String,
    },
  },
});
