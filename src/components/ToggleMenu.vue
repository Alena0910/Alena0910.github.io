<template>
  <div
    id="toggle-menu"
    class="flex flex-col w-full absolute left-0 bg-background/90 px-6 border-b"
    ref="toggleMenuRef"
  >
    <div
      id="sidebar-header"
      class="flex flex-row items-center justify-center gap-x-4"
    >
      <Avatar class="size-10">
        <AvatarImage :src="avatar" alt="@radix-vue" />
        <AvatarFallback>Avatar</AvatarFallback>
      </Avatar>
      <div
        id="sidebar-title"
        class="w-fit flex flex-col items-center"
        v-if="width > 250"
      >
        Pin-Chen Huang
      </div>
    </div>
    <div id="toggle-menu-content" class="flex flex-col gap-2 w-full">
      <div
        @click.stop="emit('update:currentContent', 'about')"
        class="cursor-pointer hover:bg-secondary rounded-md p-2 flex justify-center"
      >
        About Me
      </div>
      <div>
        <div
          id="toggle-menu-group-title"
          class="cursor-pointer flex flex-row items-center hover:bg-secondary rounded-md p-2 justify-center"
          @click="
            (toggleGroup('Projects'),
            emit('update:currentContent', 'Project-Menu'))
          "
        >
          Article
          <div
            class="text-gray-400 rounded-full w-6 h-6 flex items-center justify-center"
          >
            <ChevronDown v-if="!isGroupListOpen['Projects']" />
            <ChevronUp v-else />
          </div>
        </div>
        <div
          id="toggle-menu-group-content"
          class="flex flex-col mt-2 gap-2 w-100 justify-center bg-primary"
          v-if="group.Projects"
        >
          <div
            @click.stop="emit('update:currentContent', 'Project-1')"
            class="cursor-pointer hover:bg-secondary w-100 rounded-md p-2 flex justify-center"
          >
            CTF Writeup
          </div>
          <div
            @click.stop="emit('update:currentContent', 'Project-2')"
            class="cursor-pointer hover:bg-secondary w-100 rounded-md p-2 flex justify-center"
          >
            Project 2
          </div>
          <div
            @click.stop="emit('update:currentContent', 'Project-3')"
            class="cursor-pointer hover:bg-secondary w-100 rounded-md p-2 flex justify-center"
          >
            Project 3
          </div>
        </div>
      </div>
      <div
        @click.stop="emit('update:currentContent', 'contact-me')"
        class="cursor-pointer hover:bg-secondary rounded-md p-2 flex justify-center"
      >
        Contact Me
      </div>
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
import { ref, defineProps, defineEmits, onMounted, onBeforeUnmount } from "vue";
import { ChevronDown, ChevronUp } from "lucide-vue-next";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import avatar from "@/assets/images/avatar.jpg";
import { Switch } from "@/components/ui/switch";
import { Icon } from "@iconify/vue";

defineProps(["currentContent", "isDark", "isMenuOpen"]);
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
</script>
