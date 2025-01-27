// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/tailwindcss",
    "shadcn-nuxt",
    "@nuxtjs/color-mode",
    "@nuxt/content",
  ],
  css: ["@/index.css"],
  app: {
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      title: "Blog",
    },
  },
  routeRules: {
    "/": {
      prerender: true,
    },
  },
  colorMode: {
    classSuffix: "",
    preference: "system",
    fallback: "light",
  },
});
