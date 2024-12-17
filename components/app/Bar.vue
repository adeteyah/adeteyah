<template>
  <nav class="dt-wrapper grid grid-flow-col dt-gap">
    <div class="lg:hidden flex justify-between gap-2">
      <NuxtLink class="text-sm dt-text-hover" to="/">Menu</NuxtLink>
    </div>
    <div class="hidden lg:flex flex-col gap-2">
      <NuxtLink class="text-sm dt-text-hover" to="/">Home</NuxtLink>
      <NuxtLink class="text-sm dt-text-hover" to="/work">Information</NuxtLink>
    </div>
    <div class="hidden lg:flex flex-col gap-2">
      <NuxtLink class="text-sm dt-text-hover" to="/work">UI/UX Design</NuxtLink>
      <NuxtLink class="text-sm dt-text-hover" to="/">Website</NuxtLink>
      <NuxtLink class="text-sm dt-text-hover" to="/">Mobile App</NuxtLink>
    </div>
  </nav>
</template>
