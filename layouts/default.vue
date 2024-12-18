<template>
  <div id="default" class="flex">
    <div class="w-4/12 lg:w-4/12 h-svh flex flex-col justify-between group">
      <AppBar />
      <AppHeader />
      <AppIntro />
      <AppFooter />
    </div>
    <div class="w-8/12 lg:w-8/12 max-h-svh overflow-hidden overflow-y-auto">
      <main class="dt-wrapper">
        <slot />
      </main>
    </div>
  </div>
</template>
<style scoped>
#default > div {
  @apply px-4 lg:px-8;
}
</style>
