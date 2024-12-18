<template>
  <nav class="hidden dt-wrapper lg:flex dt-gap">
    <div class="flex flex-1 flex-col gap-2 items-start">
      <NuxtLink class="text-sm dt-text-hover" to="/">Work</NuxtLink>
      <NuxtLink class="text-sm dt-text-hover" to="/information">
        Information
      </NuxtLink>
    </div>
    <div
      class="flex flex-1 flex-col gap-2 items-start"
      v-if="/^\/$|^\/work\//.test($route.path)"
    >
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
    <div
      class="flex flex-1 flex-col gap-2 items-start"
      v-if="$route.path == '/information'"
    >
      <NuxtLink class="text-sm dt-text-hover" to="/work/tag/uiux">
        UI/UX Desisssgn
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
