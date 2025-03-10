<template>
  <div
    class="z-[9999] fixed top-0 left-0 w-full h-full flex flex-row items-center justify-center bg-background bg-opacity-98 gap-4"
  >
    <div class="text-[30px]">{{ WORD_LOADER }}</div>
    <div class="flex flex-row gap-2 align-center">
      <div class="size-4 bg-primary rounded-full animate-bounce"></div>
      <div
        class="size-4 bg-primary rounded-full animate-bounce delay-150"
      ></div>
      <div
        class="size-4 bg-primary rounded-full animate-bounce delay-300"
      ></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";
import { setThemeMode, handleThemeMode } from "@/src/utils/cookies";
import { WORD_LOADER } from "@/src/utils/constants";

const props = defineProps({
  isDark: {
    type: Boolean,
    required: true,
  },
});

const isDark = ref(props.isDark);

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
