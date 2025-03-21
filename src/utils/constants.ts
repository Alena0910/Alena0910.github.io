// basic
const WEBSITE_NAME = "Blog";
const FIRST_NAME = "Pin-Chen";
const LAST_NAME = "Huang";
const EMAIL = "pinzhenhuang0910@gmail.com";
const WORD_AVATAR = "PCH";
const WORD_LOADER = "Loading";
const WORD_GITHUB = "GitHub";
const WORD_LEETCODE = "LeetCode";
const WORD_INSTAGRAM = "Instagram";
const PERSONAL_WEBSITE = {
  github: "https://github.com/Alena0910",
  leetcode: "https://leetcode.com/u/pinzhenhuang0910/",
  instagram: "https://www.instagram.com/hpc_0910/",
};

// searching
const WORD_SEARCH = "搜尋";
const WORD_SEARCH_FOR_ARTICLE = "搜尋文章";
const WORD_SEARCH_NOT_FOUND = "找不到相關文章 (╥﹏╥) ";
const WORD_NO_SIMILAR_POST = "沒有相似文章 (๑•́ ₃ •̀๑)";
const WORD_KEYWORD = "關鍵字";
const WORD_SEARCH_RESULT = "筆搜尋結果";

// error
const ERROR_MESSAGE = {
  400: "Bad request",
  401: "Unauthorized",
  403: "Forbidden",
  404: "目前尚未開放此頁面或頁面不存在 (๑•́ ₃ •̀๑)",
  405: "Method not allowed",
  500: "Internal server error",
  501: "Not implemented",
  502: "Bad gateway",
  503: "Service unavailable",
  504: "Gateway timeout",
};
interface Articles {
  title: string;
  tags: string[];
  subItem?: object[];
}

export {
  WEBSITE_NAME,
  FIRST_NAME,
  LAST_NAME,
  EMAIL,
  WORD_AVATAR,
  WORD_LOADER,
  WORD_GITHUB,
  WORD_LEETCODE,
  WORD_INSTAGRAM,
  PERSONAL_WEBSITE,
  WORD_SEARCH,
  WORD_SEARCH_FOR_ARTICLE,
  WORD_SEARCH_NOT_FOUND,
  WORD_NO_SIMILAR_POST,
  WORD_KEYWORD,
  WORD_SEARCH_RESULT,
  ERROR_MESSAGE,
};

export type { Articles };
