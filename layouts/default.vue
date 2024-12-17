<template>
  <div class="dt-container flex gap-12">
    <div class="w-6/12 lg:w-4/12 h-svh flex flex-col justify-between">
      <AppBar />
      <AppHeader />
      <AppIntro />
      <AppFooter />
    </div>
    <div class="w-6/12 lg:w-8/12 max-h-svh overflow-hidden overflow-y-auto">
      <main class="dt-wrapper">
        <slot />
      </main>
    </div>
  </div>
</template>
