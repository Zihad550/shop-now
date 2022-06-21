<template>
  <Hero />
  <Title>Top Categories</Title>
  <Categories />
</template>

<script>
import Title from "@/components/Title.vue";
import Categories from "./Categories/Categories.vue";
import Hero from "./Hero/Hero.vue";

export default {
  components: {
    Categories,
    Title,
    Hero,
  },
};
</script>
