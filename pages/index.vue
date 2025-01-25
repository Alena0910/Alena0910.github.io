<template>
  <div class="container w-dvh flex flex-col">
    <MainNav v-model="isMenuOpen" />
    <SideBar v-model="isMenuOpen" />
  </div>
</template>

<script setup>
import MainNav from "@/src/components/MainNav.vue";
import SideBar from "@/src/components/SideBar.vue";

const isMenuOpen = ref(false);
</script>
