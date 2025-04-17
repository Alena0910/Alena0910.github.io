<template>
  <div>
    <div class="mb-4 text-[20px] border-b">
      {{ project.title }}
    </div>
    <div class="flex flex-col items-center gap-4 md:grid md:grid-cols-2">
      <div
        class="h-full border-2 border-gray-300 rounded-lg overflow-hidden justify-center flex items-center bg-gray-100"
      >
        <img
          :src="project.image"
          alt="project"
          class="object-cover"
          v-if="project.image"
        />
      </div>
      <div class="ml-4 flex flex-col gap-3">
        <div class="text-md">
          <div class="text-lg font-semibold">概述</div>
          <div class="text-sm w-full flex justify-end mb-3">
            {{ project.time }}
          </div>
          <div class="text-sm">{{ project.about }}</div>
        </div>
        <Separator />
        <div>{{ project.description }}</div>
        <div class="flex flex-wrap gap-2 mt-2">
          <Badge
            v-for="skill in project.skills"
            :key="skill"
            class="w-fit"
            variant="outline"
          >
            {{ skill }}
          </Badge>
        </div>
        <Button class="flex items-center mt-4 w-fit" as-child>
          <a target="_blank" :href="project.link" class="text-white">
            {{ project.projectName }}
            <ExternalLink />
          </a>
        </Button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ExternalLink } from "lucide-vue-next";
const { project } = defineProps<{
  project: {
    image: string;
    title: string;
    projectName: string;
    time: string;
    about: string;
    description: string;
    link: string;
    skills: string[];
  };
}>();
</script>
