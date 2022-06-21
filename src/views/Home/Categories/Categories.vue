<template>
  <div class="container mx-auto mt-10">
    <Title>Top Categories</Title>
    <div
      v-if="categories"
      class="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-3"
    >
      <!-- category -->
      <div
        class="shadow-md p-2 rounded-lg hover:shadow-xl hover:cursor-pointer transition-all flex flex-col items-center"
        v-for="category in categories"
        :key="category._id"
        @click="handleNavigate(category.name)"
      >
        <img :src="category.src" alt="" />
        <h4 class="mt-1 text-center">{{ category.name.toUpperCase() }}</h4>
      </div>
    </div>
    <div v-else>...loading</div>
    <p v-if="error">{{ error }}</p>
  </div>
</template>

<script>
import axios from "axios";
import Title from "../../../components/Title.vue";
export default {
  name: "Categories",
  components: {
    Title,
  },
  data() {
    return {
      categories: null,
      error: null,
    };
  },
  methods: {
    handleNavigate(category) {
      this.$router.push(`/products/${category}`);
    },
  },
  mounted() {
    axios("https://limitless-crag-38673.herokuapp.com/catagories")
      .then((res) => (this.categories = res.data))
      .catch((error) => (this.error = error));
  },
};
</script>
