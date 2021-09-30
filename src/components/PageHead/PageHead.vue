<template>
  <section class="page-head">
    <p v-for="(paragraph, idx) in paragraphs" :key="idx" v-html="paragraph"></p>
  </section>
</template>

<script type="module" src="./PageHead.ts"></script>

<style scoped lang="scss">
  @import "src/global/style";
  @import "./PageHead";
</style>
