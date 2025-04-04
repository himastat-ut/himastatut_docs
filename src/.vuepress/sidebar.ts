import { sidebar } from "vuepress-theme-hope";
import coursesSidebar from "./sidebar/courses.ts";
import statgenSidebar from "./sidebar/statgen.ts";
import prodiSidebar from "./sidebar/prodi.ts";
import temusapaSidebar from "./sidebar/temusapa.ts";
import sigmaSidebar from "./sidebar/sigma.ts";
import radarSidebar from "./sidebar/radar.ts";
import jepretSidebar from "./sidebar/jepret.ts";
import archivedSidebar from "./sidebar/archived.ts";
import howtoSidebar from "./sidebar/howto.ts";
import infodongSidebar from "./sidebar/infodong.ts";
import infodongAcaraKegiatanSidebar from "./sidebar/infodong/acaraKegiatan.ts";
import infodongBeritaAkademikSidebar from "./sidebar/infodong/beritaAkademik.ts";
import infodongBeritaHimastatSidebar from "./sidebar/infodong/beritaHimastat.ts";
import infodongInformasiAlumniSidebar from "./sidebar/infodong/informasiAlumni.ts";
import howtoTipsSidebar from "./sidebar/howto/tips.ts";
import howtoTutorialsSidebar from "./sidebar/howto/tutorials.ts";
import howtoMethodsSidebar from "./sidebar/howto/methods.ts";
import howtoActivitiesSidebar from "./sidebar/howto/activities.ts";
import howtoContributesSidebar from "./sidebar/howto/contributes.ts";

export default sidebar({
  "/": [""],
  "/statgen/": statgenSidebar,
  "/prodi/": prodiSidebar,
  "/sigma/": sigmaSidebar,
  "/temusapa/": temusapaSidebar,
  "/tuweb/": temusapaSidebar,
  "/howto/": howtoSidebar,
  "/infodong/": infodongSidebar,
  "/infodong/acaraKegiatan/": infodongAcaraKegiatanSidebar,
  "/infodong/beritaAkademik/": infodongBeritaAkademikSidebar,
  "/infodong/informasiAlumni/": infodongInformasiAlumniSidebar,
  "/infodong/beritaHimastat/": infodongBeritaHimastatSidebar,
  "/howto/tips/": howtoTipsSidebar,
  "/howto/tutorials/": howtoTutorialsSidebar,
  "/howto/methods/": howtoMethodsSidebar,
  "/howto/activities/": howtoActivitiesSidebar,
  "/howto/contributes/": howtoContributesSidebar,
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
