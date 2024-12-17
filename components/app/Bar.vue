<template>
  <nav class="dt-wrapper grid grid-flow-col dt-gap">
    <div class="lg:hidden flex justify-end items-center gap-2">
      <NuxtLink class="text-sm dt-text-hover" to="/">
        <Icon name="uil:bars" class="size-6" />
      </NuxtLink>
    </div>
    <div class="hidden lg:flex flex-col gap-2 items-start">
      <NuxtLink class="text-sm dt-text-hover" to="/">Home</NuxtLink>
      <NuxtLink class="text-sm dt-text-hover" to="/information">
        Information
      </NuxtLink>
    </div>
    <div class="hidden lg:flex flex-col gap-2 items-start">
      <NuxtLink class="text-sm dt-text-hover" to="/work/tag/uiux">
        UI/UX Design
      </NuxtLink>
      <NuxtLink class="text-sm dt-text-hover" to="/work/tag/website">
        Website
      </NuxtLink>
      <NuxtLink class="text-sm dt-text-hover" to="/work/tag/mobile">
        Mobile App
      </NuxtLink>
    </div>
  </nav>
</template>
