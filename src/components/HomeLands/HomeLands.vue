<template>
  <section id="home-lands">
    <!-- header section -->
    <section class="header">
      <h1 class="title">
        <span class="lands-of">
          Lands of
        </span>
        <span class="discovery">
          Discovery
        </span>
      </h1>

      <div class="subtitle">
        <p>
          A world away from the day-to-day. Your escape. Your haven. Your world.
        </p>
        <p>
          Explore the map below and take a journey to our communities.
        </p>
      </div>

      <nav class="globe-nav">
        <button
          v-for="(land, idx) in lands"
          :key="idx"
          class="animated-hr black globe-nav-item"
          v-html="land.continent"
          @click="setContinent(idx)"
          :class="[selectedContinent === idx ? 'router-link-active' : '']"
        ></button>
      </nav>
    </section>

    <!-- map section -->
    <section class="map">
      <img
        :src="lands[selectedContinent].globeImage"
        alt="Globe showing USA"
        class="globe-image"
      />
      <aside class="location-data">
        <div class="nav">
          <button>
            <arrow-left
              @click="previousPlace()"
              class="nav-previous"
              color="#fff"
            />
          </button>
          <button>
            <arrow-right @click="nextPlace()" class="nav-next" color="#fff" />
          </button>
        </div>

        <div class="weather">
          <div class="temperature">
            <sun color="#fff" />
            <div
              class="value text-grey"
              v-html="
                lands[selectedContinent].locations[selectedPlace].temperature
              "
            ></div>
          </div>
          <div class="winds">
            <wind color="#fff" />
            <div
              class="value text-grey"
              v-html="lands[selectedContinent].locations[selectedPlace].winds"
            ></div>
          </div>
          <div class="compass">
            <compass color="#fff" />
            <div
              class="value text-grey"
              v-html="lands[selectedContinent].locations[selectedPlace].compass"
            ></div>
          </div>
        </div>

        <div class="location">
          <div
            class="title text-grey"
            v-html="
              lands[selectedContinent].locations[selectedPlace].locationTitle
            "
          ></div>
          <div
            class="subtitle"
            v-html="
              lands[selectedContinent].locations[selectedPlace].locationSubtitle
            "
          ></div>
        </div>

        <div class="coordinates">
          <location-pin color="#fff" />
          <span
            class="coordinate text-grey"
            v-html="
              lands[selectedContinent].locations[selectedPlace].coordinate
            "
          >
          </span>
        </div>

        <div
          class="image"
          :style="{
            backgroundImage: `url(${lands[selectedContinent].locations[selectedPlace].image})`,
          }"
        ></div>
      </aside>
    </section>
  </section>
</template>

<script type="module" src="./HomeLands.ts"></script>

<style scoped lang="scss">
  @import "../../global/style";
  @import "./HomeLands";
</style>
