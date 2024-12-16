<template>
  <nav class="max-h-[54px]">
    <NuxtLayout name="inline-flex" class="justify-between w-full">
      <NuxtLayout name="inline-flex">
        <AppIcon />
        <NuxtLink to="/">
          <BaseTextSmall>Home</BaseTextSmall>
        </NuxtLink>
        <NuxtLink to="/about">
          <BaseTextSmall>About</BaseTextSmall>
        </NuxtLink>
      </NuxtLayout>
      <div>
        <NuxtLink to="/contact">
          <BaseTextSmall>Let's Start A Project</BaseTextSmall>
        </NuxtLink>
      </div>
    </NuxtLayout>
  </nav>
</template>
