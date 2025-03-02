<template>
  <div class="w-full">
    <div
      class="fixed top-[100px] left-0 w-full z-50"
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
    <div :class="width >= 768 ? 'w-full flex flex-row gap-6' : 'w-full'">
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
      <div
        id="content"
        :style="{ maxWidth: width < 768 ? '100dvw' : '65%' }"
        class="box-border"
      >
        <component
          :is="currentComponent"
          :articleInfo="currentWriteup"
          :key="currentContent"
        />
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
import CTFWriteupTemplate from "@/src/components/project/CTFWriteupTemplate.vue";
import ErrorMsg from "@/src/components/ErrorMsg.vue";
import MenuItem from "@/src/components/MenuItem.vue";
import menuItemsData from "@/src/utils/menuList.json";
import articleInfomation from "@/src/utils/articleInfomation.json";
import { FIRST_NAME, LAST_NAME, WORD_AVATAR } from "@/src/utils/constants";

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

const componentsMap: { [key: string]: Component } = {
  "About Me": About,
  "CTF Writeup": prevComponent,
  Web: prevComponent,
  Crypto: prevComponent,
  Misc: prevComponent,
  "Ave Mujica": CTFWriteupTemplate,
  "Be IDol": CTFWriteupTemplate,
  Mango: CTFWriteupTemplate,
  "2DES": CTFWriteupTemplate,
  "Mystery Presentation": CTFWriteupTemplate,
  "Packet Detective": CTFWriteupTemplate,
  "Math Test": CTFWriteupTemplate,
  "3-Cipher": CTFWriteupTemplate,
  "addition-quiz": CTFWriteupTemplate,
  php7cmp4re: CTFWriteupTemplate,
  ROT128: CTFWriteupTemplate,
  "64se64": CTFWriteupTemplate,
  "Snowing!": CTFWriteupTemplate,
  lolololologfile: CTFWriteupTemplate,
  d: CTFWriteupTemplate,
  "xss-1": CTFWriteupTemplate,
  "xss-2": CTFWriteupTemplate,
  "csrf-1": CTFWriteupTemplate,
  "csrf-2": CTFWriteupTemplate,
  simple_sqli: CTFWriteupTemplate,
  "image-storage": CTFWriteupTemplate,
  "Mango (Dreamhack)": CTFWriteupTemplate,
  "session-basic": CTFWriteupTemplate,
  "Summer Fan": CTFWriteupTemplate,
  "Secure Secret": CTFWriteupTemplate,
  "rev-basic-1": CTFWriteupTemplate,
  "[wargame.kr] strcmp": CTFWriteupTemplate,
  "Small Counter": CTFWriteupTemplate,
};

const currentComponent = computed(
  () => componentsMap[currentContent.value] || ErrorMsg,
);

interface WriteupProps {
  fileName: string;
  title: string;
  tags?: string[];
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
