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

    <div class="blue-image-outer">
      <img
        class="blue-image"
        src="https://dxaurk9yhilm4.cloudfront.net/images/696/Bakers_Carousel3_62018727b9e8103a3d5d6c0701991eca.jpg"
        alt=""
      />
    </div>

    <div class="carousel">
      <home-explore heading="The Discovery Difference" :cards="exploreCards" />
    </div>

    <div class="full-image-outer">
      <img
        src="https://dxaurk9yhilm4.cloudfront.net/images/159/What_we_do_design_hero_62018727b9e8103a3d5d6c0701991eca.jpg"
        alt="Full Image"
        class="full-image"
      />
    </div>

    <home-welcome
      heading="Dicovery Design"
      txt="See the beauty in every corner of your new, bespoke home away from home. From fabrics and furniture pieces to floorplans, our professional designers will collaborate closely with you to create an interior living space which reflects your style and unique tastes as well as perfectly complementing your lifestyle."
      leftimg="https://dxaurk9yhilm4.cloudfront.net/images/157/What_we_do_design_1_2e8d9b92b1b20afb1d0f8d6550777aa2.jpg"
      rightimg="https://dxaurk9yhilm4.cloudfront.net/images/158/What_we_do_design_2_2ab4534b0a2984e07d7caeca8808129f.jpg"
      :isreversed="true"
      :isleftimghidden="true"
    />

    <div class="full-image-outer">
      <img
        src="https://dxaurk9yhilm4.cloudfront.net/images/890/YCGolfClubHouse0916_1288_62018727b9e8103a3d5d6c0701991eca.jpg"
        alt="Full Image"
        class="full-image"
      />
    </div>

    <home-welcome
      heading="Dicovery Builders"
      txt="See the beauty in every corner of your new, bespoke home away from home. From fabrics and furniture pieces to floorplans, our professional designers will collaborate closely with you to create an interior living space which reflects your style and unique tastes as well as perfectly complementing your lifestyle."
      rightimg="https://dxaurk9yhilm4.cloudfront.net/images/155/What_we_do_builders_2_2ab4534b0a2984e07d7caeca8808129f.jpg"
      leftimg="https://dxaurk9yhilm4.cloudfront.net/images/153/What_we_do_builders_1_2e8d9b92b1b20afb1d0f8d6550777aa2.jpg"
      :isreversed="false"
      :isleftimghidden="true"
    />

    <explore-footer
      :style="{
        '--bg': `url('https://dxaurk9yhilm4.cloudfront.net/images/160/What_we_do_footer_2_5dabbd1a34149dcaed83515ff1526a0f.jpg')`,
      }"
    />
  </section>
</template>

<script type="module" src="./AboutDlc"></script>

<style scoped lang="scss">
  @import "../../global/style";
  @import "./AboutDlc";
</style>
