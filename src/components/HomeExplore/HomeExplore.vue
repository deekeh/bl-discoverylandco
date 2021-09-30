<template>
  <section id="explore">
    <div class="main">
      <h1 class="header">
        <span class="explore" v-html="heading"></span>
        <span class="our-worlds" v-html="subheading"></span>
      </h1>
      <div class="nav-buttons">
        <button>
          <arrow-left />
        </button>
        <button>
          <arrow-right />
        </button>
      </div>
    </div>
    <div class="carousel">
      <div class="carousel-inner">
        <carousel-card
          v-for="(card, idx) in cards"
          :key="idx"
          :photo="card.photo"
          :title="card.title"
          :subtitle="card.subtitle"
        />
        <carousel-card :photo="cards[0].photo" :title="cards[0].title" :subtitle="cards[0].subtitle"/>
        <carousel-card :photo="cards[1].photo" :title="cards[1].title" :subtitle="cards[1].subtitle"/>
        <carousel-card :photo="cards[2].photo" :title="cards[2].title" :subtitle="cards[2].subtitle"/>
      </div>
    </div>
  </section>
</template>

<script type="module" src="./HomeExplore.ts"></script>

<style scoped lang="scss">
  @import "/src/global/_style.scss";
  @import "./HomeExplore";
</style>
