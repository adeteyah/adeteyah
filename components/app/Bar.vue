<template>
  <nav>
    <NuxtLayout name="flex-row" class="justify-between w-full">
      <NuxtLayout name="flex-row">
        <NuxtLink to="/">
          <BaseTextSmall>Home</BaseTextSmall>
        </NuxtLink>
        <NuxtLink to="/work">
          <BaseTextSmall>Work</BaseTextSmall>
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
