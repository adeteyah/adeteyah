<template>
  <nav
    class="hidden dt-wrapper lg:flex dt-gap opacity-50 group-hover:opacity-100"
  >
    <div class="flex flex-1 flex-col gap-2 items-start dt-opacity-transition">
      <NuxtLink
        class="text-sm dt-text-hover"
        :class="{ 'font-bold': isActive('/work') || isActive('/') }"
        to="/"
      >
        Work
      </NuxtLink>
      <NuxtLink
        class="text-sm dt-text-hover"
        :class="{ 'font-bold': isActive('/information') }"
        to="/information"
      >
        Information
      </NuxtLink>
    </div>
    <div
      class="flex flex-1 flex-col gap-2 items-start"
      v-if="isActive('/') || isActive('/work')"
    >
      <NuxtLink
        class="text-sm dt-text-hover"
        :class="{ 'font-bold': isActive('/work/tag/uiux') }"
        to="/work/tag/uiux"
      >
        UI/UX Design
      </NuxtLink>
      <NuxtLink
        class="text-sm dt-text-hover"
        :class="{ 'font-bold': isActive('/work/tag/website') }"
        to="/work/tag/website"
      >
        Website
      </NuxtLink>
      <NuxtLink
        class="text-sm dt-text-hover"
        :class="{ 'font-bold': isActive('/work/tag/mobile') }"
        to="/work/tag/mobile"
      >
        Mobile App
      </NuxtLink>
    </div>
    <div
      class="flex flex-1 flex-col gap-2 items-start"
      v-if="isActive('/information')"
    >
      <NuxtLink
        class="text-sm dt-text-hover"
        :class="{ 'font-bold': isActive('/information/clients') }"
        to="/information/clients"
      >
        Clients
      </NuxtLink>
      <NuxtLink
        class="text-sm dt-text-hover"
        :class="{ 'font-bold': isActive('/information/services') }"
        to="/information/services"
      >
        Services
      </NuxtLink>
      <NuxtLink
        class="text-sm dt-text-hover"
        :class="{ 'font-bold': isActive('/information/contact') }"
        to="/information/contact"
      >
        Contact
      </NuxtLink>
    </div>
  </nav>
</template>
<script>
export default {
  computed: {
    isActive() {
      return (path) => {
        const fullPath = this.$route.path;
        return fullPath === path || fullPath.startsWith(path + "/");
      };
    },
  },
};
</script>
