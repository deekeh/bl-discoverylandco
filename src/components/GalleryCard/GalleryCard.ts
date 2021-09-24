import { defineComponent } from "vue";
export default defineComponent({
  name: "GalleryCard",
  props: {
    pic: {
      type: String,
    },
    txt: {
      type: String,
      // required: true,
    },
  },
});
