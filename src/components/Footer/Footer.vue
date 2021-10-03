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
            <a class="animated-hr" href="tel:(480) 624-5200">
              (480) 624-5200
            </a>
            <a href="mailto:mail@discoverylandco.com">
              mail@discoverylandco.com
            </a>
          </address>
        </div>
        <div class="about table">
          <router-link class="animated-hr" :to="{ name: 'About-Dlc' }">
            About DLC
          </router-link>
          <router-link class="animated-hr" :to="{ name: 'Our-Worlds' }">
            Our Worlds
          </router-link>
          <router-link class="animated-hr" :to="{ name: 'Experiences' }">
            Experiences
          </router-link>
          <router-link class="animated-hr" :to="{ name: 'Gallery' }">
            Gallery
          </router-link>
          <router-link class="animated-hr" :to="{ name: 'Press' }">
            Press
          </router-link>
        </div>
        <div class="magazine table">
          <router-link class="animated-hr" :to="{ name: 'Home' }">
            Magazine
          </router-link>
          <router-link class="animated-hr" :to="{ name: 'Home' }">
            Careers
          </router-link>
          <router-link class="animated-hr" :to="{ name: 'Home' }">
            Foundation
          </router-link>
          <router-link class="animated-hr" :to="{ name: 'Home' }">
            Company
          </router-link>
          <router-link class="animated-hr" :to="{ name: 'Home' }">
            Contact
          </router-link>
          <router-link class="animated-hr" :to="{ name: 'Home' }">
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

<script type="module" src="./Footer.ts"></script>

<style scoped lang="scss">
  @import "./Footer";
</style>
