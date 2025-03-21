<template>
  <Dialog v-if="isDesktop" v-model:open="isOpen">
    <DialogTrigger as-child>
      <Button variant="ghost"><Search />{{ WORD_SEARCH }}</Button>
    </DialogTrigger>
    <DialogContent class="sm:max-w-[600px] min-h-[60vh] max-h-[80vh]">
      <DialogHeader>
        <DialogTitle class="pb-4">{{ WORD_SEARCH_FOR_ARTICLE }}</DialogTitle>
        <DialogDescription class="flex flex-col w-full justify-center">
          <SearchingItem
            @updateArticlesStatus="updateFilteredArticles"
            class="flex justify-center"
          />
          <div class="text-center pt-2">
            {{ filteredArticles.length + WORD_SEARCH_RESULT }}
          </div>
        </DialogDescription>
      </DialogHeader>
      <div class="w-full max-h-[16rem] overflow-y-auto">
        <div
          v-if="filteredArticles.length > 0"
          v-for="article in filteredArticles"
          :key="article.title + article.tags"
        >
          <SearchCard :article="article" v-if="article.title != ''" />
        </div>
        <div v-else class="w-full text-center">{{ WORD_SEARCH_NOT_FOUND }}</div>
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
          <SearchingItem class="flex justify-center" />
          <div class="text-center pt-2">
            {{ filteredArticles.length + WORD_SEARCH_RESULT }}
          </div>
        </DrawerDescription>
      </DrawerHeader>
      <div class="w-full max-h-[20rem] overflow-y-auto">
        <div
          v-if="filteredArticles.length > 0"
          v-for="article in filteredArticles"
          :key="article.title + article.tags"
        >
          <SearchCard :article="article" v-if="article.title != ''" />
        </div>
        <div v-else class="w-full text-center">{{ WORD_SEARCH_NOT_FOUND }}</div>
      </div>
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
import {
  WORD_SEARCH,
  WORD_SEARCH_NOT_FOUND,
  WORD_SEARCH_FOR_ARTICLE,
  WORD_SEARCH_RESULT,
} from "@/src/utils/constants";
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

const updateFilteredArticles = (filtered: Articles[]) => {
  filteredArticles.value = filtered;
};
</script>
