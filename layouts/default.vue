<template>
  <div id="default" class="flex">
    <div class="w-4/12 lg:w-4/12 flex flex-col justify-between group">
      <AppBar />
      <AppHeader />
      <AppIntro />
      <AppFooter />
    </div>
    <div class="w-8/12 lg:w-8/12">
      <main class="dt-wrapper">
        <slot />
      </main>
    </div>
  </div>
</template>
<style>
#default > div {
  @apply h-svh max-h-svh overflow-hidden overflow-y-auto;
}
</style>
