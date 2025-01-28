<template>
  <div id="app">
    <NuxtPage />
  </div>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
onMounted(() => {
  const element = document.getElementById("app");
  const nuxtElement = document.getElementById("_nuxt");
  const scrollbarWidth =
    window.innerWidth - document.documentElement.clientWidth;
  if (element) {
    element.style.width = `calc(100vw - ${scrollbarWidth}px)`;
  }
  if (nuxtElement) {
    nuxtElement.style.width = `calc(100vw - ${scrollbarWidth}px)`;
  }

  window.addEventListener("resize", () => {
    if (element) {
      element.style.width = `calc(100vw - ${scrollbarWidth}px)`;
    }
    if (nuxtElement) {
      nuxtElement.style.width = `calc(100vw - ${scrollbarWidth}px)`;
    }
  });
});
</script>
