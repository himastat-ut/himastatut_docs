import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/",
  dest: './dist',
  lang: "id",
  title: "Himastatut Docs",
  description: "Dokumentasi Kegiatan Himpunan Mahasiswa Statistika",
  head: [
    ['meta', { name: 'algolia-site-verification', content: '70561EEFC0C70B02' }],
    ['meta', { name: 'msvalidate.01', content: '4077B11CAE89D53B7DAE1D82710447B0' }],
    ['link', { rel: 'icon', href: '/assets/image/logo.png' }]
  ],
  theme,
  

  // Enable it with pwa
  // shouldPrefetch: false,
});