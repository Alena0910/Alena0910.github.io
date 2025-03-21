<template>
  <div
    class="container flex flex-row justify-between items-center py-4 border-b border-accent w-dvw fixed top-0 z-50 bg-background/90 px-10 m-0"
  >
    <div
      class="flex items-center py-4 text-lg font-medium text-muted-foreground"
    >
      <NuxtLink to="/" class="no-underline hover:no-underline">
        <span class="text-[40px] font-900 no-underline hover:no-underline">{{
          WEBSITE_NAME
        }}</span>
      </NuxtLink>
    </div><SearchDialog />
    <div class="flex items-center gap-x-4">
      <Switch
        :checked="isDark"
        @update:checked="$emit('update:isDark', !isDark)"
        class="flex items-center align-middle"
        v-if="width >= 768"
      >
        <template #thumb class="flex items-center justify-center align-middle">
          <MoonStar v-if="isDark" :size="20" />
          <Sun v-else :size="20" />
        </template>
      </Switch>
      <div
        v-if="width < 768"
        class="cursor-pointer rounded-md border-2 p-2"
        @click.stop="$emit('update:isMenuOpen', !isMenuOpen)"
      >
        <AlignJustify />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from "vue";
import { Switch } from "@/components/ui/switch";
import { AlignJustify, MoonStar, Sun } from "lucide-vue-next";
import { WEBSITE_NAME } from "@/src/utils/constants";
import SearchDialog from "@/src/components/SearchDialog.vue";

const width = ref<number>(0);
const height = ref<number>(0);

const updateDimensions = () => {
  width.value = window.innerWidth;
  height.value = window.innerHeight;
};

onMounted(() => {
  updateDimensions();
  window.addEventListener("resize", updateDimensions);
});

onBeforeUnmount(() => {
  window.removeEventListener("resize", updateDimensions);
});

defineProps(["isMenuOpen", "isDark"]);
defineEmits(["update:isMenuOpen", "update:isDark"]);
</script>
