<template>
  <NuxtLayout name="fullscreen" class="bg-[purple]">
    <NuxtLayout name="wrapper" class="h-full bg-[yellow]">
      <NuxtLayout name="wrapper" class="bg-[red]">
        <AppBar />
      </NuxtLayout>
      <div class="grid grid-cols-2">
        <NuxtLayout name="wrapper" class="h-full">
          <div class="self-stretch">Test</div>
          <div class="self-stretch">Test</div>
          <div class="self-stretch">Test</div>
        </NuxtLayout>
        <NuxtLayout name="wrapper">
          <div class="self-stretch">Test</div>
        </NuxtLayout>
      </div>
    </NuxtLayout>
  </NuxtLayout>
</template>
<script setup lang="ts">
const route = useRoute();
</script>
