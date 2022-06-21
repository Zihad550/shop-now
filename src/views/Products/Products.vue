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
      @click="openModal(product)"
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
  <ProductDetails
    :showModal="showModal"
    @close="closeModal"
    :product="product"
  />
</template>
<script>
import axios from "axios";
import ProductDetails from "./ProductDetails/ProductDetails.vue";

export default {
  name: "Products",
  components: {
    ProductDetails,
  },

  data() {
    return {
      products: null,
      showModal: false,
      product: null,
    };
  },

  props: {
    category: {
      type: String,
      required: true,
    },
  },

  methods: {
    openModal(product) {
      this.showModal = true;
      this.product = product;
    },
    closeModal() {
      this.showModal = false;
    },
  },

  mounted() {
    axios(
      `https://limitless-crag-38673.herokuapp.com/products?category=${this.category}`
    ).then((res) => (this.products = res.data));
  },
};
</script>
