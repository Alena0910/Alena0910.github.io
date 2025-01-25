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
        class="flex flex-col position-fixed top-5 left-5 rounded-lg border-solid border-2 w-56 h-dvh px-4 py-8"
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
          <div
            @click="handleCurrentContent('about')"
            class="cursor-pointer hover:bg-secondary w-100 rounded-md p-2"
          >
            About Me
          </div>
          <div>
            <div
              id="sidebar-group-title"
              class="w-fit cursor-pointer flex flex-row items-center hover:bg-secondary w-100 rounded-md p-2"
              @click="
                (toggleGroup('Projects'), handleCurrentContent('Project-Menu'))
              "
            >
              Article
              <div
                class="text-gray-400 rounded-full w-6 h-6 flex items-center justify-center"
              >
                <ChevronDown v-if="!isGroupListOpen" />
                <ChevronUp v-else />
              </div>
            </div>
            <div
              id="sidebar-group-content"
              class="w-fit flex flex-col mt-2 ml-4 gap-2"
              v-if="group.Projects"
            >
              <div
                @click="handleCurrentContent('Project-1')"
                class="cursor-pointer hover:bg-secondary w-100 rounded-md p-2"
              >
                CTF Writeup
              </div>
              <div
                @click="handleCurrentContent('Project-2')"
                class="cursor-pointer hover:bg-secondary w-100 rounded-md p-2"
              >
                Project 2
              </div>
              <div
                @click="handleCurrentContent('Project-3')"
                class="cursor-pointer hover:bg-secondary w-100 rounded-md p-2"
              >
                Project 3
              </div>
            </div>
          </div>
          <div
            @click="handleCurrentContent('contact-me')"
            class="cursor-pointer hover:bg-secondary w-100 rounded-md p-2"
          >
            Contact Me
          </div>
        </div>
      </div>
      <div id="content" :style="{ maxWidth: width < 768 ? '100%' : '65%' }">
        <div v-if="currentContent === 'about'">
          <About />
        </div>
        <div v-else-if="currentContent === 'Project-Menu'">
          <ProjectMenu />
        </div>
        <div v-else-if="currentContent === 'Project-1'">Project-1</div>
        <div v-else-if="currentContent === 'Project-2'">Project-2</div>
        <div v-else-if="currentContent === 'Project-3'">Project-3</div>
        <div v-else-if="currentContent === 'contact-me'">
          <ContactMe />
        </div>
        <div v-else>
          <div>404 Not Found</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from "vue";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import About from "@/src/components/about/AboutContent.vue";
import avatar from "@/assets/images/avatar.jpg";
import { ChevronDown, ChevronUp } from "lucide-vue-next";
import ContactMe from "@/src/components/contact/ContactMe.vue";
import ProjectMenu from "@/src/components/project/ProjectMenu.vue";
import ToggleMenu from "@/src/components/ToggleMenu.vue";

const { isMenuOpen, isDark } = defineProps(["isMenuOpen", "isDark"]);
const emit = defineEmits(["update:isMenuOpen", "update:isDark"]);

const width = ref<number>(0);
const height = ref<number>(0);

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
const currentContent = ref<string>("about");
</script>
