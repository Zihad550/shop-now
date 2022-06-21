<template>
  <div class="flex flex-col lg:flex-row">
    <main class="my-auto lg:w-1/2 xl:w-2/3">
      <div class="text-center lg:w-2/3 mx-auto my-10">
        <h1
          class="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl lg:text-6xl"
        >
          <span class="block xl:inline">Welcome to Shop Now</span>
          {{ " " }}
          <span class="block text-indigo-600 xl:inline">Your online shop</span>
        </h1>
        <p
          class="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg md:mt-5 md:text-xl lg:mx-0"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
          vitae a nisi ut soluta atque qui ad tempora vel? Corporis aspernatur
        </p>
      </div>
    </main>
    <div class="lg:w-1/2 mt-2 md:mt-0 xs:w-1/3">
      <img
        class="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
        src="https://i.ibb.co/cbMFBKg/service-3.png"
        alt=""
      />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      navigation: [
        { name: "Product", to: "/" },
        { name: "Features", to: "/" },
        { name: "Marketplace", to: "/" },
        { name: "Company", to: "/" },
      ],
    };
  },
};
</script>
