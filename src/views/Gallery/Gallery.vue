<template>
  <section class="main">
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

<script type="module" src="./Gallery.ts"></script>

<style scoped lang="scss">
  @import "./Gallery"
</style>
