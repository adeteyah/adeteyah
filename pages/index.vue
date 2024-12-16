<template>
  <NuxtLayout name="fullscreen">
    <NuxtLayout name="wrapper">
      <AppBar />
      <BaseTextLarge>Nuxt Routing set up successfully!</BaseTextLarge>
      <div class=""></div>
    </NuxtLayout>
  </NuxtLayout>
</template>
<script setup lang="ts">
const route = useRoute();
</script>
