<template>
  <Combobox v-model="modelValue" v-model:open="open" :ignore-filter="true">
    <ComboboxAnchor as-child>
      <TagsInput v-model="modelValue" class="px-2 gap-2 w-80">
        <div class="flex gap-2 flex-wrap items-center h-[2rem] overflow-y-auto">
          <TagsInputItem
            v-for="(item, index) in modelValue"
            :key="`${item}-${index}`"
            :value="item"
          >
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
            v-for="(tag, index) in [...new Set(filteredTags)]"
            :key="`${tag}-${index}`"
            :value="tag"
            @select.prevent="
              (ev) => {
                if (typeof ev.detail.value === 'string') {
                  handleNewTagAdded(ev.detail.value);
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
import { computed, ref, watch } from "vue";
import articleInfomation from "@/src/utils/articleInfomation.json";
import { WORD_KEYWORD } from "@/src/utils/constants";
import type { Articles } from "@/src/utils/constants";

const emit = defineEmits(["updateArticlesStatus"]);

const tags = [
  ...new Set(
    Object.values(articleInfomation)
      .flatMap((article: Articles) => article.tags)
      .filter((tag: string) => tag !== "" && tag !== undefined),
  ),
];
const modelValue = ref<string[]>([]);
const open = ref<boolean>(false);
const searchTerm = ref<string>("");

const { contains } = useFilter({ sensitivity: "base" });
const filteredTags = computed(() => {
  const options = tags
    .filter((tag: string) => tag && !modelValue.value.includes(tag))
    .map((tag) => tag.trim())
    .filter((tag) => tag.length > 0)
    .sort((a, b) => a.length - b.length);
  return searchTerm.value
    ? options.filter((option) => contains(option, searchTerm.value))
    : options;
});

const handleNewTagAdded = (tag: string) => {
  const cleanTag = tag.trim();
  if (!cleanTag || modelValue.value.includes(cleanTag)) return;
  modelValue.value = [...modelValue.value, cleanTag];
  searchTerm.value = "";
};

const filterArticles = (articles: Articles[], modelValue: string[]) => {
  if (modelValue.length === 0) return articles;
  const articlesWithAllTags = articles.filter((article: Articles) =>
    modelValue.every((tag) => article.tags.includes(tag)),
  );
  const articlesWithAnyTag = articles.filter((article: Articles) =>
    modelValue.some((tag) => article.tags.includes(tag)),
  );
  const uniqueArticles = [
    ...new Set([...articlesWithAllTags, ...articlesWithAnyTag]),
  ];

  return uniqueArticles;
};

watch(
  modelValue,
  (newValue: string[]) => {
    const filtered = filterArticles(Object.values(articleInfomation), newValue);
    emit("updateArticlesStatus", filtered);
  },
  { immediate: true },
);
</script>
