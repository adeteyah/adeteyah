<template>
  <div class="flex bg-[red]">
    <div class="grid lg:grid-cols-4 dt-gap-gallery">
      <div v-for="work in workData.slice(0, 4)" :key="work.id">
        <nuxt-link class="group grid gap-2" :to="`/work/${work.id}`">
          <div class="relative flex items-center aspect-video">
            <img
              class="object-cover w-full h-full rounded-md"
              :src="work.image"
              :alt="work.title"
            />
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
