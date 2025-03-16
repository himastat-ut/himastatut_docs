import { hopeTheme } from "vuepress-theme-hope";

import navbar from "./navbar.js";
import sidebar from "./sidebar.js";

export default hopeTheme({
  hostname: "https://himastatutv2.netlify.app",

  author: {
    name: "Firmansyah Mukti Wijaya",
    url: "https://ikimukti.com",
  },

  logo: "logo.png",

  repo: "himastat-ut/himastatut_docs",
  repoLabel: "GitHub",
  repoDisplay: true,

  docsDir: "src",

  // navbar
  navbar,

  // sidebar
  sidebar,

  footer: "Himpunan Mahasiswa Statistika - Statistika UT © 2024",

  displayFooter: true,

  encrypt: {
    config: {
      "/demo/encrypt.html": {
        hint: "Password: 1234",
        password: "1234",
      },
    },
  },

  metaLocales: {
    editLink: "Edit this page on GitHub",
  },

  // These features are enabled for demo, only preserve features you need here
  markdown: {
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

    // uncomment these if you need TeX support
    // math: {
    //   // install katex before enabling it
    //   type: "katex",
    //   // or install mathjax-full before enabling it
    //   type: "mathjax",
    // },

    // install chart.js before enabling it
    // chartjs: true,

    // install echarts before enabling it
    // echarts: true,

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
    // revealjs: {
    //   plugins: ["highlight", "math", "search", "notes", "zoom"],
    // },
  },

  plugins: {
    slimsearch: {
      // Enable content indexing to improve the search quality
      indexContent: true,

      // Enable suggestions while typing in the search box
      suggestion: true,

      customFields: [
        {
          name: 'author',
          getter: (page) => {
            // Ensure this always returns a string or string[]
            return page.frontmatter.author || 'Unknown'; // 'Unknown' will be a fallback string
          },
          formatter: 'Author: $content',
        },
      ],

      // Customize the hotkeys for triggering the search box
      hotKeys: [
        { key: "k", ctrl: true },
        { key: "/", ctrl: true }
      ],

      // Store the last 5 search queries for history
      queryHistoryCount: 5,
      resultHistoryCount: 5,

      // Delay search to avoid triggering on every keystroke
      searchDelay: 150,

      // Filter pages to index
      filter: (page) => page.frontmatter.search !== false,

      // Sort search results by "max" or "total"
      sortStrategy: "max",

      // Enable hot reload for search results during development
      hotReload: true,

    },
    comment: {
      provider: "Giscus", // Using Giscus for the comment system
      repo: "himastat-ut/himastatut_docs", // Your GitHub repository under your organization
      repoId: "R_kgDOOG3VsA", // Your repo ID (you get this from Giscus settings)
      category: "Q&A", // The discussion category where comments will be posted
      categoryId: "DIC_kwDOOG3VsM4CoEwL", // The category ID (you get this from Giscus settings)
      mapping: "pathname", // Mapping option for discussions (you can also use "title", "og:title", etc.)
      reactionsEnabled: true, // Enabling reactions for discussions
      emitMetadata: true, // Emit discussion metadata for debugging
      inputPosition: "top", // Place comment input box at the top of the comments section
      theme: "preferred_color_scheme", // Use preferred color scheme (light/dark)
      lang: "en", // Language for the Giscus comment system
      loading: "lazy", // Lazy load comments when near the container
    },

    components: {
      components: ["Badge", "VPCard","VidStack",],
    },

    icon: {
      prefix: "fa6-solid:",
    },

    // install @vuepress/plugin-pwa and uncomment these if you want a PWA
    // pwa: {
    //   favicon: "/favicon.ico",
    //   cacheHTML: true,
    //   cacheImage: true,
    //   appendBase: true,
    //   apple: {
    //     icon: "/assets/icon/apple-icon-152.png",
    //     statusBarColor: "black",
    //   },
    //   msTile: {
    //     image: "/assets/icon/ms-icon-144.png",
    //     color: "#ffffff",
    //   },
    //   manifest: {
    //     icons: [
    //       {
    //         src: "/assets/icon/chrome-mask-512.png",
    //         sizes: "512x512",
    //         purpose: "maskable",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-mask-192.png",
    //         sizes: "192x192",
    //         purpose: "maskable",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-512.png",
    //         sizes: "512x512",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-192.png",
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
    //             src: "/assets/icon/guide-maskable.png",
    //             sizes: "192x192",
    //             purpose: "maskable",
    //             type: "image/png",
    //           },
    //         ],
    //       },
    //     ],
    //   },
    // },
  },
});
