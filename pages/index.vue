<template>
  <NuxtLayout name="fullscreen">
    <NuxtLayout name="wrapper">
      <NuxtLayout name="wrapper" class="bg-slate-50">
        <AppBar />
      </NuxtLayout>
      <div class="grid grid-cols-2">
        <div>
          <NuxtLayout name="wrapper" class="bg-slate-50">
            <BaseTextLarge>Nuxt Routing set up successfully!</BaseTextLarge>
            <BaseTextLarge>Nuxt Routing set up successfully!</BaseTextLarge>
          </NuxtLayout>
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
