<template>
  <section class="main">
    <navbar />
    <div class="gallery">
      <div class="first-image">
        Gallery
      </div>
    </div>
  </section>
</template>

<script lang="ts">
  import Navbar from "@/components/Navbar.vue";

  import { defineComponent } from "vue";
  export default defineComponent({
    name: "Gallery",
    components: {
      Navbar,
    },
    data() {
      return {
        images: [],
      };
    },
    created() {
      fetch("https://picsum.photos/v2/list?limit=7")
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          data.forEach((d: any) => {
            this.images.push(d.download_url);
          });
          return;
        })
        .then(() => {
          console.log(this.images);
        });
    },
    // computed: {
    //   images() {
    //     const img:[] = [];
    //     fetch("https://picsum.photos/v2/list?limit=7")
    //     .then((res) => {
    //       return res.json();
    //     })
    //     .then((data) => {
    //       data.forEach((d: any) => {
    //         img.push(d.download_url)
    //       })
    //       console.log(img)
    //       return img;
    //     })
    //   },
    // }
  });
</script>
