<template>
  <div class="container mx-auto">
    <div id="error-code" class="text-[60px] font-bold text-primary mb-3">
      {{ error.code }}
    </div>
    <div id="error-msg">{{ error.msg }}</div>
  </div>
</template>

<script setup lang="ts">
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
      msg: "目前尚未開放此頁面或頁面不存在 (๑•́ ₃ •̀๑)",
    }),
  },
});
</script>
