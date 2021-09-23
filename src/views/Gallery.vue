<template>
  <section class="main">
    <navbar />
    <div class="gallery">
      <div class="first-image">
        Gallery
      </div>
      <div class="gallery-cards">
        <gallery-card
          v-for="(image, idx) in images"
          :key="idx"
          :txt="image.author"
          :pic="image.download_url"
        />
      </div>
    </div>
  </section>
</template>

<script lang="ts">
  import Navbar from "@/components/Navbar.vue";
  import GalleryCard from "@/components/GalleryCard.vue";

  import { defineComponent } from "vue";
  export default defineComponent({
    name: "Gallery",
    components: {
      Navbar,
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
</script>

<style scoped lang="scss">
  @import url("https://fonts.googleapis.com/css2?family=Average&display=swap");

  $first-image: url("https://dxaurk9yhilm4.cloudfront.net/images/7383/jael-rodriguez-AkF5NT0sZy8-unsplash-1-1_210301_200939_35d31212c7a2d4dccdff99afa3f88af5.jpg");
  section.main {
    .gallery {
      .first-image {
        background: $first-image;
        height: 60vh;
        background-size: cover;

        display: flex;
        align-items: center;
        padding-left: 8rem;
        font-size: 4rem;
        color: #fff;
        font-family: "Average", serif;

        @media screen and (max-width: 500px) {
          padding: 1rem;
          font-size: 2rem;
        }
      }

      .gallery-cards {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        @media screen and (max-width: 576px) {
          grid-template-columns: 1fr;
        }
        @media screen and (min-width: 576.1px) and (max-width: 800px) {
          grid-template-columns: repeat(2, 1fr);
        }
      }
    }
  }
</style>
