<template>
  <div
    class="flex flex-col items-center justify-center gap-1 bg-secondary rounded-lg"
  >
    <h2 class="text-xl font-normal border-b">聯絡資訊</h2>
    <div class="flex flex-wrap justify-center items-center gap-4">
      <ContactSquare
        v-for="(item, index) in info"
        :key="index"
        :icon="item.icon"
        :url="item.url"
        :label="item.label"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { Mail, Github, Code, Instagram } from "lucide-vue-next";
import { EMAIL, PERSONAL_WEBSITE } from "@/src/utils/constants";
import ContactSquare from "./ContactSquare.vue";

const info = [
  {
    icon: Mail,
    url: "mailto:" + EMAIL,
    label: EMAIL,
  },
  {
    icon: Github,
    url: PERSONAL_WEBSITE.github,
    label: "Github",
  },
  {
    icon: Code,
    url: PERSONAL_WEBSITE.leetcode,
    label: "LeetCode",
  },
  {
    icon: Instagram,
    url: PERSONAL_WEBSITE.instagram,
    label: "Instagram",
  },
];
</script>

<style scoped>
a {
  color: hsl(var(--foreground));
}
</style>
