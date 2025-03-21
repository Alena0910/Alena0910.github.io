<template>
  <Dialog v-if="isDesktop" v-model:open="isOpen">
    <DialogTrigger as-child>
      <Button variant="ghost"><Search />{{ WORD_SEARCH }}</Button>
    </DialogTrigger>
    <DialogContent class="sm:max-w-[425px] min-h-[60vh]">
      <DialogHeader>
        <DialogTitle class="p-4">{{ WORD_SEARCH_FOR_ARTICLE }}</DialogTitle>
        <DialogDescription>
          <SearchingItem />
        </DialogDescription>
      </DialogHeader>
    </DialogContent>
  </Dialog>

  <Drawer v-else v-model:open="isOpen">
    <DrawerTrigger as-child>
      <Button variant="ghost"><Search /></Button>
    </DrawerTrigger>
    <DrawerContent class="min-h-[60vh]">
      <DrawerHeader class="text-center">
        <DrawerTitle class="p-4">{{ WORD_SEARCH_FOR_ARTICLE }}</DrawerTitle>
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

const isDesktop = useMediaQuery("(min-width: 768px)");

const isOpen = ref(false);
</script>
