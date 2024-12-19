<template>
  <div
    id="default"
    class="flex transition-colors duration-1000 delay-500"
    :class="{
      'dt-invert-bg': $route.path.startsWith('/information'),
    }"
  >
    <div class="w-1/3 lg:w-4/12 pl-6 lg:pl-12 pr-2 lg:pr-4">
      <div class="flex flex-col h-full">
        <div class="flex-1">
          <AppBar />
        </div>
        <div class="flex-1 flex items-center">
          <AppHeader />
        </div>
        <div class="flex-1 flex items-end">
          <AppFooter />
        </div>
      </div>
    </div>
    <div
      id="scroll-container"
      class="w-2/3 lg:w-8/12 pr-6 lg:pr-12 pl-2 lg:pl-4"
    >
      <div class="dt-horizontal-wrapper">
        <slot />
      </div>
    </div>
  </div>
</template>
<style>
#default > div {
  @apply h-svh max-h-svh overflow-hidden overflow-y-auto;
}
</style>
