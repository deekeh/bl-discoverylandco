import VideoBanner from "@/components/VideoBanner/VideoBanner.vue";
import PageHead from "@/components/PageHead/PageHead.vue";
import TextImage from "@/components/TextImage/TextImage.vue";
import ExploreFooter from "@/components/ExploreFooter/ExploreFooter.vue";

import { defineComponent } from "@vue/runtime-core";

export default defineComponent({
  name: "Experiences",
  components: {
    VideoBanner,
    PageHead,
    TextImage,
    ExploreFooter,
  },
  data() {
    return {
      pageHeadData: [
        " Memorable days. Exceptional nights. We believe it’s our mission to ",
        "make every minute matter. So you can live your life to the fullest, ",
        "with the people closest to you. ",
      ],
      textImageData: {
        heading: "Exclusive to <br/>your world",
        subheadings: [
          "Our worlds are designed to offer you endless opportunities to share incredible once-in-a-lifetime experiences and adventures every single minute of the day. Each of our settings offers a relaxed sense of extensive Outdoor Pursuits program. Create moments of joy and wonder, unforgettable memories and cherished times, together with those who matter most.",
        ],
      },
    };
  },
});
