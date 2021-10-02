<template>
  <div class="press-latest-card-outer">
    <div class="press-latest-card">
      <div class="card-back">
        <div class="image">
          <img
            :src="latestNewsData[pageNumber].image"
            alt="Latest News Image"
          />
        </div>
        <!-- ::after -->
      </div>
      <div class="card-front">
        <div class="heading">
          <div class="title">News</div>
          <div class="subtitle" v-html="latestNewsData[pageNumber].subtitle"></div>
        </div>
        <div class="content" v-html="latestNewsData[pageNumber].content">
    
        </div>
        <div class="button">
          <button>Read Article</button>
        </div>
      </div>
    </div>

    <!-- change page numbers -->
    <div class="pages">
      <arrow-left @click="previousPage()" />
      <div class="page-number">
        {{ pageNumber + 1 }}
        -
        {{ latestNewsData.length }}
      </div>
      <arrow-right @click="nextPage()" />
    </div>
  </div>
</template>

<script type="module" src="./PressLatestCard.ts"></script>

<style scoped lang="scss">
  @import "src/global/style";
  @import "./PressLatestCard";
</style>
