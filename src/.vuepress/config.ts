import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/",
  dest: './dist',
  lang: "en-US",
  title: "Himastatut Docs",
  description: "Dokumentasi Kegiatan Himpunan Mahasiswa Statistika",

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
