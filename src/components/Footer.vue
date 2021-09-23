<template>
  <footer class="footer">
    <div class="footer-data">
      <footer-logo />
      <div class="tables">
        <div class="contact table">
          <header>
            GET IN TOUCH
          </header>
          <address class="content">
            <a href="tel:(480) 624-5200">
              (480) 624-5200
            </a>
            <a href="mailto:mail@discoverylandco.com">
              mail@discoverylandco.com
            </a>
          </address>
        </div>
        <div class="about table">
          <router-link :to="{ name: 'Home' }">
            About DLC
          </router-link>
          <router-link :to="{ name: 'Home' }">
            Our Worlds
          </router-link>
          <router-link :to="{ name: 'Home' }">
            Experiences
          </router-link>
          <router-link :to="{ name: 'Gallery' }">
            Gallery
          </router-link>
          <router-link :to="{ name: 'Home' }">
            Press
          </router-link>
        </div>
        <div class="magazine table">
          <router-link :to="{ name: 'Home' }">
            Magazine
          </router-link>
          <router-link :to="{ name: 'Home' }">
            Careers
          </router-link>
          <router-link :to="{ name: 'Home' }">
            Foundation
          </router-link>
          <router-link :to="{ name: 'Home' }">
            Company
          </router-link>
          <router-link :to="{ name: 'Home' }">
            Contact
          </router-link>
          <router-link :to="{ name: 'Home' }">
            Privacy
          </router-link>
        </div>
      </div>
    </div>
    <div class="footer-tnc">
      &copy; Discovery Land Company. All rights reserved.
    </div>
  </footer>
</template>

<script lang="ts">
  import FooterLogo from "@/components/svg/FooterLogo.vue";

  import { defineComponent } from "vue";
  export default defineComponent({
    name: "Footer",
    components: {
      FooterLogo,
    },
  });
</script>

<style scoped lang="scss">
  .footer {
    background: #161f1e;
    color: #fff;
    padding: 6rem;
    @media screen and (max-width: 500px) {
      padding: 3rem;
    }

    display: flex;
    flex-direction: column;
    gap: 3rem;

    * {
      font-size: 0.9rem;
    }
    a {
      text-decoration: none;
      color: #fff;
    }

    .footer-data {
      display: flex;
      justify-content: space-between;
      @media screen and (max-width: 1000px) {
        flex-direction: column;
        row-gap: 4rem;
      }

      .tables {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 8rem;

        @media screen and (max-width: 1000px) {
          column-gap: 4rem;
          row-gap: 4rem;
          .contact {
            grid-column: span 3;
          }
        }

        .table {
          display: flex;
          flex-direction: column;
          gap: 1rem;

          header {
            color: hsla(0, 0%, 100%, 0.75);
          }

          .content {
            display: flex;
            flex-direction: column;
            gap: 1rem;
            font-style: normal;
          }
        }
      }

      svg {
        height: 3rem;
        @media screen and (max-width: 1000px) {
          align-self: flex-start;
        }
      }
    }

    .footer-tnc {
      color: hsla(0, 0%, 100%, 0.75);
    }
  }
</style>
