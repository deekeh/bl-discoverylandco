<template>
  <div class="gallery-card">
    <img class="gallery-img" :src="pic" :alt="txt" />
    <div class="gallery-txt">{{ txt }}</div>
  </div>
</template>

<script type="module" src="./GalleryCard.js"></script>

<style scoped lang="scss">
  @import "./GalleryCard";
</style>
