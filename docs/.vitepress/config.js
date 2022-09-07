// 图片放大预览效果
import mdItCustomAttrs from "markdown-it-custom-attrs";
module.exports = {
  markdown: {
    config: (md) => {
      // use more markdown-it plugins!
      md.use(mdItCustomAttrs, "image", {
        "data-fancybox": "gallery",
      });
    },
  },
  // 引入图片灯箱js和css文件
  head: [
    [
      "link",
      {
        rel: "stylesheet",
        href: "https://cdn.jsdelivr.net/npm/@fancyapps/ui/dist/fancybox.css",
      },
    ],
    [
      "link",
      {
        rel: "icon",
        href: "/icon/果冻.png",
      },
    ],
    [
      "script",
      {
        src: "https://cdn.jsdelivr.net/npm/@fancyapps/ui@4.0/dist/fancybox.umd.js",
      },
    ],
  ],
  title: "我的笔记", //标题
  description: "Just playing around.", //描述
  //ineNumbers: true, //代码块是否启用行号
  //base: "./", //基础 URL
  //language: "zh-CN", //作为<html lang="zh-CN
  //   appearance: true, //是否启用"暗模式"
  //   lastUpdated: true, //最近更新时间FF
  //   outDir: '../public', //输出目录
  titleTemplate: "Vite & Vue powered static site generator",

  themeConfig: {
    //网站有徽标
    // logo: '/my-logo.svg',

    //大纲标题
    outlineTitle: "大纲：",

    // 主题配置 Algolia 搜索
    algolia: {
      apiKey: "your_api_key",
      indexName: "index_name",
    },

    //导航
    nav: [
      { text: "Guide", link: "/guide" },
      {
        text: "Dropdown Menu",
        items: [
          { text: "Item A", link: "/item-1" },
          { text: "Item B", link: "/item-2" },
          { text: "Item C", link: "/item-3" },
        ],
      },
    ],

    // 侧边栏
    sidebar: [
      {
        text: "目录：",
        collapsible: true,
        items: [
          { text: "H4C2", link: "/my_md/H4C2" },
          { text: "H5C3新增样式", link: "/my_md/H5C3新增样式" },
          { text: "JavaScript", link: "/my_md/JavaScript" },
          {
            text: "jQuery+BootStrap+Less",
            items: [
              { text: "jQuery", link: "/my_md/jQueryBootStrapLess/jQuery" },
              { text: "Less", link: "/my_md/jQueryBootStrapLess/Less" },
              { text: "工程化", link: "/my_md/jQueryBootStrapLess/工程化" },
              { text: "ES5", link: "/my_md/jQueryBootStrapLess/ES5" },
              { text: "ES6", link: "/my_md/jQueryBootStrapLess/ES6" },
            ],
          },
          { text: "nodeJS", link: "/my_md/nodeJS" },
          { text: "数据库", link: "/my_md/数据库" },
          { text: "AJAX", link: "/my_md/AJAX" },
          { text: "React", link: "/my_md/React" },
          { text: "Vue2", link: "/my_md/Vue2" },
          { text: "Vue3", link: "/my_md/Vue3" },
          { text: "UI组件库", link: "/my_md/UI组件库" },
          { text: "Vue权限相关", link: "/my_md/Vue权限相关" },
          { text: "脚手架", link: "/my_md/脚手架" },
          { text: "TypeScript", link: "/my_md/TypeScript" },
          { text: "移动端", link: "/my_md/移动端" },
          { text: "小程序", link: "/my_md/小程序" },
          { text: "Echarts", link: "/my_md/Echarts" },
          { text: "Electron", link: "/my_md/Electron" },
          { text: "test", link: "/test/index.md" },
        ],
      },
    ],

    //社交链接
    socialLinks: [
      { icon: "github", link: "https://github.com/HuXiTai/My-Notes.git" },
      { icon: "twitter", link: "..." },
      // You can also add custom icons by passing SVG as string:
      {
        icon: {
          svg: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Dribbble</title><path d="M12...6.38z"/></svg>',
        },
        link: "...",
      },
    ],

    //页脚
    footer: {
      message: "Released under the MIT License.",
      copyright: "Copyright © 2019-present Evan You",
    },

    //文档页脚
    docFooter: {
      prev: "上一页",
      next: "下一页",
    },
  },
};
