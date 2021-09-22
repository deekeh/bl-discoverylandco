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
    computed: {
      images() {
        return (async function() {
          // const img = [];
          return await fetch("https://picsum.photos/v2/list?limit=7")
            .then((res) => {
              return res.json();
            })
            .then((data) => {
              return data;
            });
        })();
      },
    },
  });
</script>
