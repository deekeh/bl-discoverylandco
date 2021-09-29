import ArrowRight from "@/components/svg/ArrowRight.vue";

import { defineComponent } from "vue";

export default defineComponent({
  name: "BottomCard",
  components: {
    ArrowRight,
  },
  props: {
    heading: {
      type: String,
    },
  },
});
