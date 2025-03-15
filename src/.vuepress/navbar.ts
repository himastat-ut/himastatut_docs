import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  // "/courses/",
  {
    text: "Courses", // Main menu for courses
    icon: "book", // Icon for the courses menu
    children: [
      {
        text: "Semester 1",
        icon: "book-open",
        link: "/courses/semester1/README.md",
      },
      {
        text: "Semester 2",
        icon: "book-open",
        link: "/courses/semester2/README.md",
      },
      {
        text: "Semester 3",
        icon: "book-open",
        link: "/courses/semester3/README.md",
      },
      {
        text: "Semester 4",
        icon: "book-open",
        link: "/courses/semester4/README.md",
      },
      {
        text: "Semester 5",
        icon: "book-open",
        link: "/courses/semester5/README.md",
      },
      {
        text: "Semester 6",
        icon: "book-open",
        link: "/courses/semester6/README.md",
      },
      {
        text: "Semester 7",
        icon: "book-open",
        link: "/courses/semester7/README.md",
      },
      {
        text: "Semester 8",
        icon: "book-open",
        link: "/courses/semester8/README.md",
      },
    ]
  },
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
    text: "Arsip Program Kerja", // Archived Programs dropdown
    icon: "boxes-packing", // Icon for archived programs
    children: [
      {
        text: "Program A (Archived Program Example)",
        icon: "file-archive",
        link: "/archived/programA.md", // Link to archived program A
      },
      {
        text: "Program B (Archived Program Example)",
        icon: "file-archive",
        link: "/archived/programB.md", // Link to archived program B
      },
      {
        text: "Program C (Archived Program Example)",
        icon: "file-archive",
        link: "/archived/programC.md", // Link to archived program C
      },
    ],
  },
]);
