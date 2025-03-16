import { navbar } from "vuepress-theme-hope";
import coursesNavbar from "./navbar/courses.ts";
import programKerjaNavbar from "./navbar/programKerja.ts";
import arsipProgramKerjaNavbar from "./navbar/arsipProgramKerja.ts";
import pengurusHimpunanNavbar from "./navbar/pengurusHimpunan.ts";

export default navbar([
  "/",
  // "/courses/",
  coursesNavbar,
  programKerjaNavbar,
  "/statgen/",
  arsipProgramKerjaNavbar,
  pengurusHimpunanNavbar,
]);
