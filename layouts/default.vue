<template>
  <div class="flex">
    <div
      class="w-4/12 lg:w-4/12 h-svh flex flex-col justify-between group px-8"
    >
      <AppBar />
      <AppHeader />
      <AppIntro />
      <AppFooter />
    </div>
    <div
      class="w-7/12 lg:w-8/12 max-h-svh overflow-hidden overflow-y-auto px-8"
    >
      <main class="dt-wrapper">
        <slot />
      </main>
    </div>
  </div>
</template>
