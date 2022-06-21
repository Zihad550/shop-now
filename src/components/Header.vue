<template>
  <div
    style="background: #eff0f3"
    class="h-20 flex items-center justify-center"
  >
    <div class="hidden"></div>

    <!-- large screen menu start -->
    <div class="hidden md:flex items-center">
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
        { name: "Product", to: "/" },
        { name: "Features", to: "/" },
        { name: "Shop Now", to: "/", label: "logo" },
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
