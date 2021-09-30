import { defineComponent } from "@vue/runtime-core";

export default defineComponent({
  name: "PageHead",
  props: {
    paragraphs: {
      type: Array,
    },
  },
});
