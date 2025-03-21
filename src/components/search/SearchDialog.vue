<template>
  <Dialog v-if="isDesktop" v-model:open="isOpen">
    <DialogTrigger as-child>
      <Button variant="ghost"><Search />{{ WORD_SEARCH }}</Button>
    </DialogTrigger>
    <DialogContent class="sm:max-w-[425px] min-h-[60vh] max-h-[80vh]">
      <DialogHeader>
        <DialogTitle class="pb-4">{{ WORD_SEARCH_FOR_ARTICLE }}</DialogTitle>
        <DialogDescription>
          <SearchingItem @updateArticlesStatus="updateFilteredArticles" />
        </DialogDescription>
      </DialogHeader>
      <div class="max-h-[20rem] overflow-y-auto">
        <div v-for="article in articles" :key="article.title + article.tags">
          <SearchCard :article="article" v-if="article.title != ''" />
        </div>
      </div>
    </DialogContent>
  </Dialog>

  <Drawer v-else v-model:open="isOpen">
    <DrawerTrigger as-child>
      <Button variant="ghost"><Search /></Button>
    </DrawerTrigger>
    <DrawerContent class="min-h-[60vh]">
      <DrawerHeader class="text-center">
        <DrawerTitle class="pb-4">{{ WORD_SEARCH_FOR_ARTICLE }}</DrawerTitle>
        <DrawerDescription>
          <SearchingItem />
        </DrawerDescription>
      </DrawerHeader>
      <DrawerFooter class="pt-2">
        <DrawerClose as-child>
          <Button variant="outline"> Cancel </Button>
        </DrawerClose>
      </DrawerFooter>
    </DrawerContent>
  </Drawer>
</template>

<script lang="ts" setup>
import { Search } from "lucide-vue-next";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { useMediaQuery } from "@vueuse/core";
import { ref } from "vue";
import { WORD_SEARCH, WORD_SEARCH_FOR_ARTICLE } from "@/src/utils/constants";
import SearchingItem from "./SearchingItem.vue";
import articleInfomation from "@/src/utils/articleInfomation.json";
import type { Articles } from "@/src/utils/constants";
import SearchCard from "./SearchCard.vue";

const isDesktop = useMediaQuery("(min-width: 768px)");

const isOpen = ref(false);

const articles = ref<Articles[]>(
  Object.values(articleInfomation)
    .map((article: Articles) =>
      !article.subItem ? { title: article.title, tags: article.tags } : null,
    )
    .filter((article): article is Articles => article !== null),
);

const filteredArticles = ref<Articles[]>(articles.value);

const filterArticles = (articles: Articles[], modelValue: string[]) => {
  return articles.filter((article) =>
    article.tags.some((tag) => modelValue.includes(tag)),
  );
};

const updateFilteredArticles = (filtered: Articles[]) => {
  filteredArticles.value = filtered;
};
</script>
