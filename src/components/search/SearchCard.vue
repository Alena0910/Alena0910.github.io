<template>
  <Card
    class="w-[350px] border-0 shadow-none hover:bg-secondary cursor-pointer"
    @click="handleCardBeClicked"
  >
    <CardHeader>
      <CardTitle class="m-0 p-1">{{ props.article.title }}</CardTitle>
      <CardDescription class="flex flex-row gap-x-2 w-fit p-1 m-0">
        <div
          v-for="tag in props.article.tags"
          :key="props.article.title + tag"
          class="flex flex-row gap-x-2 w-fit"
        >
          <Badge>{{ tag }}</Badge>
        </div>
      </CardDescription>
    </CardHeader>
  </Card>
</template>

<script setup lang="ts">
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { Articles } from "@/src/utils/constants";

import type { PropType } from "vue";

const props = defineProps({
  article: {
    type: Object as PropType<Articles>,
    required: true,
  },
});

const router = useRouter();

const handleCardBeClicked = () => {
  router.push(encodeURIComponent(props.article.title));
};
</script>
