import { defineComponent } from "vue";
export default defineComponent({
  name: "OurWorldsCard",
  props: {
    photo: {
      type: String,
    },
    text: {
      type: String,
    },
    subtext: {
      type: String,
    },
  },
});
