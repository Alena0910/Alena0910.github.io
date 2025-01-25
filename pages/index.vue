<template>
  <div class="container w-dvh flex flex-col">
    <MainNav
      v-model:isMenuOpen="isMenuOpen"
      v-model:isDark="isDark"
      @update:isMenuOpen="isMenuOpen = $event"
      @update:isDark="isDark = $event"
    />
    <SideBar
      v-model:isMenuOpen="isMenuOpen"
      v-model:isDark="isDark"
      @update:isMenuOpen="isMenuOpen = $event"
      @update:isDark="isDark = $event"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";
import MainNav from "@/src/components/MainNav.vue";
import SideBar from "@/src/components/SideBar.vue";

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
