<template>
  <div class="container mx-auto">
    <div class="relative h-[160px]">
      <MainNav
        v-model:isMenuOpen="isMenuOpen"
        v-model:isDark="isDark"
        @update:isMenuOpen="isMenuOpen = $event"
        @update:isDark="isDark = $event"
      />
    </div>
    <SideBar
      v-model:isMenuOpen="isMenuOpen"
      v-model:isDark="isDark"
      @update:isMenuOpen="isMenuOpen = $event"
      @update:isDark="isDark = $event"
    />
    <BackToTop />
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";
import MainNav from "@/src/components/MainNav.vue";
import SideBar from "@/src/components/SideBar.vue";
import BackToTop from "@/src/components/BackToTop.vue";

const isMenuOpen = ref(false);
const isDark = ref(false);

watch(isDark, (value) => {
  if (value) {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }
});
</script>
