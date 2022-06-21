<template>
  <TransitionRoot as="template" :show="showModal">
    <Dialog as="div" class="relative z-10" @close="$emit('close')">
      <TransitionChild
        as="template"
        enter="ease-out duration-300"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="ease-in duration-200"
        leave-from="opacity-100"
        leave-to="opacity-0"
      >
        <div
          class="hidden fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity md:block"
        />
      </TransitionChild>

      <div class="fixed z-10 inset-0 overflow-y-auto">
        <div
          class="flex items-stretch md:items-center justify-center min-h-full text-center md:px-2 lg:px-4"
        >
          <TransitionChild
            as="template"
            enter="ease-out duration-300"
            enter-from="opacity-0 translate-y-4 md:translate-y-0 md:scale-95"
            enter-to="opacity-100 translate-y-0 md:scale-100"
            leave="ease-in duration-200"
            leave-from="opacity-100 translate-y-0 md:scale-100"
            leave-to="opacity-0 translate-y-4 md:translate-y-0 md:scale-95"
          >
            <DialogPanel
              class="flex text-base text-left transform transition w-full md:max-w-2xl md:px-4 md:my-8 lg:max-w-4xl"
            >
              <div
                class="w-full relative flex items-center bg-white px-4 pt-14 pb-8 overflow-hidden shadow-2xl sm:px-6 sm:pt-8 md:p-6 lg:p-8"
              >
                <button
                  type="button"
                  class="absolute top-4 right-4 text-gray-400 hover:text-gray-500 sm:top-8 sm:right-6 md:top-6 md:right-6 lg:top-8 lg:right-8"
                  @click="$emit('close')"
                >
                  <span class="sr-only">Close</span>
                  <XIcon class="h-6 w-6" aria-hidden="true" />
                </button>

                <div
                  class="w-full grid grid-cols-1 gap-y-8 gap-x-6 items-start sm:grid-cols-12 lg:gap-x-8"
                >
                  <div
                    class="aspect-w-2 aspect-h-3 rounded-lg bg-gray-100 overflow-hidden sm:col-span-4 lg:col-span-5"
                  >
                    <img
                      :src="product.src"
                      :alt="product.name"
                      class="object-center object-cover"
                    />
                  </div>
                  <div class="sm:col-span-8 lg:col-span-7">
                    <h2 class="text-2xl font-extrabold text-gray-900 sm:pr-12">
                      {{
                        product.name[0].toUpperCase() +
                        product.name.substring(1)
                      }}
                    </h2>

                    <section aria-labelledby="information-heading" class="mt-2">
                      <h3 id="information-heading" class="sr-only">
                        Product information
                      </h3>

                      <p class="text-2xl text-gray-900">
                        $ {{ product.price }}
                      </p>

                      <!-- Reviews -->
                      <div class="mt-6">
                        <h4 class="sr-only">Reviews</h4>
                        <div class="flex items-center">
                          <div class="flex items-center">
                            <StarIcon
                              v-for="rating in [0, 1, 2, 3, 4]"
                              :key="rating"
                              :class="[
                                product.ratings > rating
                                  ? 'text-gray-900'
                                  : 'text-gray-200',
                                'h-5 w-5 flex-shrink-0',
                              ]"
                              aria-hidden="true"
                            />
                          </div>
                          <p class="sr-only">
                            {{ product.ratings }} out of 5 stars
                          </p>
                          <p
                            class="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500"
                          >
                            {{ product.reviews }} reviews
                          </p>
                        </div>
                      </div>
                    </section>

                    <section aria-labelledby="options-heading" class="mt-5">
                      <h3 id="options-heading" class="sr-only">
                        Product options
                      </h3>

                      <form @submit.prevent="handleSubmit">
                        <!-- Colors -->
                        <div class="flex items-center">
                          <h4 class="text-sm text-gray-900 font-medium mr-2">
                            Color:
                          </h4>

                          <div
                            class="relative p-0.5 rounded-full flex items-center focus:outline-none py-1"
                          >
                            <span class="mr-1">
                              {{ product.colour }}
                            </span>
                            <span
                              :style="{ background: product.colour }"
                              aria-hidden="true"
                              class="h-8 w-8 border border-black border-opacity-20 rounded-full"
                            />
                          </div>
                        </div>

                        <!-- Sizes -->
                        <div class="flex items-center mt-2">
                          <h4 class="text-sm text-gray-900 font-medium">
                            Brand:
                          </h4>
                          <span class="ml-1 text-gray-600">
                            {{ product.Brand }}
                          </span>
                        </div>

                        <button
                          type="submit"
                          class="mt-6 w-full bg-indigo-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                          Add to bag
                        </button>
                      </form>
                    </section>
                  </div>
                </div>
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>

<script>
import {
  Dialog,
  DialogPanel,
  TransitionChild,
  TransitionRoot,
} from "@headlessui/vue";
import { XIcon } from "@heroicons/vue/outline";
import { StarIcon } from "@heroicons/vue/solid";

export default {
  name: "ProductDetails",
  components: {
    Dialog,
    DialogPanel,
    TransitionChild,
    TransitionRoot,
    XIcon,
    StarIcon,
  },

  props: {
    showModal: {
      type: Boolean,
      required: true,
    },
    product: {
      type: Object,
      required: true,
    },
  },

  data() {
    return {
      open: true,
    };
  },

  methods: {
    handleSubmit() {
      console.log(this.product);
    },
  },
};
</script>
