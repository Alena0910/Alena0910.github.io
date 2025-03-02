<template>
  <div>
    <div class="flex justify-center items-center mt-10">
      <Card
        class="w-full flex flex-col justify-center items-center bg-secondary"
      >
        <CardContent
          class="flex flex-row items-center pt-6 w-full justify-center"
        >
          <Mail />
          <a
            href="mailto:pinzhenhuang0910@gmail.com"
            target="_blank"
            class="break-all text-center ml-2"
          >
            {{ EMAIL }}</a
          >
        </CardContent>
        <CardFooter
          class="flex justify-center px-6 pb-6 gap-6 items-center w-full flex-wrap"
        >
          <NuxtLink
            :to="PERSONAL_WEBSITE.github"
            target="_blank"
            class="flex flex-wrap gap-2 items-center justify-center"
          >
            <Github class="size-6" />
            <div class="w-fit">{{ WORD_GITHUB }}</div>
          </NuxtLink>
          <NuxtLink
            :to="PERSONAL_WEBSITE.leetcode"
            target="_blank"
            class="flex flex-wrap gap-2 items-center justify-center"
          >
            <Code class="size-6" />
            <div class="w-fit">{{ WORD_LEETCODE }}</div>
          </NuxtLink>
          <NuxtLink
            :to="PERSONAL_WEBSITE.instagram"
            target="_blank"
            class="flex flex-wrap gap-2 items-center justify-center"
          >
            <Instagram class="size-6" />
            <div class="w-fit">{{ WORD_INSTAGRAM }}</div>
          </NuxtLink>
        </CardFooter>
      </Card>
    </div>
  </div>
</template>
<script setup lang="ts">
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Mail, Github, Code, Instagram } from "lucide-vue-next";
import {
  EMAIL,
  WORD_GITHUB,
  WORD_LEETCODE,
  WORD_INSTAGRAM,
  PERSONAL_WEBSITE,
} from "@/src/utils/constants";
</script>

<style scoped>
a {
  color: hsl(var(--foreground));
}
</style>
