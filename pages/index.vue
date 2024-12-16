<template>
  <NuxtLayout name="fullscreen">
    <NuxtLayout name="wrapper">
      <AppBar />
      <BaseTextLarge>Nuxt Routing set up successfully!</BaseTextLarge>
      <NuxtLayout name="flex-col" class="bg-[red] h-full">
        <div class="bg-slate-50">Box</div>
        <div>Box</div>
      </NuxtLayout>
    </NuxtLayout>
  </NuxtLayout>
</template>
<script setup lang="ts">
const route = useRoute();
</script>
