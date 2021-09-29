<template>
  <section id="about-dlc">
    <video-banner
      :image="require('@/assets/about-dlc/banner.jpg')"
      heading="Creating your"
      subheading="perfect world"
    />

    <section class="founded">
      <p>
        Founded in 1994 by Mike Meldman, Discovery Land Company is
      </p>
      <p>
        a US-based real estate developer and operator of private residential
      </p>
      <p>
        club communities and resorts with a world-renowned portfolio of
      </p>
      <p>
        domestic and international properties.
      </p>
    </section>

    <text-image
      :heading="textImage.heading"
      :subheadings="textImage.subheadings"
      :image="textImage.image"
    />

    <img
      class="blue-image"
      src="https://dxaurk9yhilm4.cloudfront.net/images/696/Bakers_Carousel3_62018727b9e8103a3d5d6c0701991eca.jpg"
      alt=""
    />
  </section>
</template>

<script type="module" src="./AboutDlc"></script>

<style scoped lang="scss">
  @import "../../global/style";
  @import "./AboutDlc";
</style>
