<template>
  <TooltipProvider>
    <Tooltip>
      <TooltipTrigger as-child>
        <Button
          variant="ghost"
          class="w-12 h-12 rounded-full flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-all duration-200 ease-in-out"
          as-child
        >
          <a :href="url" target="_blank" rel="noopener noreferrer">
            <component :is="icon" />
          </a>
        </Button>
      </TooltipTrigger>
      <TooltipContent side="bottom" class="text-background rounded-md">
        <p>{{ props.label }}</p>
      </TooltipContent>
    </Tooltip>
  </TooltipProvider>
</template>

<script lang="ts" setup>
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import type { Component } from "vue";

const props = defineProps<{
  icon: Component;
  url: string;
  label: string;
}>();
</script>
