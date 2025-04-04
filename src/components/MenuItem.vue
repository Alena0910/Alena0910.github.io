<template>
  <div v-for="menuItem in menuItems" :key="menuItem.name">
    <router-link
      v-if="!menuItem.subItems"
      :to="`/${encodeURIComponent(menuItem.name)}`"
      class="w-fit cursor-pointer flex flex-row items-center w-100 py-2 px-4 no-underline hover:no-underline hover:bg-secondary rounded-md text-foreground font-normal select-none"
    >
      {{ menuItem.name }}
    </router-link>
    <div
      v-else
      class="w-fit cursor-pointer flex flex-row items-center hover:bg-secondary w-100 rounded-md py-2 px-4 select-none"
      @click.stop="handleClick(menuItem)"
    >
      {{ menuItem.name }}
      <span v-show="menuItem.subItems">
        <Badge variant="secondary" class="text-xs">{{
          menuItem.subItems.length
        }}</Badge>
      </span>
      <div
        class="text-gray-400 rounded-full w-6 h-6 flex items-center justify-center"
        v-show="menuItem.subItems"
      >
        <ChevronDown v-if="!group[menuItem.name]" />
        <ChevronUp v-else />
      </div>
    </div>
    <div
      id="sidebar-group-content"
      class="w-fit flex flex-col mt-2 ml-2 gap-2 border-l-2 border-secondary"
      v-show="group[menuItem.name] && menuItem.subItems"
    >
      <MenuItem
        v-for="subItem in menuItem.subItems"
        :key="subItem.name"
        :menuItems="[subItem]"
        :group="group"
        :currentContent="currentContent"
        :toggleGroup="toggleGroup"
        :handleCurrentContent="handleCurrentContent"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { Badge } from "@/components/ui/badge";
import { ChevronDown, ChevronUp } from "lucide-vue-next";
import MenuItem from "@/src/components/MenuItem.vue";

const props = defineProps<{
  group: Record<string, boolean>;
  menuItems: Array<{
    name: string;
    subItems?: Array<any>;
  }>;
  currentContent: string;
  toggleGroup: (key: string) => void;
  handleCurrentContent: (content: string) => void;
}>();

const { group, toggleGroup, handleCurrentContent, menuItems } = props;

const handleClick = (menuItem: any) => {
  if (!menuItem.subItems) {
    handleCurrentContent(menuItem.name);
  } else {
    toggleGroup(menuItem.name);
  }
};
</script>
