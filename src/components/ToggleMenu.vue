<template>
  <div
    id="toggle-menu"
    class="flex flex-col w-full absolute left-0 bg-background/90 px-6 border-b overflow-x-hidden overflow-y-auto"
    ref="toggleMenuRef"
  >
    <div
      id="toggle-menu-header"
      class="flex flex-row items-center justify-center gap-x-4"
    >
      <Avatar class="size-10">
        <AvatarImage :src="avatar" alt="@radix-vue" />
        <AvatarFallback>Avatar</AvatarFallback>
      </Avatar>
      <div
        id="toggle-menu-title"
        class="w-fit flex flex-col items-center"
        v-if="width > 250"
      >
        Pin-Chen Huang
      </div>
    </div>
    <div id="toggle-menu-content" class="flex flex-col gap-2 w-full">
      <MenuItem
        :menuItems="menuMainItems"
        :group="group"
        :toggleGroup="toggleGroup"
        :handleCurrentContent="handleCurrentContent"
      />
      <div class="flex flex-row justify-center gap-x-4 py-2">
        <div>Mode</div>
        <Switch
          :checked="isDark"
          @update:checked="emit('update:isDark', $event)"
          class="flex items-center align-middle"
        >
          <template
            #thumb
            class="flex items-center justify-center align-middle"
          >
            <Icon v-if="isDark" icon="lucide:moon" />
            <Icon v-else icon="lucide:sun" />
          </template>
        </Switch>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from "vue";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import avatar from "@/assets/images/avatar.jpg";
import { Switch } from "@/components/ui/switch";
import { Icon } from "@iconify/vue";
import MenuItem from "@/src/components/MenuItem.vue";
import menuItemsData from "@/src/utils/menuList.json";

const props = defineProps(["currentContent", "isDark", "isMenuOpen"]);
const emit = defineEmits([
  "update:currentContent",
  "update:isDark",
  "update:isMenuOpen",
]);

const toggleMenuRef = ref<HTMLElement | null>(null);

const group = ref<{ [key: string]: boolean }>({});
const isGroupListOpen = ref<boolean>(false);
const toggleGroup = (groupName: string) => {
  if (groupName === "Projects") {
    if (!group.value[groupName]) {
      isGroupListOpen.value = true;
    } else {
      isGroupListOpen.value = false;
    }
  }
  group.value[groupName] = !group.value[groupName];
};

const handleClickOutside = (event: MouseEvent) => {
  if (
    toggleMenuRef.value &&
    !toggleMenuRef.value.contains(event.target as Node)
  ) {
    emit("update:isMenuOpen", false);
    document.body.style.overflow = "auto";
  }
};

const width = ref<number>(0);
const height = ref<number>(0);

const updateDimensions = () => {
  width.value = window.innerWidth;
  height.value = window.innerHeight;
};

onMounted(() => {
  updateDimensions();
  window.addEventListener("resize", updateDimensions);
  document.addEventListener("click", handleClickOutside);
});

onBeforeUnmount(() => {
  window.removeEventListener("resize", updateDimensions);
  document.removeEventListener("click", handleClickOutside);
});

const menuMainItems = ref(menuItemsData);
const handleCurrentContent = (content: string) => {
  emit("update:currentContent", content);
  handleClickOutside(new MouseEvent("click"));
};
</script>

<style scoped>
#toggle-menu {
  max-height: calc(100vh - 20px);
  overflow-y: auto;
}
</style>
