import { sidebar } from "vuepress-theme-hope";
import coursesSidebar from "./sidebar/courses.ts";
import statgenSidebar from "./sidebar/statgen.ts";
import radarSidebar from "./sidebar/radar.ts";
import jepretSidebar from "./sidebar/jepret.ts";
import archivedSidebar from "./sidebar/archived.ts";

export default sidebar({
  "/": [
    "",
  ],
  "/statgen/": statgenSidebar,
  "/courses/": coursesSidebar,
  "/archived/": archivedSidebar,
  "/hangat/": [
    "",
    {
      text: "",
      icon: "tasks",
      link: "",
      children: "structure",
    },
  ],
  "/radar/": radarSidebar,
  "/gemas/": [
    "",
    {
      text: "",
      icon: "tasks",
      link: "",
      children: "structure",
    },
  ],
  "/jepret/": jepretSidebar,
  "/link/": [
    "",
    {
      text: "",
      icon: "tasks",
      link: "",
      children: "structure",
    },
  ],
  "/taktik/": [
    "",
    {
      text: "",
      icon: "tasks",
      link: "",
      children: "structure",
    },
  ],
});
