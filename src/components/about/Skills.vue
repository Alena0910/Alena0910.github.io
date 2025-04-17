<template>
  <div class="flex flex-col gap-4 text-[20px] border-b">Skills</div>
  <div class="flex flex-wrap gap-4 flex-1">
    <div v-for="skill in skills" class="p-4">
      <div class="border-b-2 mb-4 text-[20px] border-primary w-full">
        {{ skill.title }}
      </div>
      <div v-for="item in skill.details">
        <ul class="ml-4 flex flex-col gap-2 pr-2">
          <li class="text-sm text-gray-500">{{ item }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const { skills } = defineProps<{
  skills: {
    title: string;
    details: string[];
  }[];
}>();
</script>
