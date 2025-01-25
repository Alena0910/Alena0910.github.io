<template>
  <div>
    <ToggleMenu
      v-if="isMenuOpen && width < 768"
      :currentContent="currentContent"
      :isDark="isDark"
      :isMenuOpen="isMenuOpen"
      @update:currentContent="(content) => (currentContent = content)"
      @update:isDark="(dark) => emit('update:isDark', dark)"
      @update:isMenuOpen="(menuOpen) => emit('update:isMenuOpen', menuOpen)"
    />
    <div class="w-fit flex flex-row gap-4">
      <div
        class="flex flex-col position-fixed top-5 left-5 rounded-lg border-solid border-2 w-56 h-auto px-4 py-8"
        v-if="width >= 768"
      >
        <div id="sidebar-header" class="flex flex-col items-center">
          <Avatar class="w-20 h-20 mb-2">
            <AvatarImage :src="avatar" alt="@radix-vue" />
            <AvatarFallback>Avatar</AvatarFallback>
          </Avatar>
          <div
            id="sidebar-title"
            class="text-lg font-bold mb-6 w-fit flex flex-col items-center"
          >
            <div id="sidebar-first-name">Pin-Chen</div>
            <div id="sidebar-last-name">Huang</div>
          </div>
        </div>
        <Separator class="my-4" label="Menu" />
        <div id="sidbar-content" class="flex flex-col gap-2 ml-4 w-100">
          <MenuItem
            :menuItems="menuMainItems"
            :group="group"
            :isGroupListOpen="isGroupListOpen"
            :toggleGroup="toggleGroup"
            :handleCurrentContent="handleCurrentContent"
          />
        </div>
      </div>
      <div id="content" :style="{ maxWidth: width < 768 ? '100%' : '65%' }">
        <component :is="currentComponent" :articleInfo="currentWriteup" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onBeforeUnmount } from "vue";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import About from "@/src/components/about/AboutContent.vue";
import avatar from "@/assets/images/avatar.jpg";
import ContactMe from "@/src/components/contact/ContactMe.vue";
import ProjectMenu from "@/src/components/project/ProjectMenu.vue";
import ToggleMenu from "@/src/components/ToggleMenu.vue";
import CTFWriteupTemplate from "@/src/components/project/CTFWriteupTemplate.vue";
import MenuItem from "@/src/components/MenuItem.vue";

const { isMenuOpen, isDark } = defineProps(["isMenuOpen", "isDark"]);
const emit = defineEmits(["update:isMenuOpen", "update:isDark"]);

const width = ref<number>(0);
const height = ref<number>(0);

const currentContent = ref<string>("about");

interface MenuItemProps {
  item: {
    name: string;
    hasSubItem: boolean;
    subItems?: Array<any>;
  };
}

const menuMainItems = ref([
  { name: "About Me", hasSubItem: false },
  {
    name: "Article",
    hasSubItem: true,
    subItems: [
      {
        name: "CTF Writeup",
        hasSubItem: true,
        subItems: [
          {
            name: "Web",
            hasSubItem: true,
            subItems: [
              { name: "Ave Mujica", hasSubItem: false },
              { name: "Web-2", hasSubItem: false },
              { name: "Web-3", hasSubItem: false },
            ],
          },
          { name: "Crypto", hasSubItem: false },
          { name: "Misc", hasSubItem: false },
        ],
      },
      "Project-2",
      "Project-3",
    ],
  },
  { name: "Contact Me", hasSubItem: false },
]);

const componentsMap = {
  about: About,
  Article: ProjectMenu,
  "CTF Writeup": ProjectMenu,
  "Project-2": "Project2",
  "Project-3": "Project3",
  "contact-me": ContactMe,
  Web: ProjectMenu,
  Crypto: ProjectMenu,
  Misc: ProjectMenu,
  "Ave Mujica": CTFWriteupTemplate,
};

const currentComponent = computed(
  () => componentsMap[currentContent.value] || "div",
);

interface WriteupProps {
  fileName: string;
  title: string;
  tags?: string[];
}

const currentWriteup = computed(() => {
  if (currentContent.value === "Ave Mujica") {
    return {
      fileName: "Web/AveMujica",
      title: "Ave Mujica",
      tags: ["TSCCTF 2025", "Web"],
    };
  }
  return {};
});

const updateDimensions = () => {
  width.value = window.innerWidth;
  height.value = window.innerHeight;
};

onMounted(() => {
  updateDimensions();
  window.addEventListener("resize", updateDimensions);
});

onBeforeUnmount(() => {
  window.removeEventListener("resize", updateDimensions);
});

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
const handleCurrentContent = (content: string) => {
  currentContent.value = content;
};
</script>
