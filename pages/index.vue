<template>
  <div
    class="lg:grid grid-cols-4 grid-rows-3 dt-gap h-[100svh] dt-wrapper-base"
  >
    <div class="col-span-2 row-span-2">
      <div class="bg-slate-50 h-full">Test</div>
    </div>
    <div class="col-span-2 row-span-3 col-start-3">
      <div class="bg-slate-50 h-full">Test</div>
    </div>
    <div class="col-span-2 row-start-3">
      <div class="bg-slate-50 h-full">Test</div>
    </div>
  </div>
</template>
<script setup lang="ts">
const route = useRoute();
</script>
