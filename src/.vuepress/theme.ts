import { hopeTheme } from "vuepress-theme-hope";
import { getDirname, path } from "vuepress/utils";
import { dateSorter } from "@vuepress/helper";

import navbar from "./navbar.js";
import sidebar from "./sidebar.js";

export default hopeTheme({
  hostname: "https://himastatut.my.id",
  pageInfo: ["Author", "Original", "Date", "PageView", "ReadingTime", "Category", "Tag", "Word"],
  hotReload: true,
  author: {
    name: "Himastatut Docs",
    url: "https://himastatut.my.id",
    email: "himastatut@gmail.com",
  },
  blogLocales: {
    slide: "Slides",
    original: "Original",
  },
  contributors: true,
  logo: "logo-tiny.webp",
  navbarAutoHide: "none",
  toc: true,
  license: " | MIT License",

  repo: "himastat-ut/himastatut_docs",
  repoLabel: "GitHub",
  repoDisplay: true,

  docsDir: "src",
  docsBranch: "main",

  // navbar
  navbar,

  // sidebar
  sidebar,

  footer: "Theme by <a href='https://himastatut.my.id' target='_blank'>Himpunan Mahasiswa Universitas Terbuka</a>",

  displayFooter: true,

  // encrypt: {
  //   config: {
  //     "/demo/encrypt.html": {
  //       hint: "Password: 1234",
  //       password: "1234",
  //     },
  //   },
  // },

  metaLocales: {
    editLink: "Edit this page on GitHub",
  },

  // These features are enabled for demo, only preserve features you need here
  markdown: {
    footnote: true,
    align: true,
    attrs: true,
    codeTabs: true,
    component: true,
    demo: true,
    figure: true,
    gfm: true,
    imgLazyload: true,
    imgSize: true,
    include: true,
    mark: true,
    imgMark: true,
    plantuml: true,
    spoiler: true,
    alert: true,
    stylize: [
      {
        matcher: "Recommended",
        replacer: ({ tag }) => {
          if (tag === "em")
            return {
              tag: "Badge",
              attrs: { type: "tip" },
              content: "Recommended",
            };
        },
      },
    ],
    sub: true,
    sup: true,
    tabs: true,
    tasklist: true,
    vPre: true,
    highlighter: {
      type: "shiki",
    },

    // uncomment these if you need TeX support
    math: {
      // install katex before enabling it
      type: "katex",
      // or install mathjax-full before enabling it
      // type: "mathjax",
    },

    // install chart.js before enabling it
    chartjs: true,

    // install echarts before enabling it
    echarts: true,

    // install flowchart.ts before enabling it
    flowchart: true,

    // install mermaid before enabling it
    mermaid: true,

    // playground: {
    //   presets: ["ts", "vue"],
    // },

    // install @vue/repl before enabling it
    // vuePlayground: true,

    // install sandpack-vue3 before enabling it
    // sandpack: true,

    // install @vuepress/plugin-revealjs and uncomment these if you need slides
    revealjs: {
      plugins: ["highlight", "math", "search", "notes", "zoom"],
    },
  },
  fullscreen: true,
  focus: true,
  pure: true,
  print: true,
  plugins: {

    activeHeaderLinks: true,
    catalog: true,
    copyCode: {
      duration: 2000,
      showInMobile: true,
    },
    copyright: true,
    git: {
      changelog: true,
      contributors: true,
      createdTime: true,
      updatedTime: true,
    },
    photoSwipe:true,
    readingTime:true,
    sitemap: {
      devHostname: "http://localhost:8080",
      changefreq: "daily",
      devServer: true,
      sitemapFilename: "sitemap.xml",
      sitemapXSLFilename: "sitemap.xsl",
      xmlNameSpace: {
        image:true,
        news:true,
        video:true,
        xhtml:true,
      },
    },
    seo: {
      autoDescription: true,
    },
    blog: {      
      // Konfigurasi kategori
      category: "/category/",
      categoryItem: "/category/:name/",
      star: "/star/",

      article: "/article/",
      timeline: "/timeline/",
      
      // Konfigurasi tag
      tag: "/tag/",
      // tagItem: "/tag/:name/",
      type: [
        {
          key: "slide",
          filter: (page) => page.frontmatter.layout === "Slide",
          frontmatter: () => ({ title: "Slides" }),
        },
        {
          key: "original",
          filter: (page) => !!page.frontmatter.original,
          sorter: (pageA, pageB) =>
            dateSorter(pageA.frontmatter.date, pageB.frontmatter.date),
          frontmatter: () => ({ title: "Original" }),
        },
      ],
    },
    search: {
      hotKeys: ['s', '/'],
      maxSuggestions: 10,
      isSearchable: (page) => page.path !== '/',
      getExtraFields: (page) => [
        ...(Array.isArray(page.frontmatter.tags) ? page.frontmatter.tags : [page.frontmatter.tags]).filter((v) => typeof v === "string"),
        ...(page.frontmatter.description ? [String(page.frontmatter.description)] : []),
        ...(Array.isArray(page.frontmatter.head) ? page.frontmatter.head.flat().filter((v) => typeof v === "string") : []),
        ...(page.frontmatter.lang ? [String(page.frontmatter.lang)] : []),
        ...(page.frontmatter.layout ? [String(page.frontmatter.layout)] : []),
        ...(page.frontmatter.title ? [String(page.frontmatter.title)] : []),
        ...(page.frontmatter.date ? [String(page.frontmatter.date)] : []),
        ...(page.frontmatter.permalink ? [String(page.frontmatter.permalink)] : []),
        ...(page.frontmatter.permalinkPattern ? [String(page.frontmatter.permalinkPattern)] : []),
      ],
    },
    // docsearch: {
    //   appId: 'VXX6JFCN73',
    //   apiKey: 'ebaf14c766594e6e6822b7ebfe82b887',
    //   indexName: 'himastatut_my_id_vxx6jfcn73_articles',
    //   locales: {
    //     '/': {
    //       placeholder: 'Search Documentation',
    //       translations: {
    //         button: {
    //           buttonText: 'Search Documentation',
    //         },
    //       },
    //     }
    //   },
    //   maxResultsPerGroup: 7,
    //   disableUserPersonalization:false,
    //   searchParameters: {
    //     advancedSyntax: true,
    //   }
    // },
    comment: {
      provider: "Giscus", // Using Giscus for the comment system
      repo: "himastat-ut/himastatut_docs", // Your GitHub repository under your organization
      repoId: "R_kgDOOG3VsA", // Your repo ID (you get this from Giscus settings)
      category: "Q&A", // The discussion category where comments will be posted
      categoryId: "DIC_kwDOOG3VsM4CoEwL", // The category ID (you get this from Giscus settings)
      mapping: "pathname", // Mapping option for discussions (you can also use "title", "og:title", etc.)
      reactionsEnabled: true, // Enabling reactions for discussions
      inputPosition: "top", // Place comment input box at the top of the comments section
    },

    components: {
      components: [
        "Badge", 
        "VPCard",
        "VidStack",
        "ArtPlayer",
        "PDF",
        "Share", 
        "VPBanner",
        "SiteInfo",
        "BiliBili",
        "CodePen",
        "StackBlitz",
      ],
      componentOptions: {
        share: {
          services: [
            "buffer",
            "douban",
            "email",
            "evernote",
            "facebook",
            "flipboard",
            "line",
            "linkedin",
            "messenger",
            "pinterest",
            "qq",
            "qzone",
            "qrcode",
            "reddit",
            "skype",
            "sms",
            "snapchat",
            "telegram",
            "tumblr",
            "twitter",
            "vk",
            "weibo",
            "whatsapp",
            "wordpress",
          ]
        }
      }
    },

    icon: {
      prefix: "fa6-solid:",
    },
    // install @vuepress/plugin-pwa and uncomment these if you want a PWA
    pwa: {
        // tambahkan ikon lain jika perlu
        // icons: [ ... ]
      },
    // pwa: {
    //   favicon: "/favicon.ico",
      // cacheHTML: true,
      // cacheImage: true,
      // appendBase: true,
      // update: "available",
      // serviceWorker: true,
      // updatePopup: true,
      // apple: {
      //   icon: "logo-tiny.webp",
      //   statusBarColor: "black",
      // },
      // msTile: {
      //   image: "logo-tiny.webp",
      //   color: "#ffffff",
      // },
    //   manifest: {
    //     icons: [
    //       {
    //         src: "/assets/icon/chrome-mask-512webp",
    //         sizes: "512x512",
    //         purpose: "maskable",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-mask-192webp",
    //         sizes: "192x192",
    //         purpose: "maskable",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-512webp",
    //         sizes: "512x512",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-192webp",
    //         sizes: "192x192",
    //         type: "image/png",
    //       },iconicon
    //     ],
    //     shortcuts: [
    //       {
    //         name: "Demo",
    //         short_name: "Demo",
    //         url: "/demo/",
    //         icons: [
    //           {
    //             src: "/assets/icon/guide-maskablewebp",
    //             sizes: "192x192",
    //             purpose: "maskable",
    //             type: "image/png",
    //           },
    //         ],
    //       },
    //     ],
    //   },
    },
  },
);
