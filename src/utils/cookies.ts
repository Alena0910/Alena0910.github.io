import Cookies from "universal-cookie";

const checkThemeMode = () => {
  const cookies = new Cookies();
  if (cookies.get("themeMode") === "dark") {
    return "dark";
  } else {
    return "light";
  }
};

const setThemeMode = (themeMode: string) => {
  const cookies = new Cookies();
  cookies.set("themeMode", themeMode, { path: "/" });
};

const handleThemeMode = () => {
  if (checkThemeMode() === "dark") {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }
};

export { checkThemeMode, setThemeMode, handleThemeMode };
