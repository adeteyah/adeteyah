<template>
  <div class="dt-container">
    <AppBar />
    <AppHeader />
    <AppIntro />
    <main class="dt-wrapper">
      <slot />
    </main>
    <AppFooter />
  </div>
</template>
