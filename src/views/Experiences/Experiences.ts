import VideoBanner from "@/components/VideoBanner/VideoBanner.vue";
import PageHead from "@/components/PageHead/PageHead.vue";
import TextImage from "@/components/TextImage/TextImage.vue";
import ExperienceLayer from "@/components/ExperienceLayer/ExperienceLayer.vue";
import ExploreFooter from "@/components/ExploreFooter/ExploreFooter.vue";

import { defineComponent } from "@vue/runtime-core";

export default defineComponent({
  name: "Experiences",
  components: {
    VideoBanner,
    PageHead,
    TextImage,
    ExploreFooter,
    ExperienceLayer,
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
      layerData: [
        {
          image:
            "https://dxaurk9yhilm4.cloudfront.net/images/533/Golf3_4d32d1f061062da257f8ac1083a047ac.jpg",
          heading: "Golf",
          content:
            "We commission the world’s most renowned course architects to design spectacular golf experiences on challenging yet incredibly playable 18-hole courses. Our trademark comfort stations also set new standards in on-course amenities.",
        },
        {
          image:
            "https://dxaurk9yhilm4.cloudfront.net/images/144/OD_image_4d32d1f061062da257f8ac1083a047ac.jpg",
          heading: "Outdoor Pursuits",
          content:
            "Our signature Outdoor Pursuits program is designed for families to create memories together. Whether you’re trying a new sport or taking a day trip, our team will ensure you make the most of every minute with activities designed to help you take advantage of everything each region has to offer.",
        },
        {
          image:
            "https://dxaurk9yhilm4.cloudfront.net/images/145/Wellness_image_4d32d1f061062da257f8ac1083a047ac.jpg",
          heading: "Wellness",
          content:
            "Unwind at an indulgent spa. Set challenging targets with a tailor-made fitness plan. Or let our talented chefs treat you to our flavorful international menus created using the finest, carefully selected foods sourced locally from organic farms.",
        },
      ],
    };
  },
});
