import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/": [
    "",
  ],
  "/statgen/": [
    "",
    {
      text: "",
      link: "",
      children: "structure",
    },
  ],
  "/courses/": [
    "",
    {
      text: "",
      link: "",
      children: "structure",
    },
  ],
  "/hangat/": [
    "",
    {
      text: "",
      icon: "tasks",
      link: "",
      children: "structure", // Automatically generates the structure
    },
  ],

  "/radar/": [
    "",
    {
      text: "",
      icon: "tasks",
      link: "",
      children: "structure", // Automatically generates the structure
    },
  ],

  "/gemas/": [
    "",
    {
      text: "",
      icon: "tasks",
      link: "",
      children: "structure", // Automatically generates the structure
    },
  ],

  "/jepret/": [
    "",
    {
      text:"",
      // link:"",
      children: [
        {
          text: "Himastat UT 2024/2025",
          icon: "users-viewfinder",
          link: "",
          collapsible:true,
          children: [
            {
              text: "Detail Pengurus 2024/2025",
              icon: "fa6-solid:users",
              link: "jepret2024/",
            },
            {
              text: "Susi Indah Situmorang",
              icon: "fa6-solid:user-tie",
              link: "jepret2024/portofolio/043164149.md"
            },
            {
              text: "Zakiyyah",
              icon: "fa6-solid:user-tie",
              link: "jepret2024/portofolio/043164149.md"
            },
            {
              text: "Elis Lumban Gaol",
              icon: "fa6-solid:file",
              link: "jepret2024/portofolio/043164149.md"
            },
            {
              text: "Firmansyah Mukti Wijaya",
              icon: "fa6-solid:desktop",
              link: "jepret2024/portofolio/043164149.md"
            },
            {
              text: "Nazma Fahira",
              icon: "fa6-solid:desktop",
              link: "jepret2024/portofolio/043164149.md"
            }
          ]
        },
        {
          text: "Himastat UT 2023/2024",
          icon: "people-roof",
          link: "jepret2023/",
          collapsible:true,
          children: [
            {
              text: "Detail Pengurus 2023/2024",
              icon: "fa6-solid:users",
              link: "jepret2023/"
            },
            {
              text: "Dummy Nama 2023/2024",
              icon: "fa6-solid:user-tie",
              link: "jepret2023/#"
            },
            {
              text: "Dummy Nama 2023/2024",
              icon: "fa6-solid:user-tie",
              link: "jepret2023/#"
            },
            {
              text: "Dummy Nama 2023/2024",
              icon: "fa6-solid:file",
              link: "jepret2023/#"
            },
            {
              text: "Dummy Nama 2023/2024",
              icon: "fa6-solid:desktop",
              link: "jepret2023/#"
            }
          ]
        },
        {
          text: "Himastat UT 2022/2023",
          icon: "people-roof",
          link: "jepret2022/",
          collapsible:true,
          children: [
            {
              text: "Detail Pengurus 2022/2023",
              icon: "fa6-solid:users",
              link: "jepret2022/"
            },
            {
              text: "Dummy Nama 2022/2023",
              icon: "fa6-solid:user-tie",
              link: "jepret2022/#"
            },
            {
              text: "Dummy Nama 2022/2023",
              icon: "fa6-solid:user-tie",
              link: "jepret2022/#"
            },
            {
              text: "Dummy Nama 2022/2023",
              icon: "fa6-solid:file",
              link: "jepret2022/#"
            },
            {
              text: "Dummy Nama 2022/2023",
              icon: "fa6-solid:desktop",
              link: "jepret2022/#"
            }
          ]
        }
      ]
    },
  ],

  "/link/": [
    "",
    {
      text: "",
      icon: "tasks",
      link: "",
      children: "structure", // Automatically generates the structure
    },
  ],

  "/taktik/": [
    "",
    {
      text: "",
      icon: "tasks",
      link: "",
      children: "structure", // Automatically generates the structure
    },
  ],
});
