import GalleryCard from "@/components/GalleryCard/GalleryCard.vue";

import { defineComponent } from "vue";
export default defineComponent({
  name: "Gallery",
  components: {
    GalleryCard,
  },
  data() {
    return {
      images: [] as {
        author: string;
        download_url: string;
      }[],
    };
  },
  created: function() {
    // await fetch("https://picsum.photos/v2/list?limit=7")
    //   .then((res) => {
    //     return res.json();
    //   })
    //   .then((data) => {
    //     this.images = data;
    //   });
    const authors: string[] = [
      "Outdoor Pursuits",
      "Golf",
      "Lifestyle",
      "Landscapes",
      "Clubhouses",
      "Wellness",
    ];
    for (let i = 1; i <= 6; i++) {
      this.images.push({
        author: authors[i - 1],
        download_url: require(`@/assets/gallery/${i}.jpg`),
      });
    }
  },
});
