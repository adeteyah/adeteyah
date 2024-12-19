<template>
  <div>
    <div class="grid lg:grid-cols-6 dt-gap-gallery">
      <div v-for="work in workData" :key="work.id">
        <nuxt-link class="group/card grid gap-3" :to="`/work/${work.id}`">
          <div
            class="relative flex items-center aspect-video px-5 pt-7 group-hover/card:pt-5 bg-black/10 group-hover/card:bg-black/25 dark:bg-white/10 dark:group-hover/card:bg-white/25 transition-all duration-400"
          >
            <img
              class="object-cover w-full h-full"
              :src="work.image"
              :alt="work.title"
            />
          </div>
          <div
            class="grid gap-2 lg:opacity-50 lg:group-hover/card:opacity-100 dt-transition-opacity"
          >
            <div class="flex justify-between items-center">
              <p class="text-lg font-semibold">{{ work.title }}</p>
              <Icon
                name="rivet-icons:arrow-up-right"
                class="text-lg opacity-0 lg:group-hover/card:opacity-100 dt-transition-opacity"
              />
            </div>
            <div class="flex justify-between">
              <p class="text-sm">{{ work.service }}</p>
              <p class="text-sm">{{ work.year }}</p>
            </div>
          </div>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import work from "~/assets/data/work.js";
const workData = work;
</script>
