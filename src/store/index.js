import axios from "axios";
import { createStore } from "vuex";

export default createStore({
  state: {
    // = data
    categories: null,
  },
  getters: {
    // = computed properties
  },
  mutations: {
    // call the actions
    /* setCategories(state, payload) {
      state.categories = payload;
    }, */
  },
  actions: {
    // = methods
    fetchCategories() {
      axios
        .get("https://limitless-crag-38673.herokuapp.com/catagories")
        .then((res) => (this.state.categories = res.data));
    },
  },
  modules: {},
});
