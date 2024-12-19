<template>
  <footer class="dt-horizontal-wrapper grid lg:flex dt-gap">
    <NuxtLink to="/">Copy email</NuxtLink>
    <NuxtLink to="/">Schedule a call</NuxtLink>
    <select v-model="$colorMode.preference">
      <option value="system">System</option>
      <option value="light">Light</option>
      <option value="dark">Dark</option>
    </select>
  </footer>
</template>
<style scoped>
select {
  @apply bg-transparent;
}
</style>

<script setup>
const colorMode = useColorMode();

console.log(colorMode.preference);
</script>
