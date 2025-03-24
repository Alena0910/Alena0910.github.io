<template>
  <div>
    <div class="mb-4 text-[20px] border-b">
      {{ project.title }}
    </div>
    <div class="ml-4 flex flex-col gap-3">
      {{ project.description }}
      <Button class="flex items-center mt-4 w-fit" as-child>
        <a target="_blank" :href="project.link" class="text-white">
          {{ project.projectName }}
          <ExternalLink />
        </a>
      </Button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-vue-next";
const { project } = defineProps<{
  project: {
    title: string;
    projectName: string;
    description: string;
    link: string;
  };
}>();
</script>
