<template>
  <div v-for="menuItem in menuItems" :key="menuItem.name">
    <div
      :class="
        currentContent === menuItem.name
          ? 'w-fit cursor-pointer flex flex-row items-center w-100 py-2 px-4 border-primary border-l-8'
          : 'w-fit cursor-pointer flex flex-row items-center hover:bg-secondary w-100 rounded-md py-2 px-4'
      "
      @click.stop="handleClick(menuItem)"
    >
      {{ menuItem.name }}
      <span v-if="menuItem.subItems">
        <Badge variant="secondary" class="text-xs">{{
          menuItem.subItems.length
        }}</Badge>
      </span>
      <div
        class="text-gray-400 rounded-full w-6 h-6 flex items-center justify-center"
        v-if="menuItem.subItems"
      >
        <ChevronDown v-if="group[menuItem.name]" />
        <ChevronUp v-else />
      </div>
    </div>
    <div
      id="sidebar-group-content"
      class="w-fit flex flex-col mt-2 ml-2 gap-2 border-l-2 border-secondary"
      v-if="!group[menuItem.name] && menuItem.subItems"
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
