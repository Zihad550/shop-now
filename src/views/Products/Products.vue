<template>
  <div
    v-if="products"
    class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 container mx-auto my-5"
  >
    <!-- {{ products }} -->
    <!-- product -->
    <div
      class="shadow-md hover:shadow-lg hover:cursor-pointer"
      v-for="product in products"
      style="max-width: 300px"
      :key="product._id"
    >
      <img :src="product.src" alt="" />
      <!-- body -->
      <div class="flex justify-between p-3">
        <div>
          <h4>{{ product.name }}</h4>
          <p class="mt-1 text-sm text-gray-500">{{ product.colour }}</p>
        </div>
        <p class="text-sm font-medium text-gray-900">$ {{ product.price }}</p>
      </div>
    </div>
  </div>
  <div v-else>...loading</div>
</template>
<script>
import axios from "axios";

export default {
  name: "Products",

  data() {
    return {
      products: null,
    };
  },

  props: {
    category: {
      type: String,
      required: true,
    },
  },

  mounted() {
    axios(
      `https://limitless-crag-38673.herokuapp.com/products?category=${this.category}`
    ).then((res) => (this.products = res.data));
  },
};
</script>
