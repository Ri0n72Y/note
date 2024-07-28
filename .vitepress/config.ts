import {defineConfig} from "vitepress"

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "数社知识工程",
  description: "技能互助平台",
  themeConfig: {
    nav: [
      {text: "首页", link: "/"},
      {text: "关于", link: "/about/about.md", activeMatch: "/about/"},
      {text: "编程", link: "/code/code.md"},
      {text: "市场", link: "/market/market.md"},
      {text: "机械", link: "/mech/mech.md"},
      {text: "数学", link: "/math/math.md"},
      {text: "基础科学", link: "/nature/nature.md"},
    ],

    sidebar: {
      "/about/": {
        base: "/about/",
        items: [{text: "平台建设初衷", link: "about.md"}],
      },
      "/code/": {
        base: "/code/",
        items: [{text: "软件开发", link: "code.md"}],
      },
      "/market/": {
        base: "/market/",
        items: [{text: "经济财会", link: "market.md"}],
      },
      "/mech/": {
        base: "/mech/",
        items: [{text: "机械设计", link: "mech.md"}],
      },
      "/math/": {
        base: "/math/",
        items: [{text: "数学", link: "math.md"}],
      },
      "/nature/": {
        base: "/nature/",
        items: [{text: "基础科学", link: "nature.md"}],
      },
    },

    socialLinks: [{icon: "github", link: "https://github.com/vuejs/vitepress"}],
  },
})
