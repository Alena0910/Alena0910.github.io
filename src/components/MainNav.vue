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
    </div>
    <div class="flex items-center gap-x-4">
      <SearchDialog />
      <SwitchMode v-if="width >= 768" />
      <div
        v-show="width < 768"
        class="cursor-pointer rounded-md border-2 p-2"
        @click.stop="toggleMenu"
      >
        <AlignJustify />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from "vue";
import { AlignJustify } from "lucide-vue-next";
import { WEBSITE_NAME } from "@/src/utils/constants";
import SearchDialog from "~/src/components/search/SearchDialog.vue";
import SwitchMode from "@/src/components/basic/SwitchMode.vue";

const width = ref<number>(0);
const height = ref<number>(0);

const props = defineProps(["isMenuOpen"]);
const emit = defineEmits(["updateMenuStatus"]);
const toggleMenu = () => {
  emit("updateMenuStatus", !props.isMenuOpen);
};
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
</script>
