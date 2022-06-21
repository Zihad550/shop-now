<template>
  <!-- hero section -->
  <Hero />

  <!-- top catagories section -->

  <Categories />

  <!-- footer section -->
  <Footer />
</template>

<script>
import Categories from "./Categories/Categories.vue";
import Footer from "./Footer/Footer.vue";
import Hero from "./Hero/Hero.vue";

export default {
  components: {
    Categories,
    Footer,
    Hero,
  },
};
</script>
