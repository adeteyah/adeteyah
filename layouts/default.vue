<template>
  <div id="default" class="flex">
    <div class="w-4/12 lg:w-4/12 flex flex-col justify-between group pl-8 pr-4">
      <AppBar />
      <AppHeader />
      <AppFooter />
    </div>
    <div class="w-8/12 lg:w-8/12 pr-8 pl-4">
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
