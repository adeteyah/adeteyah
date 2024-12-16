<template>
  <NuxtLayout name="fullscreen">
    <NuxtLayout name="wrapper">
      <AppBar />
      <BaseTextLarge>Nuxt Routing set up successfully!</BaseTextLarge>
      <p>Current route: {{ route.path }}</p>
      <a href="https://nuxt.com/docs/getting-started/routing" target="_blank"
        >Learn more about Nuxt Routing</a
      >
    </NuxtLayout>
  </NuxtLayout>
</template>
<script setup lang="ts">
const route = useRoute();
</script>
