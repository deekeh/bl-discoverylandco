import Logo from "../svg/Logo.vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "Navbar",
  components: {
    Logo,
  },
  data() {
    return {
      isToggled: false,
    };
  },
});
