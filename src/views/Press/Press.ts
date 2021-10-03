import VideoBanner from "@/components/VideoBanner/VideoBanner.vue";
import PressLatest from "@/components/PressLatest/PressLatest.vue";
import PressNews from "@/components/PressNews/PressNews.vue";

import { defineComponent } from "@vue/runtime-core";

export default defineComponent({
  name: "Press",
  components: {
    VideoBanner,
    PressLatest,
    PressNews,
  },
});
