import ArrowLeft from "@/components/svg/ArrowLeft.vue";
import ArrowRight from "@/components/svg/ArrowRight.vue";

// svg
import Sun from "@/components/svg/Sun.vue";
import Wind from "@/components/svg/Wind.vue";
import Compass from "@/components/svg/Compass.vue";
import LocationPin from "@/components/svg/LocationPin.vue";

import { defineComponent } from "vue";

export default defineComponent({
  name: "HomeLands",
  components: {
    ArrowLeft,
    ArrowRight,
    Sun,
    Wind,
    Compass,
    LocationPin,
  },
  data() {
    return {
      lands: [
        {
          continent: "North America & Caribbean",
          globeImage: require("@/assets/home-lands/globe-usa.jpg"),
          locations: [
            {
              temperature: "73&deg; F",
              winds: "1.99 mph",
              compass: "135&deg;",
              locationTitle: "Austin, Texas",
              locationSubtitle: "Driftwood",
              coordinate: "30.139339&deg; N / -98.022342&deg; W",
              image: require("@/assets/home-lands/america-0.jpg"),
            },
            {
              temperature: "57&deg; F",
              winds: "5.19 mph",
              compass: "209&deg;",
              locationTitle: "Nashville, Tennessee",
              locationSubtitle: "Troubadour",
              coordinate: "35.828904&deg; N / -86.679158&deg; W",
              image: require("@/assets/home-lands/america-1.jpg"),
            },
            {
              temperature: "83&deg; F",
              winds: "9.37 mph",
              compass: "238&deg;",
              locationTitle: "Rio San Juan, Dominican Republic",
              locationSubtitle: "Playa Grande",
              coordinate: "19.3830&deg; N / 70.0407&deg; W",
              image: require("@/assets/home-lands/america-2.jpg"),
            },
            {
              temperature: "46&deg; F",
              winds: "1.99 mph",
              compass: "189&deg;",
              locationTitle: "Coeur d’Alene, Idaho",
              locationSubtitle: "Gozzer Ranch",
              coordinate: "47.617997&deg; N / -116.766169&deg; W",
              image: require("@/assets/home-lands/america-3.jpg"),
            },
          ],
        },
        {
          continent: "Hawaii",
          globeImage: require("@/assets/home-lands/globe-hawaii.jpg"),
          locations: [
            {
              temperature: "73&deg; F",
              winds: "8.37 mph",
              compass: "36&deg;",
              locationTitle: "Maui, Hawaii",
              locationSubtitle: "Mākena",
              coordinate: "20.690308&deg; N / -156.440582&deg; W",
              image: require("@/assets/home-lands/hawaii-0.jpg"),
            },
            {
              temperature: "75&deg; F",
              winds: "4.61 mph",
              compass: "0&deg;",
              locationTitle: "Kohala, Hawaii",
              locationSubtitle: "Kūki'o",
              coordinate: "19.817312&deg; N / -155.998547&deg; W",
              image: require("@/assets/home-lands/hawaii-1.jpg"),
            },
            {
              temperature: "20&deg; F",
              winds: "13.15 mph",
              compass: "318&deg;",
              locationTitle: "Comporta, Portugal",
              locationSubtitle: "CostaTerra",
              coordinate: "38.198750&deg; N / -8.764298&deg; W",
              image: require("@/assets/home-lands/hawaii-2.jpg"),
            },
          ],
        },
        {
          continent: "Europe",
          globeImage: require("@/assets/home-lands/globe-europe.jpg"),
          locations: [
            {
              temperature: "731&deg; F",
              winds: "11.99 mph",
              compass: "135&deg;",
              locationTitle: "Austin, Texas",
              locationSubtitle: "Driftwood",
              coordinate: "30.139339&deg; N / -98.022342&deg; W",
              image: require("@/assets/home-lands/america-0.jpg"),
            },
            {
              temperature: "571&deg; F",
              winds: "51.19 mph",
              compass: "209&deg;",
              locationTitle: "Nashville, Tennessee",
              locationSubtitle: "Troubadour",
              coordinate: "35.828904&deg; N / -86.679158&deg; W",
              image: require("@/assets/home-lands/america-1.jpg"),
            },
            {
              temperature: "831&deg; F",
              winds: "91.37 mph",
              compass: "238&deg;",
              locationTitle: "Rio San Juan, Dominican Republic",
              locationSubtitle: "Playa Grande",
              coordinate: "19.3830&deg; N / 70.0407&deg; W",
              image: require("@/assets/home-lands/america-0.jpg"),
            },
          ],
        },
      ],
      selectedContinent: 0,
      selectedPlace: 0,
    };
  },
  methods: {
    setContinent(idx: number) {
      this.selectedPlace = 0;
      this.selectedContinent = idx;
    },
    nextPlace() {
      const totalPlaces = this.lands[this.selectedContinent].locations.length;
      this.selectedPlace = (this.selectedPlace + 1) % totalPlaces;
    },
    previousPlace() {
      const totalPlaces = this.lands[this.selectedContinent].locations.length;
      this.selectedPlace = (this.selectedPlace + totalPlaces - 1) % totalPlaces;
    },
  },
});
