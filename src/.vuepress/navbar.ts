import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  "/courses/",
  {
    text: "Program Kerja", // Dropdown for all the program kerja
    icon: "circle-info",
    children: [
      {
        text: "HANGAT (Hubungan Aktif dan Komunikasi Terpadu)",
        icon: "comments",
        link: "/hangat/README.md", // Local link to hangat program
      },
      {
        text: "RADAR (Rapat Asyik Diskusi dan Analisis Review)",
        icon: "clipboard-list",
        link: "/radar/README.md", // Local link to radar program
      },
      {
        text: "STATGEN (Statistics Generation)",
        icon: "chart-bar",
        link: "/statgen/README.md", // Local link to statgen program
      },
      {
        text: "GEMAS (Gerakan Mempersembahkan Inspirasi dan Apresiasi)",
        icon: "trophy",
        link: "/gemas/README.md", // Local link to gemas program
      },
      {
        text: "JEPRET (Jejak Pengurus di Feed Terupdate)",
        icon: "user-check",
        link: "/jepret/README.md", // Local link to jepret program
      },
      {
        text: "LINK (Lintasan Inspirasi Nurturing Kegiatan)",
        icon: "users",
        link: "/link/README.md", // Local link to link program
      },
      {
        text: "TAKTIK (Temu Aksi Kreatif untuk Tim dan Kompetisi)",
        icon: "lightbulb",
        link: "/taktik/README.md", // Local link to taktik program
      },
    ],
  },
  "/statgen/",
  {
    text: "Guide",
    icon: "lightbulb",
    prefix: "/guide/",
    children: [
      {
        text: "Bar",
        icon: "lightbulb",
        prefix: "bar/",
        children: ["baz", { text: "...", icon: "ellipsis", link: "#" }],
      },
      {
        text: "Foo",
        icon: "lightbulb",
        prefix: "foo/",
        children: ["ray", { text: "...", icon: "ellipsis", link: "#" }],
      },
    ],
  },
]);
