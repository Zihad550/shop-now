<template>
  <div v-if="products">
    {{ products }}
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
