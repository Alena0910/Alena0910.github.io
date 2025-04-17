<template>
  <div class="border-b border-gray-300 text-[20px]">學歷</div>
  <div class="flex flex-col ml-4">
    <div class="flex flex-col " v-for="(item, index) in data" :key="index">
      <div class="flex flex-col gap-1 mb-2">
        <div class="text-[16px] font-bold border-b">{{ item.school }}</div>
        <div class="flex flex-col gap-1 ml-4">
          <div class="text-[14px] text-gray-700">{{ item.major }}</div>
          <div class="text-[14px] text-gray-700">{{ item.degree }}</div>
          <div class="text-[14px] text-gray-700">{{ item.status }}</div>
          <div class="text-[12px] text-gray-500 w-full flex justify-end">
            {{ item.startDate }} - {{ item.endDate }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { data } = defineProps({
  data: {
    type: Array as PropType<
      {
        school: string;
        major: string;
        degree?: string;
        status: string;
        startDate: string;
        endDate: string;
      }[]
    >,
  },
});
</script>
