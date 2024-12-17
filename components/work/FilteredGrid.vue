<template>
  <div>
    <div class="grid lg:grid-cols-4 dt-gap-gallery">
      <div v-for="work in workData" :key="work.id">
        <nuxt-link class="group grid gap-2" :to="`/work/${work.id}`">
          <div
            class="relative bg-lightgray lg:group-hover:bg-gray flex items-center aspect-video px-6 pt-8 lg:group-hover:pt-6 dt-transition-fade"
          >
            <img
              class="object-cover w-full h-full rounded-t-md"
              :src="work.image"
              :alt="work.title"
            />
          </div>
          <div class="grid gap-1">
            <h3
              class="text-lg font-semibold lg:opacity-50 lg:group-hover:opacity-100 dt-transition-fade"
            >
              {{ work.title }}
            </h3>
            <UiDivider />
            <div
              class="text-sm flex justify-between opacity-25 lg:group-hover:opacity-100 dt-transition-fade"
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
const workData = work;
</script>
