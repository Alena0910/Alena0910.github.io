<template>
  <div class="container user-select-none m-0 p-0 w-full">
    <LoadingComponent v-if="isLoading" />
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
import { ref, watch, onMounted } from "vue";
import MainNav from "@/src/components/MainNav.vue";
import SideBar from "@/src/components/SideBar.vue";
import BackToTop from "@/src/components/BackToTop.vue";
import LoadingComponent from "@/src/components/LoadingComponent.vue";

const isMenuOpen = ref(false);
const isDark = ref(false);
const isLoading = ref(true);

watch(isDark, (value) => {
  if (value) {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }
});

onMounted(() => {
  setTimeout(() => {
    isLoading.value = false;
  }, 500);
});
</script>
