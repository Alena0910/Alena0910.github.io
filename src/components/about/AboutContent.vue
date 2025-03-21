<template>
  <div class="container flex flex-col gap-4 mb-10 h-full">
    <div id="about-title" class="text-[24px] font-bold mt-4">
      {{ FIRST_NAME }} {{ LAST_NAME }}
    </div>
    <div id="about-image" class="flex items-center">
      <img :src="aboutImage" alt="about" class="rounded-lg w-60" />
    </div>
    <div id="about-content" class="flex flex-col gap-10 my-4">
      <div id="about-intro">
        <div id="about-intro-title" class="mb-4 text-[20px] border-b">
          個人經歷
        </div>
        <div id="about-intro-article" class="ml-4 flex flex-col gap-2">
          <p>
            我是黃品甄，目前就讀於台北市立大學資訊工程學系，我對於學習程式有著濃厚的興趣，並且積極提升能力。最近偶爾會打CTF，是一個新手，希望能學到更多資安知識。
          </p>
          <p>
            高中就讀於台北市立中山女子高級中學，高中期間就讀資訊班群，並製作網頁專題，曾參加2022GiCS資安女婕思。曾於2022年9月就讀逢甲資訊工程學系，期間參加逢甲黑客社，並在系上程式設計課學習C語言，於該年11月底返回台北休學重考。
          </p>
          <p>
            就讀北市大期間，CPE最高題數為4題，於2024年5月及9月參加臺北程式設計節大黑客松，以及參與請假系統維護和學生減碳專案開發，於大二上擔任大一Java程式設計課程助教。
          </p>
        </div>
      </div>
      <div id="about-team" class="flex flex-col gap-10 my-4">
        <div id="about-dayoff">
          <div id="about-dayoff-title" class="mb-4 text-[20px] border-b">
            請假系統維護團隊
          </div>
          <div id="about-dayoff-content" class="ml-4 flex flex-col gap-3">
            於2024年七月加入請假系統維護團隊，與團隊成員一同維護請假系統，並且參與後續前端開發。
            <Button class="flex items-center mt-4 w-fit">
              <a
                target="_blank"
                href="https://portal.utaipei.edu.tw/"
                class="text-white font-normal"
                >請假系統</a
              >
              <ExternalLink />
            </Button>
          </div>
        </div>
        <div id="about-carbon-diary">
          <div id="about-carbon-diary-title" class="mb-4 text-[20px] border-b">
            減碳系統開發團隊
          </div>
          <div id="about-dayoff-content" class="ml-4 flex flex-col gap-3">
            2024年八月學生減碳專案開始開發，負責前端開發，並且參與後續維護。
            <Button class="flex items-center mt-4 w-fit">
              <a
                target="_blank"
                href="https://carbon-diary.utaipei.edu.tw/login"
                class="text-white"
                >Carbon Diary</a
              >
              <ExternalLink />
            </Button>
          </div>
          <ContactMe />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-vue-next";
import aboutImage from "@/assets/images/aboutImage.jpg";
import ContactMe from "@/src/components/contact/contactMe.vue";
import { FIRST_NAME, LAST_NAME } from "@/src/utils/constants";

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
</script>
