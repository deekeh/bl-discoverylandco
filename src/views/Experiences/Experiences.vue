<template>
  <main id="experiences-page">
    <!-- main section -->
    <video-banner
      :video="require('@/assets/experiences/experiences_hero.mp4')"
      :image="require('@/assets/about-dlc/banner.jpg')"
      heading="Unforgettable"
      subheading="experiences"
    />

    <!-- page header paragraph -->
    <page-head :paragraphs="pageHeadData" />

    <!-- text-image section -->
    <text-image
      :heading="textImageData.heading"
      :subheadings="textImageData.subheadings"
      :image="require('@/assets/experiences/text-image.jpg')"
    />

    <!-- explore footer section -->
    <explore-footer
      :style="{
        '--bg': `url('https://dxaurk9yhilm4.cloudfront.net/images/139/img_5dabbd1a34149dcaed83515ff1526a0f.jpg')`,
      }"
    />
  </main>
</template>

<script type="module" src="./Experiences.ts"></script>

<style scoped lang="scss">
  @import "./Experiences";
</style>
