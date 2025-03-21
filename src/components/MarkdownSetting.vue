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
  scrollbar-width: thin;
  scrollbar-color: hsl(var(--foreground)) transparent;
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

h1 {
  font-size: 2em;
  margin: 1.5em 0 0.5em;
  border-bottom: 1px solid hsl(var(--border));
}

h2 {
  font-size: 1.5em;
  margin: 1.5em 0 0.5em;
  border-bottom: 1px solid hsl(var(--border));
}

h3 {
  font-size: 1.25em;
  margin: 1.5em 0 0.5em;
  border-bottom: 1px solid hsl(var(--border));
}

h4 {
  font-size: 1em;
  margin: 1.5em 0 0.5em;
}

h5 {
  font-size: 0.875em;
  margin: 1.5em 0 0.5em;
}

h6 {
  font-size: 0.75em;
  margin: 1.5em 0 0.5em;
}

ul {
  list-style-type: disc;
}

ol {
  margin: 1em 0;
  list-style-type: decimal;
}

li {
  margin-bottom: 0.5em;
  list-style-position: inside;
}

ul li::marker {
  color: #888;
}

ol li::marker {
  color: #888;
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
  color: hsl(var(--md-code-color));
  background-color: hsl(var(--secondary));
  padding: 0.05em 0.5em;
  border-radius: 4px;
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

a {
  color: hsl(var(--primary));
  text-decoration: none;
  font-weight: bold;
  cursor: pointer;
}

a:hover {
  text-decoration: underline;
}

table {
  width: 100%;
  border-collapse: collapse;
  margin: 1em 0;
}

th {
  background-color: hsl(var(--secondary));
  border: 1px solid hsl(var(--border));
  padding: 0.5em;
}

td {
  border: 1px solid hsl(var(--border));
  padding: 0.5em;
}
</style>
