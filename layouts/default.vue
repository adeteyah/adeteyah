<template>
  <div class="dt-container flex gap-12">
    <div class="h-svh flex flex-col justify-between">
      <AppBar />
      <AppHeader />
      <AppIntro />
      <AppFooter />
    </div>
    <div>
      <main class="dt-wrapper">
        <slot />
      </main>
    </div>
  </div>
</template>
