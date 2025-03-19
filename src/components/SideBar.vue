<template>
  <div class="w-fit">
    <div
      class="fixed top-[100px] left-0 w-fit z-50"
      style="max-height: calc(100% - 100px)"
    >
      <ToggleMenu
        v-if="isMenuOpen && width < 768"
        :currentContent="currentContent"
        :isDark="isDark"
        :isMenuOpen="isMenuOpen"
        @update:currentContent="(content) => (currentContent = content)"
        @update:isDark="(dark) => emit('update:isDark', dark)"
        @update:isMenuOpen="(menuOpen) => emit('update:isMenuOpen', menuOpen)"
      />
    </div>
    <div
      :class="width >= 768 ? 'w-full flex flex-row gap-6 pb-[200px]' : 'w-full'"
    >
      <div
        class="flex flex-col position-fixed top-5 left-5 rounded-lg border-solid border-2 w-56 h-auto px-4 py-8 ml-12"
        v-if="width >= 768"
      >
        <div id="sidebar-header" class="flex flex-col items-center">
          <Avatar class="w-20 h-20 mb-2">
            <AvatarImage :src="avatar" alt="@radix-vue" />
            <AvatarFallback>{{ WORD_AVATAR }}</AvatarFallback>
          </Avatar>
          <div
            id="sidebar-title"
            class="text-lg font-bold mb-6 w-fit flex flex-col items-center"
          >
            <div id="sidebar-first-name">{{ FIRST_NAME }}</div>
            <div id="sidebar-last-name">{{ LAST_NAME }}</div>
          </div>
        </div>
        <Separator class="my-4" label="Menu" />
        <div
          id="sidbar-content"
          class="flex flex-col gap-2 w-100"
          style="max-width: 200px; overflow: hidden"
        >
          <MenuItem
            :menuItems="menuMainItems"
            :group="group"
            :currentContent="currentContent"
            :toggleGroup="toggleGroup"
            :handleCurrentContent="handleCurrentContent"
          />
        </div>
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
import ToggleMenu from "@/src/components/ToggleMenu.vue";
import ErrorMsg from "@/src/components/ErrorMsg.vue";
import MenuItem from "@/src/components/MenuItem.vue";
import menuItemsData from "@/src/utils/menuList.json";
import articleInfomation from "@/src/utils/articleInfomation.json";
import { FIRST_NAME, LAST_NAME, WORD_AVATAR } from "@/src/utils/constants";
import { componentsMap } from "@/src/utils/componentsMap";

const { isMenuOpen, isDark } = defineProps(["isMenuOpen", "isDark"]);
const emit = defineEmits(["update:isMenuOpen", "update:isDark"]);

const width = ref<number>(0);
const height = ref<number>(0);

const currentContent = ref<string>("About Me");

interface MenuItemProps {
  item: {
    name: string;
    hasSubItem: boolean;
    subItems?: Array<any>;
  };
}

const menuMainItems = ref(menuItemsData);
const prevContent = ref<string>("About Me");
const prevComponent = ref<Component>(About);

const currentComponent = computed(
  () => componentsMap[currentContent.value] || ErrorMsg,
);

interface WriteupProps {
  fileName: string;
  title: string;
  tags?: string[];
}

interface NormalArticleProps {
  fileName: string;
  title: string;
  tags?: string[];
  articleTheme: string;
}

const currentWriteup = computed(() => {
  const key = currentContent.value as keyof typeof articleInfomation;
  if (articleInfomation[key]) {
    return articleInfomation[key];
  }
  return {
    fileName: "404",
    title: "404",
    tags: ["404"],
  };
});

const updateDimensions = () => {
  width.value = window.innerWidth;
  height.value = window.innerHeight;
};

onMounted(async () => {
  if (isMenuOpen) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "";
  }
  updateDimensions();
  window.addEventListener("resize", updateDimensions);
});

onBeforeUnmount(() => {
  window.removeEventListener("resize", updateDimensions);
});

const group = ref<{ [key: string]: boolean }>({ Article: true });
const toggleGroup = (groupName: string) => {
  group.value[groupName] = !group.value[groupName];
};
const handleCurrentContent = (content: string) => {
  prevContent.value = currentContent.value;
  prevComponent.value = currentComponent.value;
  currentContent.value = content;
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

watch(
  () => isMenuOpen,
  (newVal) => {
    if (newVal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  },
);
</script>
