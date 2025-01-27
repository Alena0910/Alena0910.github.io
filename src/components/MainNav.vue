<template>
  <div
    class="container mx-auto flex flex-col items-center py-4 border-b border-accent mb-4 w-full fixed top-0 z-50 bg-background/90"
  >
    <div
      class="container mx-auto flex justify-between items-center py-4 justify-between gap-x-4"
    >
      <div
        class="flex items-center py-4 text-lg font-medium text-muted-foreground"
      >
        <NuxtLink to="/">
          <span class="text-[40px] font-bold">Blog</span>
        </NuxtLink>
      </div>
      <div class="flex items-center gap-x-4">
        <Switch
          :checked="isDark"
          @update:checked="$emit('update:isDark', !isDark)"
          class="flex items-center align-middle"
          v-if="width >= 768"
        >
          <template
            #thumb
            class="flex items-center justify-center align-middle"
          >
            <Icon v-if="isDark" icon="lucide:moon" />
            <Icon v-else icon="lucide:sun" />
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
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from "vue";
import { Switch } from "@/components/ui/switch";
import { Icon } from "@iconify/vue";
import { AlignJustify } from "lucide-vue-next";

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
