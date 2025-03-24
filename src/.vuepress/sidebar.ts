import { sidebar } from "vuepress-theme-hope";
import coursesSidebar from "./sidebar/courses.ts";
import statgenSidebar from "./sidebar/statgen.ts";
import temusapaSidebar from "./sidebar/temusapa.ts";
import sigmaSidebar from "./sidebar/sigma.ts";
import radarSidebar from "./sidebar/radar.ts";
import jepretSidebar from "./sidebar/jepret.ts";
import archivedSidebar from "./sidebar/archived.ts";
import howtoSidebar from "./sidebar/howto.ts";
import howtoTipsSidebar from "./sidebar/howto/tips.ts";

export default sidebar({
  "/": [""],
  "/statgen/": statgenSidebar,
  "/sigma/": sigmaSidebar,
  "/temusapa/": temusapaSidebar,
  "/tuweb/": temusapaSidebar,
  "/howto/": howtoSidebar,
  "/howto/tips/": howtoTipsSidebar,
  "/webinarseries/prodi/": temusapaSidebar,
  "/courses/": coursesSidebar,
  "/docs/": [
    "",
    { text: "", icon: "", link: "", children: "structure" }
  ],
  "/archived/": archivedSidebar,
  "/hangat/": [
    "",
    { text: "", icon: "", link: "", children: "structure" }
  ],
  "/radar/": radarSidebar,
  "/gemas/": [
    "",
    { text: "", icon: "", link: "", children: "structure" }
  ],
  "/jepret/": jepretSidebar,
  "/link/": [
    "",
    { text: "", icon: "", link: "", children: "structure" }
  ],
  "/taktik/": [
    "",
    { text: "", icon: "", link: "", children: "structure" }
  ],
});
