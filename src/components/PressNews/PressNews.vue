<template>
  <section class="press-news">
    <h1 class="heading">
      Press
    </h1>

    <div class="press-news-cards">
      press news cards
    </div>
    <div class="press-news-cards-mobile">
      press news cards mobile
    </div>

    <div class="press-news-pages">
      <arrow-left @click="previousPage()" />
      <span class="page-number">
        {{ page + 1 }}
        -
        {{ totalPages }}
      </span>
      <arrow-right @click="nextPage()" />
    </div>
  </section>
</template>

<script type="module" src="./PressNews.ts"></script>

<style scoped lang="scss">
  @import "src/global/style";
  @import "./PressNews";
</style>
