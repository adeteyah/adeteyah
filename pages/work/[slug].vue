<template>
  <div class="grid gap-12">
    <div class="grid lg:grid-cols-2">
      <div class="grid gap-4">
        <img
          class="object-cover w-full h-full"
          src="https://dennissnellenberg.com/assets/img/DSC07312-2.jpg"
        />
        <img
          class="object-cover w-full h-full"
          src="https://dennissnellenberg.com/assets/img/DSC07312-2.jpg"
        />
        <img
          class="object-cover w-full h-full"
          src="https://dennissnellenberg.com/assets/img/DSC07312-2.jpg"
        />
      </div>
      <div class="p-24 flex flex-col gap-8">
        <p class="text-8xl leading-relaxed">Bruce Mau Design</p>
        <p class="text-2xl leading-9">Bruce Mau Design</p>
        <div class="grid grid-cols-2 gap-4">
          <div>
            <p class="text-2xl leading-9">Info</p>
            <p class="text-2xl leading-9">
              Bruce Mau Design is an awards winning brand and design studio
              based out of Toronto.
            </p>
          </div>
          <div>
            <p class="text-2xl leading-9">Info</p>
            <p class="text-2xl leading-9">
              Bruce Mau Design is an awards winning brand and design studio
              based out of Toronto.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: "work-detail",
});
</script>
