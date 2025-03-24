<template>
  <div
    id="toggle-menu"
    class="flex flex-col w-full absolute left-0 bg-background/90 border-b overflow-x-hidden overflow-y-auto"
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
    <div id="toggle-menu-content" class="flex flex-col gap-2 w-full mb-12">
      <MenuItem
        :menuItems="menuMainItems"
        :group="group"
        :currentContent="currentContent"
        :toggleGroup="toggleGroup"
        :handleCurrentContent="handleCurrentContent"
      />
      <div class="flex flex-row justify-center gap-x-4 py-2">
        <div>Mode</div>
        <SwitchMode />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import avatar from "@/assets/images/avatar.jpg";
import MenuItem from "@/src/components/MenuItem.vue";
import menuItemsData from "@/src/utils/menuList.json";
import SwitchMode from "@/src/components/basic/SwitchMode.vue";

const props = defineProps(["currentContent", "isMenuOpen"]);
const emit = defineEmits(["update:currentContent", "updateMenuStatus"]);
const toggleMenu = () => {
  emit("updateMenuStatus", !props.isMenuOpen);
};

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
    props.isMenuOpen &&
    toggleMenuRef.value &&
    !toggleMenuRef.value.contains(event.target as Node)
  ) {
    toggleMenu();
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

onUnmounted(() => {
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
  width: 100dvw;
  max-height: calc(100dvh - 200px);
  overflow-y: auto;
}
</style>
