<template>
  <Button
    @click="handleClick"
    size="icon"
    class="fixed bottom-4 right-4 bg-primary/50 text-white hover:animate-bounce hover:bg-primary"
  >
    <ArrowUp />
  </Button>
</template>

<script setup lang="ts">
import { Button } from "@/components/ui/button";
import { ArrowUp } from "lucide-vue-next";

const handleClick = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
</script>
