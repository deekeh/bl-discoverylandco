import VideoBanner from "@/components/VideoBanner/VideoBanner.vue";
import PageHead from "@/components/PageHead/PageHead.vue";
import TextImage from "@/components/TextImage/TextImage.vue";
import HomeExplore from "@/components/HomeExplore/HomeExplore.vue";
import HomeWelcome from "@/components/HomeWelcome/HomeWelcome.vue";
import ExploreFooter from "@/components/ExploreFooter/ExploreFooter.vue";

import { defineComponent } from "vue";

export default defineComponent({
  name: "AboutDlc",
  components: {
    VideoBanner,
    PageHead,
    TextImage,
    HomeExplore,
    HomeWelcome,
    ExploreFooter,
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
      exploreCards: [
        {
          photo:
            "https://dxaurk9yhilm4.cloudfront.net/images/370/Madison2-Carousel_397186feb8bd51bb37bc24fc2b9b500f.jpg",
          title: "Barbuda Ocean Club",
          subtitle: "Barbuda, West Indies",
        },
        {
          photo:
            "https://dxaurk9yhilm4.cloudfront.net/images/6796/IMG_0911_397186feb8bd51bb37bc24fc2b9b500f.jpeg",
          title: "Driftwood",
          subtitle: "Austin, Texas",
        },
        {
          photo:
            "https://dxaurk9yhilm4.cloudfront.net/images/203/ElDorado-carousel_397186feb8bd51bb37bc24fc2b9b500f.jpg",
          title: "El Dorado",
          subtitle: "Los Cabos, Mexico",
        },
        {
          photo:
            "https://dxaurk9yhilm4.cloudfront.net/images/6654/Silo_Andy-Carlson_golf_October-2019_DJI_0020-copycrop_397186feb8bd51bb37bc24fc2b9b500f.jpg",
          title: "Silo Bridge",
          subtitle: "Amenia, New York",
        },
        {
          photo:
            "https://dxaurk9yhilm4.cloudfront.net/images/212/Yellowstone-carousel_397186feb8bd51bb37bc24fc2b9b500f.jpg",
          title: "Yellow Stone Club",
          subtitle: "Big Sky, Montana",
        },
      ],
      pageHeadData: [
        "Founded in 1994 by Mike Meldman, Discovery Land Company is",
        "a US-based real estate developer and operator of private residential",
        "club communities and resorts with a world-renowned portfolio of",
        "domestic and international properties.",
      ],
    };
  },
});
