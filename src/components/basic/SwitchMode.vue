<template>
  <Switch v-model="isDark" class="flex items-center align-middle">
    <template #thumb class="flex items-center justify-center align-middle">
      <MoonStar v-if="isDark" :size="20" />
      <Sun v-else :size="20" />
    </template>
  </Switch>
</template>

<script setup lang="ts">
import { Switch } from "@/components/ui/switch";
import { ref, onBeforeMount, onUnmounted } from "vue";
import {
  setThemeMode,
  handleThemeMode,
  checkThemeMode,
} from "@/src/utils/cookies";
import { MoonStar, Sun } from "lucide-vue-next";

const isDark = ref(checkThemeMode() === "dark");

const width = ref<number>(0);
const height = ref<number>(0);

const updateDimensions = () => {
  width.value = window.innerWidth;
  height.value = window.innerHeight;
};

onBeforeMount(() => {
  if (checkThemeMode() === "dark") {
    isDark.value = true;
  }
  updateDimensions();
  window.addEventListener("resize", updateDimensions);
});

onUnmounted(() => {
  window.removeEventListener("resize", updateDimensions);
});

watch(isDark, (value) => {
  if (value) {
    setThemeMode("dark");
    handleThemeMode();
  } else {
    setThemeMode("light");
    handleThemeMode();
  }
});
</script>
