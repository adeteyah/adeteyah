<template>
  <nav class="hidden dt-wrapper lg:flex dt-gap">
    <div class="flex flex-1 flex-col gap-2 items-start">
      <NuxtLink
        class="text-sm dt-text-hover"
        :class="{ 'font-bold': $route.path === '/' }"
        to="/"
        >Work</NuxtLink
      >
      <NuxtLink
        class="text-sm dt-text-hover"
        :class="{ 'font-bold': $route.path === '/information' }"
        to="/information"
      >
        Information
      </NuxtLink>
    </div>
    <div
      class="flex flex-1 flex-col gap-2 items-start"
      v-if="/^\/$|^\/work\//.test($route.path)"
    >
      <NuxtLink
        class="text-sm dt-text-hover"
        :class="{ 'font-bold': $route.path === '/work/tag/uiux' }"
        to="/work/tag/uiux"
      >
        UI/UX Design
      </NuxtLink>
      <NuxtLink
        class="text-sm dt-text-hover"
        :class="{ 'font-bold': $route.path === '/work/tag/website' }"
        to="/work/tag/website"
      >
        Website
      </NuxtLink>
      <NuxtLink
        class="text-sm dt-text-hover"
        :class="{ 'font-bold': $route.path === '/work/tag/mobile' }"
        to="/work/tag/mobile"
      >
        Mobile App
      </NuxtLink>
    </div>
    <div
      class="flex flex-1 flex-col gap-2 items-start"
      v-if="/^\/information(\/|$)/.test($route.path)"
    >
      <NuxtLink
        class="text-sm dt-text-hover"
        :class="{ 'font-bold': $route.path === '/information' }"
        to="/information/whatelse"
      >
        Clients
      </NuxtLink>
      <NuxtLink
        class="text-sm dt-text-hover"
        :class="{ 'font-bold': $route.path === '/information' }"
        to="/information/whatelse"
      >
        Website
      </NuxtLink>
      <NuxtLink
        class="text-sm dt-text-hover"
        :class="{ 'font-bold': $route.path === '/information' }"
        to="/information/whatelse"
      >
        Contact
      </NuxtLink>
    </div>
  </nav>
</template>
