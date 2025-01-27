<template>
  <vue-markdown :source="articleContent" :plugin="plugins" />
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import VueMarkdown from "vue-markdown-render";
import MarkdownItAnchor from "markdown-it-anchor";
import hljs from "highlight.js";
import "highlight.js/styles/atom-one-dark.css";

defineProps<{
  articleContent: string;
}>();

const CustomMarkdown = (md: any) => {
  md.set({
    highlight: (str: string, lang: string) => {
      if (typeof window !== "undefined" && lang && hljs.languages[lang]) {
        try {
          return `<pre class="hljs"><code class="hljs">${hljs.highlight(str, { language: lang }).value}</code></pre>`;
        } catch (__) {}
      }
      return `<pre class="hljs"><code class="hljs">${md.utils.escapeHtml(str)}</code></pre>`;
    },
  });
};

const plugins = [MarkdownItAnchor, CustomMarkdown];

onMounted(() => {
  if (typeof window !== "undefined") {
    hljs.highlightAll();
  }
});
</script>

<style>
.hljs {
  display: block;
  overflow-x: auto;
  padding: 0.5em;
  background: hsl(var(--secondary));
  border-radius: 8px;
}

body,
html {
  width: 100%;
}

@media screen and (max-width: 768px) {
  body,
  html {
    width: 100dvw;
  }
}

p {
  margin: 1em 0;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  margin: 1.5em 0 0.5em;
}

ul,
ol {
  margin: 1em 0;
  padding-left: 1.5em;
}

li {
  margin-bottom: 0.5em;
}

pre {
  margin: 1em 0;
  overflow: auto;
  scrollbar-width: thin;
  scrollbar-color: hsl(var(--foreground)) transparent;
  padding: 20px 10px;
  border-radius: 8px;
}

code {
  margin: 1em 0;
}

blockquote {
  margin: 1em 0;
  padding: 0.5em 1em;
  background-color: hsl(var(--secondary));
  border-left: 4px solid #ccc;
}

img {
  height: auto;
  max-height: 400px;
  border-radius: 8px;
  -webkit-user-drag: none;
  margin: 1em 0;
}
</style>
