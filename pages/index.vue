<template>
  <div class="grid grid-cols-4 grid-rows-3 gap-4 h-[100svh]">
    <div class="col-span-2 row-span-2">1</div>
    <div class="col-span-2 row-span-3 col-start-3">2</div>
    <div class="col-span-2 row-start-3">3</div>
  </div>
</template>
<script setup lang="ts">
const route = useRoute();
</script>
