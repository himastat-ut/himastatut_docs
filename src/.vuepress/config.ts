import { defineUserConfig } from "vuepress";
import theme from "./theme.js";
import { openGraphPlugin } from 'vuepress-plugin-open-graph'

export default defineUserConfig({
  base: "/",
  dest: './dist',
  lang: "id",
  title: "Himastatut Docs",
  description: "Dokumentasi Kegiatan Himpunan Mahasiswa Statistika",
  head: [
    ['meta', { name: 'algolia-site-verification', content: '70561EEFC0C70B02' }],
    ['meta', { name: 'msvalidate.01', content: '4077B11CAE89D53B7DAE1D82710447B0' }],
    ['meta', { name: 'yandex-verification', content: '1275725ccdfb310d' }],
    ['meta', { name: 'naver-site-verification', content: '' }],
    ['meta', { name: 'p:domain_verify', content: 'd6e8397f9d89b87750a2ce95163d6b12' }],
    ['meta', { name: 'google-adsense-account', content: 'ca-pub-6054605202730914' }],
    ['link', { rel: 'icon', href: '/assets/image/logo-tiny.webp' }]
    ['script', { async: true, src: 'https://cdn.ampproject.org/v0/amp-auto-ads-0.1.js', 'custom-element': 'amp-auto-ads' }],
  ],
  theme,
  enhance({ app, router, siteData }) {},
  setup() {},
  shouldPrefetch: false,
  rootComponents: [],
  plugins: [
    openGraphPlugin({
    }),
  ],

  // Enable it with pwa
  // shouldPrefetch: false,
});