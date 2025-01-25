<template>
  <div
    class="container mx-auto flex flex-col items-center justify-center h-screen"
  >
    <div id="error-code" class="text-9xl font-bold text-primary">
      {{ error.code }}
    </div>
    <div id="error-msg">{{ error.msg }}</div>
    <Button class="mt-8" variant="primary">
      <NuxtLink to="/" class="flex items-center">
        <Home class="w-4 h-4 mr-2" />回首頁
      </NuxtLink>
    </Button>
  </div>
</template>

<script setup lang="ts">
import { Button } from "@/components/ui/button";
import { Home } from "lucide-vue-next";

interface ErrorProps {
  code: number;
  msg: string;
}

defineProps({
  error: {
    type: Object as () => ErrorProps,
    required: false,
    default: () => ({
      code: 500,
      msg: "Unhandle error",
    }),
  },
});
</script>
