<template>
  <div class="container">
    <div id="ctf-writeup-content" class="break-words pb-10 w-full h-full">
      <MarkdownSetting :articleContent="articleContent" :key="articleContent" />
    </div>
    <div id="ctf-writeup-tag" class="mb-2 flex flex-wrap gap-2 w-full mb-4">
      <div v-for="tag in articleInfo.tags">
        <Badge variant="secondary" :key="tag" class="w-fit">{{ tag }}</Badge>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from "vue";
import { Badge } from "@/components/ui/badge";
import MarkdownSetting from "@/src/components/MarkdownSetting.vue";

interface ArticleInfoProps {
  fileName: string;
  title: string;
  tags?: string[];
  articleTheme: string;
}

const props = defineProps<{
  articleInfo: ArticleInfoProps;
}>();
const { articleInfo } = props;

const articleContent = ref<string>("Loading...");

const width = ref(0);
const height = ref(0);

const updateWindowSize = () => {
  width.value = window.innerWidth;
  height.value = window.innerHeight;
};

onMounted(() => {
  fetch(`/${articleInfo.articleTheme}/${articleInfo.fileName}.md`)
    .then((response) => {
      if (!response.ok) {
        articleContent.value = response.statusText;
        console.log(articleInfo.fileName);
        console.log(response);
        throw response;
      }
      return response.text();
    })
    .then((text) => {
      articleContent.value = text;
    })
    .catch((err) => {
      articleContent.value = err.statusCode + " " + err.statusMessage;
      console.log(articleInfo.fileName);
    });
  window.addEventListener("resize", updateWindowSize);
});

onBeforeUnmount(() => {
  window.removeEventListener("resize", updateWindowSize);
});
</script>
