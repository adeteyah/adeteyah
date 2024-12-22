<template>
  <div class="lg:w-1/2 py-6 grid gap-1 border-b-2 border-black border-dotted">
    <p class="text-xl">
      <slot name="at"></slot>
    </p>
    <p class="text-lg opacity-75"><slot name="job"></slot></p>
  </div>
</template>
