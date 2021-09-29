import BottomCard from "@/components/BottomCard/BottomCard.vue";

import { defineComponent } from "vue";

export default defineComponent({
  name: "HomeBottom",
  components: {
    BottomCard,
  },
  data() {
    return {
      cards: [
        {
          name: "Experiences",
          image:
            "https://dxaurk9yhilm4.cloudfront.net/images/728/Expereinces_slider_190716_095517_464875650e0665072829219c2109f3b9.jpg",
        },
        {
          name: "Lifestyle",
          image:
            "https://dxaurk9yhilm4.cloudfront.net/images/729/lifestyle_slider_190716_095537_fc98236fcd7afd38ca0fd181cf61bcb6.jpg",
        },
        {
          name: "Wellness",
          image:
            "https://dxaurk9yhilm4.cloudfront.net/images/730/wellness_slider_190716_095551_7a63ac04cea98219d28754079427d015.jpg",
        },
      ],
    };
  },
});
