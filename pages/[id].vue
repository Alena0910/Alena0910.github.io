<template>
  <div class="flex gap-0 relative mt-[120px] pb-[200px] w-full">
    <LoadingComponent v-show="isLoading" />
    <div class="relative h-[160px]">
      <MainNav :isMenuOpen="isMenuOpen" @updateMenuStatus="updateMenuStatus" />
    </div>
    <SideBar :isMenuOpen="isMenuOpen" @updateMenuStatus="updateMenuStatus" />
    <BackToTop />
    <div
      class="box-border h-full"
      :style="{ maxWidth: width < 768 ? '100dvw' : '65%' }"
    >
      <component :is="currentComponent" :articleInfo="currentWriteup" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, watch } from "vue";
import { useRoute } from "vue-router";
import MainNav from "@/src/components/MainNav.vue";
import SideBar from "@/src/components/SideBar.vue";
import BackToTop from "@/src/components/BackToTop.vue";
import LoadingComponent from "~/src/components/basic/LoadingComponent.vue";
import About from "@/src/components/about/AboutContent.vue";
import ErrorMsg from "@/src/components/ErrorMsg.vue";
import articleInfomation from "@/src/utils/articleInfomation.json";
import { componentsMap } from "@/src/utils/componentsMap";
import {
  setThemeMode,
  handleThemeMode,
  checkThemeMode,
} from "@/src/utils/cookies";

definePageMeta({
  validate: async (route) => {
    console.log(route.params.id);
    console.log(typeof route.params.id);
    return (
      typeof route.params.id === "string" &&
      /^[a-zA-Z0-9_\-@#&!$%^*+=(){}[\]:;'",.<>?/\\|]+$/.test(
        encodeURIComponent(route.params.id),
      )
    );
  },
});

const route = useRoute();
const width = ref<number>(0);
const height = ref<number>(0);
const currentContent = ref<string>(route.params.id as string);
const prevComponent = ref<Component>(About);

const currentComponent = computed(() => {
  return componentsMap[currentContent.value] || ErrorMsg;
});

const currentWriteup = computed(() => {
  const key = currentContent.value as keyof typeof articleInfomation;
  if (articleInfomation[key]) {
    return articleInfomation[key];
  }
  return { fileName: "404", title: "404", tags: ["404"] };
});

const isDark = ref(checkThemeMode() === "dark");
const isMenuOpen = ref(false);
const updateMenuStatus = (status: boolean) => {
  isMenuOpen.value = status;
};
const isLoading = ref(true);

const updateDimensions = () => {
  width.value = window.innerWidth;
  height.value = window.innerHeight;
};

onMounted(() => {
  isDark.value = checkThemeMode() === "dark";
  console.log(isDark.value);
  if (isMenuOpen) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "";
  }
  updateDimensions();
  window.addEventListener("resize", updateDimensions);
  currentContent.value = route.params.id as string;
  setTimeout(() => {
    isLoading.value = false;
  }, 500);
});

onBeforeUnmount(() => {
  window.removeEventListener("resize", updateDimensions);
});

watch(isDark, (value: boolean) => {
  if (value) {
    setThemeMode("dark");
    handleThemeMode();
  } else {
    setThemeMode("light");
    handleThemeMode();
  }
});
</script>
