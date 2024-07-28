import {DefaultTheme, defineConfig} from "vitepress"
import {chineseSearchOptimize, pagefindPlugin} from "vitepress-plugin-pagefind"

// https://vitepress.dev/reference/site-config
export default defineConfig({
  vite: {
    plugins: [
      pagefindPlugin({
        btnPlaceholder: "全局搜索",
        placeholder: "全局搜索关键词",
        emptyText: "找不到相关内容",
        heading: "共: {{searchResult}} 条结果",
        customSearchQuery: chineseSearchOptimize,
      }),
    ],
  },
  base: "/note",
  title: "数社知识工程",
  description: "技能互助平台",
  lang: "zh-CN",
  themeConfig: {
    // 页面元素中文。
    outline: {label: "页面大纲", level: [2, 3]},
    docFooter: {prev: "前页", next: "后页"},
    editLink: {
      text: "在 GitHub 上编辑此页面",
      pattern: "https://github.com/aprosail/notes/edit/dev/:path",
    },
    lastUpdated: {
      text: "最近更新时间",
      formatOptions: {
        dateStyle: "medium",
        timeStyle: "short",
        forceLocale: true,
      },
    },

    // 顶部导航栏。
    nav: [
      {text: "首页", link: "/"},
      {text: "关于", link: "/about/about.md", activeMatch: "/about/"},
      {text: "编程", link: "/code/code.md"},
      {text: "市场", link: "/market/market.md"},
      {text: "机械", link: "/mech/mech.md"},
      {text: "工程数学", link: "/math/math.md"},
      {text: "基础科学", link: "/nature/nature.md"},
    ],

    // 侧边目录，配置分布在下面各函数中。
    sidebar: {
      "/about/": {base: "/about/", items: sidebarAbout()},
      "/code/": {base: "/code/", items: sidebarCode()},
      "/market/": {base: "/market/", items: sidebarMarket()},
      "/mech/": {base: "/mech/", items: sidebarMech()},
      "/math/": {base: "/math/", items: sidebarMath()},
      "/nature/": {base: "/nature/", items: sidebarNature()},
    },

    socialLinks: [{icon: "github", link: "https://github.com/digso/note"}],
  },
})

/** 初衷、声明和基本使用说明。 */
function sidebarAbout(): DefaultTheme.SidebarItem[] {
  return [{text: "平台建设初衷", link: "about.md"}]
}

/** 编程基础及跨平台软件开发。 */
function sidebarCode(): DefaultTheme.SidebarItem[] {
  return [{text: "软件开发", link: "code.md"}]
}

/** 经济和经济法、财务、会计。 */
function sidebarMarket(): DefaultTheme.SidebarItem[] {
  return [{text: "经济财会", link: "market.md"}]
}

/** 机械设计、机电设计和嵌入式控制。 */
function sidebarMech(): DefaultTheme.SidebarItem[] {
  return [{text: "机械设计", link: "mech.md"}]
}

/** 作为基础知识的工程数学，包含初等数学和高等数学。 */
function sidebarMath(): DefaultTheme.SidebarItem[] {
  return [{text: "工程数学", link: "math.md"}]
}

/** 基础科学知识。 */
function sidebarNature(): DefaultTheme.SidebarItem[] {
  return [{text: "基础科学", link: "nature.md"}]
}
