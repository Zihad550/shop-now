<template>
  <div
    style="background: #eff0f3"
    class="h-20 flex items-center justify-between px-5"
  >
    <!-- large screen menu start -->
    <div class="hidden md:flex items-center lg:mx-auto">
      <div
        class="mx-3"
        v-for="navigation in navigations"
        :key="navigation.name"
      >
        <router-link
          class="text-md transition-all hover:text-blue-500"
          :class="{ 'text-2xl': navigation.label === 'logo' }"
          :to="navigation.to"
        >
          {{ navigation.name }}
        </router-link>
      </div>
    </div>
    <!-- large screen menu end -->

    <!-- small screen menu start -->
    <div
      class="md:hidden flex justify-between items-center w-full px-5 relative"
    >
      <router-link to="/" class="text-2xl">Shop Now</router-link>
      <!-- menu togglers -->
      <!-- open menu -->
      <button
        @click="toggleMobileMenu"
        v-show="!showMenu"
        class="hover:bg-gray-200 p-2 rounded-full transition-all"
      >
        <MenuIcon class="w-7 h-7" />
      </button>
      <!-- close menu -->
      <button
        v-show="showMenu"
        @click="toggleMobileMenu"
        class="hover:bg-gray-200 p-2 rounded-full transition-all"
      >
        <XIcon class="w-7 h-7" />
      </button>
      <!-- menu -->
      <div
        v-show="showMenu"
        class="absolute top-10 right-0 bg-white p-5 w-full transition-all"
      >
        <div
          class="mx-3 mb-2"
          v-for="navigation in navigations"
          :key="navigation.name"
        >
          <router-link
            class="text-md hover:ml-1 transition-all hover:text-blue-500"
            :class="{ hidden: navigation.label === 'logo' }"
            :to="navigation.to"
          >
            {{ navigation.name }}
          </router-link>
        </div>
      </div>
    </div>
    <!-- small screen menu end -->

    <!-- authentication -->
    <router-link
      to="/login"
      type="button"
      class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
    >
      Login
    </router-link>
  </div>
</template>

<script>
import { MenuIcon, XIcon } from "@heroicons/vue/outline";

export default {
  components: {
    MenuIcon,
    XIcon,
  },

  data() {
    return {
      navigations: [
        { name: "Shop Now", to: "/", label: "logo" },
        { name: "Product", to: "/" },
        { name: "Features", to: "/" },
        { name: "Marketplace", to: "/" },
        { name: "Company", to: "/" },
      ],
      showMenu: false,
    };
  },

  methods: {
    toggleMobileMenu() {
      this.showMenu = !this.showMenu;
      console.log(this.showMenu);
    },
  },
};
</script>
