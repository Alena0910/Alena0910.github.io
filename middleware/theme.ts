export default defineNuxtRouteMiddleware(() => {
  const isDark = useCookie("mode").value === "dark";
  console.log("[middleware-theme] isDark", isDark);
  document.body.classList.toggle("dark", isDark);
});
