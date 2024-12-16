<template>
  <NuxtLayout name="fullscreen" class="bg-[purple]">
    <NuxtLayout name="wrapper" class="h-full bg-[yellow]">
      <NuxtLayout name="wrapper" class="bg-[red]">
        <AppBar />
      </NuxtLayout>
      <div class="grid grid-cols-2">
        <div>
          <NuxtLayout name="wrapper" class="bg-slate-50 h-full">
            <BaseTextLarge>Nuxt Routing set up successfully!</BaseTextLarge>
            <BaseTextLarge>Nuxt Routing set up successfully!</BaseTextLarge>
          </NuxtLayout>
        </div>
        <div class="h-full">
          <NuxtLayout name="wrapper"> Image </NuxtLayout>
        </div>
      </div>
    </NuxtLayout>
  </NuxtLayout>
</template>
<script setup lang="ts">
const route = useRoute();
</script>
