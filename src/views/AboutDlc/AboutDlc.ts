import VideoBanner from "@/components/VideoBanner/VideoBanner.vue";
import TextImage from "@/components/TextImage/TextImage.vue";

import { defineComponent } from "vue";

export default defineComponent({
  name: "AboutDlc",
  components: {
    VideoBanner,
    TextImage,
  },
  data() {
    return {
      textImage: {
        heading: "Our Mission",
        subheadings: [
          "We don’t build buildings, but rather we build settings where families can create intergenerational memories and enrich their lives in exquisite and untouched sanctuaries. Everything we do is driven by the fundamental desire to create spaces where families can be together.",
          "These settings offer a relaxed and comfortable sense of community featuring outstanding clubhouses, incredible residential offerings, premier golf courses, welcoming staff, world-class culinary offerings and our custom Outdoor Pursuits program; all offering the highest of service standards to enrich your experience.",
        ],
        image:
          "https://dxaurk9yhilm4.cloudfront.net/images/163/What_we_do_intro_5ae402c9837860cd6e4f65e304b3a5fa.jpg",
      },
    };
  },
});
