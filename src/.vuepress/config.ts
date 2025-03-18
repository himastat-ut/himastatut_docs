import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/",
  dest: './dist',
  lang: "id",
  title: "Himastatut Docs",
  description: "Dokumentasi Kegiatan Himpunan Mahasiswa Statistika",
  head: [
    ['meta', { name: 'algolia-site-verification', content: '70561EEFC0C70B02' }]
  ],
  theme,
  

  // Enable it with pwa
  // shouldPrefetch: false,
});
