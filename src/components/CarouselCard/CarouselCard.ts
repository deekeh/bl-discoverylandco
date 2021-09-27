import { defineComponent } from "vue";

export default defineComponent({
  name: "CarouselCard",
  props: {
    photo: {
      type: String,
    },
    title: {
      type: String,
    },
    subtitle: {
      type: String,
    },
  }
});
