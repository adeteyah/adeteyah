<template>
  <div id="default" class="flex">
    <div class="w-6/12 flex flex-col justify-between">
      <AppBar />
      <AppHeader />
      <AppIntro />
      <AppFooter />
    </div>
    <div class="w-6/12 overflow-hidden overflow-y-auto">
      <main class="dt-wrapper">
        <slot />
      </main>
    </div>
  </div>
</template>
<style scoped>
#default > div {
  @apply group lg:w-8/12 h-svh max-h-svh;
}
</style>
