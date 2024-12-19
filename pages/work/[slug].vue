<template>
  <div class="grid gap-12">
    <div class="aspect-[16/4]">
      <img
        class="object-cover w-full h-full"
        src="https://dennissnellenberg.com/assets/img/DSC07312-2.jpg"
      />
    </div>
    <div class="grid lg:grid-cols-2">
      <div class="p-24">
        <div class="flex flex-col justify-between sticky top-0 h-[100svh] py-8">
          <div class="flex flex-col gap-8">
            <p class="text-8xl leading-relaxed">Bruce Mau Design</p>
            <p class="text-2xl leading-9">Bruce Mau Design</p>
            <div class="grid grid-cols-2 gap-4">
              <div>
                <p class="text-2xl leading-9 font-bold">Info</p>
                <p class="text-2xl leading-9">
                  Bruce Mau Design is an awards winning brand and design studio
                  based out of Toronto.
                </p>
              </div>
              <div>
                <p class="text-2xl leading-9 font-bold">Role</p>
                <p class="text-2xl leading-9">
                  Bruce Mau Design is an awards winning brand and design studio
                  based out of Toronto.
                </p>
              </div>
            </div>
          </div>
          <div class="flex flex-col gap-8">Bottom</div>
        </div>
      </div>
      <div class="grid gap-4">
        <div class="aspect-square">
          <img
            class="object-cover w-full h-full"
            src="https://dennissnellenberg.com/assets/img/DSC07312-2.jpg"
          />
        </div>
        <div class="aspect-square">
          <img
            class="object-cover w-full h-full"
            src="https://dennissnellenberg.com/assets/img/DSC07312-2.jpg"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: "work-detail",
});
</script>
