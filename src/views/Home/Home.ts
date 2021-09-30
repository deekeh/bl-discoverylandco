// import Navbar from "@/components/Navbar/Navbar.vue";
import VideoBanner from "@/components/VideoBanner/VideoBanner.vue";
import HomeWelcome from "@/components/HomeWelcome/HomeWelcome.vue";
import HomeExplore from "@/components/HomeExplore/HomeExplore.vue";
import HomeLands from "@/components/HomeLands/HomeLands.vue";
import HomeBottom from "@/components/HomeBottom/HomeBottom.vue";

import { defineComponent } from "vue";

export default defineComponent({
  name: "Home",
  components: {
    // Navbar,
    VideoBanner,
    HomeExplore,
    HomeLands,
    HomeBottom,
    HomeWelcome,
  },
  data() {
    return {
      mainVideo: require("@/assets/home/main.mp4"),
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
    };
  },
});
