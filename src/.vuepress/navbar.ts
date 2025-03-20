import { navbar } from "vuepress-theme-hope";
import coursesNavbar from "./navbar/courses.ts";
import programKerjaNavbar from "./navbar/programKerja.ts";
import arsipProgramKerjaNavbar from "./navbar/arsipProgramKerja.ts";
import pengurusHimpunanNavbar from "./navbar/pengurusHimpunan.ts";
import kegiatanProdiNavbar from "./navbar/kegiatanProdi.ts";

export default navbar([
  "/",
  // "/courses/",
  coursesNavbar,
  programKerjaNavbar,
  "/statgen/",
  {
    text: "SIGMA", 
    icon: "calculator", 
    link: "/sigma/",
  },
  arsipProgramKerjaNavbar,
  pengurusHimpunanNavbar,
  kegiatanProdiNavbar,
  {
    text: "How To ?", 
    icon: "file-circle-question", 
    link: "/howto/"
  }
]);
