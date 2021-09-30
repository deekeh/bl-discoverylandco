import ArrowLeft from "@/components/svg/ArrowLeft.vue";
import ArrowRight from "@/components/svg/ArrowRight.vue";
import CarouselCard from "@/components/CarouselCard/CarouselCard.vue";

import { defineComponent } from "vue";

export default defineComponent({
  name: "HomeExplore",
  props: {
    heading: {
      type: String,
    },
    subheading: {
      type: String,
    },
    cards: {
      type: Array,
    },
  },
  components: {
    ArrowLeft,
    ArrowRight,
    CarouselCard,
  },
  data() {
    return {};
  },
});
