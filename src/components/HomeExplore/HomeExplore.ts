import ArrowLeft from "@/components/svg/ArrowLeft.vue";
import ArrowRight from "@/components/svg/ArrowRight.vue";
import CarouselCard from "@/components/CarouselCard/CarouselCard.vue";

import { defineComponent } from "vue";

export default defineComponent({
  name: "HomeExplore",
  components: {
    ArrowLeft,
    ArrowRight,
    CarouselCard,
  },
  data() {
    return {
      cards: [
        {
          photo: "https://dxaurk9yhilm4.cloudfront.net/images/370/Madison2-Carousel_397186feb8bd51bb37bc24fc2b9b500f.jpg",
          title: "Barbuda Ocean Club",
          subtitle: "Barbuda, West Indies"
        },
        {
          photo: "https://dxaurk9yhilm4.cloudfront.net/images/6796/IMG_0911_397186feb8bd51bb37bc24fc2b9b500f.jpeg",
          title: "Driftwood",
          subtitle: "Austin, Texas",
        },
        {
          photo: "https://dxaurk9yhilm4.cloudfront.net/images/203/ElDorado-carousel_397186feb8bd51bb37bc24fc2b9b500f.jpg",
          title: "El Dorado",
          subtitle: "Los Cabos, Mexico",
        },
        {
          photo: "https://dxaurk9yhilm4.cloudfront.net/images/6654/Silo_Andy-Carlson_golf_October-2019_DJI_0020-copycrop_397186feb8bd51bb37bc24fc2b9b500f.jpg",
          title: "Silo Bridge",
          subtitle: "Amenia, New York",
        },
        {
          photo: "https://dxaurk9yhilm4.cloudfront.net/images/212/Yellowstone-carousel_397186feb8bd51bb37bc24fc2b9b500f.jpg",
          title: "Yellow Stone Club",
          subtitle: "Big Sky, Montana",
        },
      ]
    }
  }
});
