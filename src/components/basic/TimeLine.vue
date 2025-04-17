<template>
  <div class="text-[20px] border-b">其他經歷</div>
  <div class="flex justify-center">
    <div
      class="max-w-[100vw] relative left-[60px] top-0 flex flex-col m-5 pl-5 border-l-2 border-secondary"
      style="width: calc(100% - 60px)"
    >
      <div
        class="w-fit relative mb-[30px]"
        v-for="(event, index) in events"
        :key="index"
      >
        <div
          class="w-fit absolute left-[-120px] top-0 p-2 text-foreground rounded-md"
        >
          {{ event.date }}
        </div>
        <div
          class="relative left-[-25px] top-[16px] w-2 h-2 rounded-[50%] bg-primary"
        ></div>
        <div class="w-fit ml-[40px]">
          <div class="w-fit font-bold break-all">{{ event.title }}</div>
          <div class="w-fit mt-2 break-all">{{ event.description }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const events = ref([
  {
    date: "2022",
    title: "GICS 資安女婕思",
    description: "資安闖天關 高中職組 初賽",
  },
  {
    date: "2024.05",
    title: "臺北程式設計節城市儀表板大黑客松",
    description: "進入決選",
  },
  {
    date: "2024.09",
    title: "臺北程式設計節城市通微服務大黑客松",
    description: "初賽",
  },
  {
    //   date: '2024.09',
    title: "PatriotCTF",
    description: "162 th / 1360",
  },
  {
    date: "2024.10",
    title: "IRON CTF 2024",
    description: "29 th / 1033",
  },
  {
    date: "2024.11",
    title: "2024 Haunted Brewery",
    description: "40 th / 340",
  },
  {
    //   date: '2024.11',
    title: "臺北市立大學113.1全校程式設計實作競賽",
    description: "佳作",
  },
  {
    //   date: '2024.11',
    title: "INTIGRITI 1337UP LIVE 2024",
    description: "66 th / 1061",
  },
  {
    date: "2024.12",
    title: "0xL4ugh CTF",
    description: "104 th / 308",
  },
  {
    date: "2025.01",
    title: "IrisCTF2025",
    description: "242 th / 1064",
  },
  {
    //   date: '2025.01',
    title: "TSCCTF2025",
    description: "85 th / 509 (臺灣 個人賽)",
  },
  {
    date: "2025.03",
    title: "PearlCTF 2025",
    description: "44 th / 1024",
  },
  {
    //   date: '2025.03',
    title: "picoCTF 2025",
    description: "231 th / 10460",
  },
]);
</script>
