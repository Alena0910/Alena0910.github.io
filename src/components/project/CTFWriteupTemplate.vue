<template>
  <div class="container mx-auto">
    <div id="ctf-writeup-title" class="text-4xl font-bold mb-4">
      {{ articleInfo.title }}
    </div>
    <div id="ctf-writeup-tag" class="mb-2 flex flex-row gap-2 w-full mb-4">
      <div v-for="tag in articleInfo.tags">
        <Badge variant="secondary" :key="tag">{{ tag }}</Badge>
      </div>
    </div>
    <div id="ctf-writeup-content" class="break-words pb-10">
      <vue-markdown
        :source="articleContent"
        :break="true"
        :typographer="true"
        :linkify="true"
      >
      </vue-markdown>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps, onMounted } from "vue";
import VueMarkdown from "vue-markdown-render";
import { Badge } from "@/components/ui/badge";

interface ArticleInfoProps {
  fileName: string;
  title: string;
  tags?: string[];
}

const props = defineProps<{
  articleInfo: ArticleInfoProps;
}>();
const { articleInfo } = props;

const articleContent = ref<string>("123");

onMounted(() => {
  fetch(`/CTFWriteup/${articleInfo.fileName}.md`)
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
});
</script>
