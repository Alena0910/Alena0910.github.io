<template>
  <div
    class="container flex flex-col gap-4 mb-10 overflow-hidden border-secondary border-0"
  >
    <div id="about-title" class="text-[24px] font-bold mt-4">
      {{ FIRST_NAME }} {{ LAST_NAME }}
    </div>
    <div class="flex items-center">
      <img :src="aboutImage" alt="about" class="rounded-lg w-60" />
    </div>
    <div class="flex flex-col gap-10 my-4">
      <div>
        <div class="mb-4 text-[20px] border-b">
          {{ WORD_INDIVIDUAL_EXPERIENCE }}
        </div>
        <div
          class="ml-4 flex flex-col gap-2"
          v-for="description in profileDescription"
          :key="description"
        >
          <p>{{ description }}</p>
        </div>
      </div>
      <School :data="education" />
      <TimeLine />
      <div class="flex flex-col gap-10 my-4">
        <ProjectDescription
          v-for="project in projects"
          :key="project.title"
          :project="project"
        />
        <Skills :skills="skills" />
        <ContactMe />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import aboutImage from "@/assets/images/aboutImage.jpg";
import ContactMe from "@/src/components/contact/contactMe.vue";
import {
  FIRST_NAME,
  LAST_NAME,
  WORD_INDIVIDUAL_EXPERIENCE,
} from "@/src/utils/constants";
import TimeLine from "../basic/TimeLine.vue";
import ProjectDescription from "./ProjectDescription.vue";
import PortalImage from "@/assets/images/portal_img.png";
import CarbonImage from "@/assets/images/carbon_img.png";
import Skills from "@/src/components/about/Skills.vue";
import School from "@/src/components/about/School.vue";

onMounted(() => {
  const element = document.getElementById("app");
  const scrollbarWidth =
    window.innerWidth - document.documentElement.clientWidth;
  if (element) {
    element.style.width = `calc(100vw - ${scrollbarWidth}px)`;
  }

  window.addEventListener("resize", () => {
    if (element) {
      element.style.width = `calc(100vw - ${scrollbarWidth}px)`;
    }
  });
});

const profileDescription = ref([
  "我是黃品甄，目前就讀於臺北市立大學資訊科學學系，我對於學習程式有著濃厚的興趣，並且積極提升能力。最近偶爾會打 CTF ，是一個新手，希望能學到更多資安知識。",
  "高中就讀於臺北市立中山女子高級中學，高中期間就讀資訊班群，並製作網頁專題，曾參加2022 GiCS 資安女婕思。曾於 2022 年 9 月就讀逢甲資訊工程學系，期間參加逢甲黑客社，並在系上程式設計課學習 C 語言，於該年 11 月底返回臺北休學重考。",
  "就讀北市大期間，CPE 最高題數為 4 題，於 2024 年 5 月及 9 月參加臺北程式設計節大黑客松，以及參與請假系統維護和學生減碳專案開發，於大二上擔任大一 Java 程式設計課程助教。",
]);

const education = ref([
  {
    school: "臺北市立大學",
    major: "資訊科學系",
    degree: "大二",
    status: "就讀中",
    startDate: "2023/09",
    endDate: "present",
  },
  {
    school: "臺北市立中山女子高級中學",
    major: "普通科",
    degree: "高中",
    status: "畢業",
    startDate: "2019/09",
    endDate: "2022/06",
  },
]);

const projects = ref([
  {
    image: PortalImage,
    title: "請假系統維護團隊",
    projectName: "請假系統",
    time: "2024/07 ~ present",
    about: "學生可於此系統進行請假相關事宜，並檢視請假紀錄。",
    description:
      "於上線一年後加入維護團隊，與現團隊成員一同維護請假系統，並且參與後續前端開發。",
    link: "https://portal.utaipei.edu.tw/",
    skills: ["React", "JavaScript", "CSS"],
  },
  {
    image: CarbonImage,
    title: "減碳系統開發團隊",
    projectName: "Carbon Diary",
    time: "2024/08 ~ present",
    about:
      "學生用餐時若有攜帶環保餐具，可掃描店家 QRCode，並於本系統紀錄減碳次數，管理員可於管理者介面檢視減碳紀錄、抽獎名單及下載.csv。",
    description: "負責前端開發，並且參與後續維護。",
    link: "https://carbon-diary.utaipei.edu.tw/login",
    skills: ["React", "Next.js", "TypeScript", "CSS"],
  },
]);
const skills = ref([
  {
    title: "語言與框架",
    details: [
      "C",
      "C++",
      "Java",
      "Python",
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "Vue.js",
      "PHP",
    ],
  },
  {
    title: "DevOps",
    details: ["Docker", "Git", "GitHub"],
  },
  {
    title: "資料庫",
    details: ["MySQL"],
  },
]);
</script>
