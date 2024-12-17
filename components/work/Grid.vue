<template>
  <div>
    <div class="grid lg:grid-cols-4 dt-gap">
      <div
        v-for="work in shouldSlice ? workData.slice(0, 4) : workData"
        :key="work.id"
      >
        <nuxt-link class="group grid dt-gap" :to="`/work/${work.id}`">
          <div
            class="relative bg-lightgray lg:group-hover:bg-gray flex items-center aspect-video px-6 pt-8 lg:group-hover:pt-6 dt-transition-fade"
          >
            <img
              class="object-cover w-full h-full rounded-t-md"
              :src="work.image"
              :alt="work.title"
            />
          </div>
          <div class="grid dt-gap">
            <h3
              class="text-2xl font-semibold lg:opacity-75 lg:group-hover:opacity-100 dt-transition-fade"
            >
              {{ work.title }}
            </h3>
            <hr class="opacity-10" />
            <div
              class="flex justify-between opacity-50 lg:group-hover:opacity-100 dt-transition-fade"
            >
              <p>{{ work.service }}</p>
              <p>{{ work.year }}</p>
            </div>
          </div>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import work from "~/assets/data/work.js";
const props = defineProps({
  shouldSlice: {
    type: Boolean,
    default: true,
  },
});
const workData = work;
</script>
