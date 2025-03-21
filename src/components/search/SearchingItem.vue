<template>
  <Combobox v-model="modelValue" v-model:open="open" :ignore-filter="true">
    <ComboboxAnchor as-child>
      <TagsInput v-model="modelValue" class="px-2 gap-2 w-80">
        <div class="flex gap-2 flex-wrap items-center">
          <TagsInputItem v-for="item in modelValue" :key="item" :value="item">
            <TagsInputItemText />
            <TagsInputItemDelete />
          </TagsInputItem>
        </div>

        <ComboboxInput v-model="searchTerm" as-child>
          <TagsInputInput
            :placeholder="WORD_KEYWORD"
            class="min-w-[200px] w-full p-0 border-none focus-visible:ring-0 overflow-x-hidden overflow-y-auto"
            @keydown.enter.prevent
            @click="open = true"
          />
        </ComboboxInput>
      </TagsInput>

      <ComboboxList class="w-[--reka-popper-anchor-width]">
        <ComboboxEmpty />
        <ComboboxGroup>
          <ComboboxItem
            v-for="tag in filteredTags"
            :key="tag"
            :value="tag"
            @select.prevent="
              (ev) => {
                if (typeof ev.detail.value === 'string') {
                  searchTerm = '';
                  modelValue.push(ev.detail.value);
                }

                if (filteredTags.length === 0) {
                  open = false;
                }
              }
            "
          >
            {{ tag }}
          </ComboboxItem>
        </ComboboxGroup>
      </ComboboxList>
    </ComboboxAnchor>
  </Combobox>
</template>

<script setup lang="ts">
import {
  Combobox,
  ComboboxAnchor,
  ComboboxEmpty,
  ComboboxGroup,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
} from "@/components/ui/combobox";
import {
  TagsInput,
  TagsInputInput,
  TagsInputItem,
  TagsInputItemDelete,
  TagsInputItemText,
} from "@/components/ui/tags-input";
import { useFilter } from "reka-ui";
import { computed, ref } from "vue";
import articleInfomation from "@/src/utils/articleInfomation.json";
import { WORD_KEYWORD } from "@/src/utils/constants";
import type { Articles } from "@/src/utils/constants";

const emit = defineEmits(["updateArticlesStatus"]);

const tags = [
  ...new Set(
    Object.values(articleInfomation).flatMap((article) => article.tags),
  ),
];
const modelValue = ref<string[]>([]);
const open = ref<boolean>(false);
const searchTerm = ref<string>("");

const { contains } = useFilter({ sensitivity: "base" });
const filteredTags = computed(() => {
  const options = tags.filter((tag: string) => !modelValue.value.includes(tag));
  return searchTerm.value
    ? options.filter((option) => contains(option, searchTerm.value))
    : options;
});

const filterArticles = (articles: Articles[], modelValue: string[]) => {
  return articles.filter((article) => {
    return article.tags.some((tag) => modelValue.includes(tag));
  });
};

const selectTag = (tag: string) => {
  if (!modelValue.value.includes(tag)) {
    modelValue.value.push(tag);
  }
  searchTerm.value = ""; // Clear the search term after selecting a tag
  emit(
    "updateArticlesStatus",
    filterArticles(Object.values(articleInfomation), modelValue.value),
  );
};

watch(
  modelValue,
  (newValue) => {
    const filtered = filterArticles(Object.values(articleInfomation), newValue);
    emit("updateArticlesStatus", filtered);
  },
  { immediate: true },
);
</script>
