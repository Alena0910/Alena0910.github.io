<template>
  <div class="container mx-auto">
    <div id="error-code" class="text-[60px] font-bold text-primary mb-3">
      {{ error.code }}
    </div>
    <div id="error-msg">{{ error.msg }}</div>
  </div>
</template>

<script setup lang="ts">
import { ERROR_MESSAGE } from "../utils/constants";

interface ErrorProps {
  code: number;
  msg: string;
}

defineProps({
  error: {
    type: Object as () => ErrorProps,
    required: false,
    default: () => ({
      code: 404,
      msg: ERROR_MESSAGE[404],
    }),
  },
});
</script>
