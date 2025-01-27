<template>
  <div>
    <div class="flex justify-center items-center mt-10">
      <Card
        class="w-full flex flex-col justify-center items-center bg-secondary"
      >
        <CardContent class="flex flex-col items-center pt-6">
          <div class="flex gap-2">
            <Mail />
            <a href="mailto:pinzhenhuang0910@gmail.com" target="_blank"
              >pinzhenhuang0910@gmail.com</a
            >
          </div>
        </CardContent>
        <CardFooter class="flex justify-center px-6 pb-6 gap-6 items-center">
          <NuxtLink
            to="https://github.com/Alena0910"
            target="_blank"
            class="flex gap-2 items-center"
          >
            <Github class="size-6" />
            <div class="w-fit">Github</div>
          </NuxtLink>
          <NuxtLink
            to="https://leetcode.com/u/pinzhenhuang0910/"
            target="_blank"
            class="flex gap-2 items-center"
          >
            <Code class="size-6" />
            <div class="w-fit">Leetcode</div>
          </NuxtLink>
          <NuxtLink
            to="https://www.instagram.com/hpc_0910/"
            target="_blank"
            class="flex gap-2 items-center"
          >
            <Instagram class="size-6" />
            <div class="w-fit">Instagram</div>
          </NuxtLink>
        </CardFooter>
      </Card>
    </div>
  </div>
</template>
<script setup lang="ts">
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Mail, Github, Code, Instagram } from "lucide-vue-next";
</script>
