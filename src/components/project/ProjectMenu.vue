<template>
  <div class="container w-max">
    <div id="project-menu-title mb-4">文章列表</div>
    <div
      id="project-menu-content"
      class="flex flex-col gap-4 ml-4"
      v-for="article in articleList"
    >
      <div id="project-menu-article" class="cursor-pointer">
        {{ article.title }}
        <div v-if="article.subgroup">
          <div v-for="subItem in article.subgroup">
            <div id="project-menu-subgroup" class="ml-4 cursor-pointer">
              {{ subItem.title }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

interface ArticleListProps {
  title: string;
  subgroup?: [{ title: string }];
}

const articleList = ref<Object<ArticleListProps>[]>([
  {
    title: "CTF Writeup",
    subgroup: [
      { title: "Forensic" },
      { title: "Web" },
      { title: "Misc" },
      { title: "Crypto" },
      { title: "Osint" },
    ],
  },
  { title: "test" },
]);
</script>
