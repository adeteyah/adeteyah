<template>
  <NuxtLayout name="fullscreen">
    <NuxtLayout name="wrapper">
      <AppBar />
      <div class="grid grid-cols-2">
        <div>
          <div class="bg-slate-50 h-screen">
            <BaseTextLarge>Nuxt Routing set up successfully!</BaseTextLarge>
          </div>
          <BaseTextLarge>Nuxt Routing set up successfully!</BaseTextLarge>
        </div>
        <div>
          <NuxtLayout name="wrapper"> Image </NuxtLayout>
        </div>
      </div>
    </NuxtLayout>
  </NuxtLayout>
</template>
<script setup lang="ts">
const route = useRoute();
</script>
