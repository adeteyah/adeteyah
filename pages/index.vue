<template>
  <NuxtLayout name="grid">
    <h1>Nuxt Routing set up successfully!</h1>
    <p>Current route: {{ route.path }}</p>
    <a href="https://nuxt.com/docs/getting-started/routing" target="_blank"
      >Learn more about Nuxt Routing</a
    >
  </NuxtLayout>
</template>
<script setup lang="ts">
const route = useRoute();
</script>
