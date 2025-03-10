<template>
  <div class="box-border">
    <LoadingComponent v-if="isLoading" :isDark="isDark" />
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
import { useRouter } from "vue-router";
import MainNav from "@/src/components/MainNav.vue";
import SideBar from "@/src/components/SideBar.vue";
import BackToTop from "@/src/components/BackToTop.vue";
import LoadingComponent from "@/src/components/LoadingComponent.vue";
import {
  setThemeMode,
  handleThemeMode,
  checkThemeMode,
} from "@/src/utils/cookies";

const router = useRouter();

const isMenuOpen = ref(false);
const isDark = ref(false);
const isLoading = ref(true);

watch(isDark, (value) => {
  if (value) {
    setThemeMode("dark");
    handleThemeMode();
  } else {
    setThemeMode("light");
    handleThemeMode();
  }
});

onMounted(() => {
  if (checkThemeMode() === "dark") {
    isDark.value = true;
  }
  router.push({
    path: encodeURIComponent("About Me"),
  });
  setTimeout(() => {
    isLoading.value = false;
  }, 500);
});
</script>
