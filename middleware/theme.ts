export default defineNuxtRouteMiddleware(() => {
  const isDark = useCookie("isDark").value === "true";
  document.body.classList.toggle("dark", isDark);
});
