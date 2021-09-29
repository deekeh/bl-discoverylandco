<template>
  <section id="bottom">
    <div class="bottom-cards">
      <bottom-card
        v-for="(card, idx) in cards"
        :key="idx"
        :heading="card.name"
        :style="{
          '--bg': `url(${card.image})`,
        }"
      />
    </div>
  </section>
</template>

<script type="module" src="./HomeBottom.ts"></script>

<style scoped lang="scss">
  @import "./HomeBottom";
</style>
