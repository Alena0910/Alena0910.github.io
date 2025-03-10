<template>
  <div class="flex gap-0 relative top-[120px]">
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
    <div
      class="box-border"
      :style="{ maxWidth: width < 768 ? '100dvw' : '65%' }"
    >
      <component :is="currentComponent" :articleInfo="currentWriteup" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from "vue";
import { useRoute } from "vue-router";
import MainNav from "@/src/components/MainNav.vue";
import SideBar from "@/src/components/SideBar.vue";
import BackToTop from "@/src/components/BackToTop.vue";
import LoadingComponent from "@/src/components/LoadingComponent.vue";
import About from "@/src/components/about/AboutContent.vue";
import CTFWriteupTemplate from "@/src/components/project/CTFWriteupTemplate.vue";
import ErrorMsg from "@/src/components/ErrorMsg.vue";
import articleInfomation from "@/src/utils/articleInfomation.json";

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

const componentsMap: { [key: string]: Component } = {
  "About Me": About,
  "CTF Writeup": prevComponent,
  Web: prevComponent,
  Crypto: prevComponent,
  Misc: prevComponent,
  "Ave Mujica": CTFWriteupTemplate,
  "Be IDol": CTFWriteupTemplate,
  Mango: CTFWriteupTemplate,
  "2DES": CTFWriteupTemplate,
  "Mystery Presentation": CTFWriteupTemplate,
  "Packet Detective": CTFWriteupTemplate,
  "Math Test": CTFWriteupTemplate,
  "3-Cipher": CTFWriteupTemplate,
  "addition-quiz": CTFWriteupTemplate,
  php7cmp4re: CTFWriteupTemplate,
  ROT128: CTFWriteupTemplate,
  "64se64": CTFWriteupTemplate,
  "Snowing!": CTFWriteupTemplate,
  lolololologfile: CTFWriteupTemplate,
  d: CTFWriteupTemplate,
  "xss-1": CTFWriteupTemplate,
  "xss-2": CTFWriteupTemplate,
  "csrf-1": CTFWriteupTemplate,
  "csrf-2": CTFWriteupTemplate,
  simple_sqli: CTFWriteupTemplate,
  "image-storage": CTFWriteupTemplate,
  "Mango (Dreamhack)": CTFWriteupTemplate,
  "session-basic": CTFWriteupTemplate,
  "Summer Fan": CTFWriteupTemplate,
  "Secure Secret": CTFWriteupTemplate,
  "rev-basic-1": CTFWriteupTemplate,
  "[wargame.kr] strcmp": CTFWriteupTemplate,
  "Small Counter": CTFWriteupTemplate,
};

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

const updateDimensions = () => {
  width.value = window.innerWidth;
  height.value = window.innerHeight;
};

onMounted(() => {
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
</script>
