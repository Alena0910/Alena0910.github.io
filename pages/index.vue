<template>
  <div class="box-border">
    <LoadingComponent v-if="isLoading" />
    <div class="relative h-[160px]">
      <MainNav
        v-model:isMenuOpen="isMenuOpen"
        @update:isMenuOpen="isMenuOpen = $event"
      />
    </div>
    <SideBar
      v-model:isMenuOpen="isMenuOpen"
      @update:isMenuOpen="isMenuOpen = $event"
    />
    <BackToTop />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import MainNav from "@/src/components/MainNav.vue";
import SideBar from "@/src/components/SideBar.vue";
import BackToTop from "@/src/components/BackToTop.vue";
import LoadingComponent from "~/src/components/basic/LoadingComponent.vue";

const router = useRouter();

const isMenuOpen = ref(false);
const isLoading = ref(true);

onMounted(() => {
  router.push({
    path: encodeURIComponent("About Me"),
  });
  setTimeout(() => {
    isLoading.value = false;
  }, 500);
});
</script>
