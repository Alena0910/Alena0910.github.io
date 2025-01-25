<template>
  <div id="toggle-menu-content" class="flex flex-col gap-2 ml-4 w-100">
    <div
      @click="handleCurrentContent('about')"
      class="cursor-pointer hover:bg-secondary w-100 rounded-md p-2"
    >
      About Me
    </div>
    <div>
      <div
        id="toggle-menu-group-title"
        class="w-fit cursor-pointer flex flex-row items-center hover:bg-secondary w-100 rounded-md p-2"
        @click="(toggleGroup('Projects'), handleCurrentContent('Project-Menu'))"
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
        id="toggle-menu-group-content"
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
</template>

<script setup>
const currentContent = defineModel();

const handleCurrentContent = (content: string) => {
    currentContent.value = content;
};
</script>
