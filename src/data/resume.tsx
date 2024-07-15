import { Icons } from "@/components/icons";
import { CodeIcon, HomeIcon, NotebookIcon, PencilLine, icons } from "lucide-react";

export const DATA = {
  name: "Ma'ruf",
  initials: "MaruYasa",
  url: "https://dillion.io",
  location: "San Francisco, CA",
  locationLink: "https://www.google.com/maps/place/sanfrancisco",
  description:
    "I write code and solving problems",
  summary:
    "Hello, my name is Muhammad Ma'ruf Ilyasa. I'm a passionate Full Stack Web Developer and software engineering student. With a deep love for technology, I chose to major in software engineering to dive into the world of web technologies. While my primary focus is on back-end development, I also enjoy crafting engaging front-end experiences.",
  avatarUrl: "/me.png",
  skills: [
    "Laravel",
    "PHP",
    "React",
    "Next.js",
    "Typescript",
    "Node.js",
    "Python",
    "Go",
    "Postgres",
    "Docker",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "marufilyasa13@gmail.com",
    tel: "+123456789",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/Maru-Yasa",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/marufilyasa/",
        icon: Icons.linkedin,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:marufilyasa13@gmail.com",
        icon: Icons.email,

        navbar: true,
      },
    },
  },

  work: [
    {
      company: "PT Sentra Vidya Utana (SEVIMA)",
      href: "https://sevima.com",
      badges: [],
      location: "Surabaya, Indonesia",
      title: "Full Stack Web Developer",
      logoUrl: "/sevima.png",
      start: "Aug 2023",
      end: "Present",
      description:
        "SEVIMA (Sentra Vidya Utama) is an Indonesian company specializing in education technology solutions. They provide various services and products aimed at enhancing educational institutions' administrative and academic operations",
    },
  ],
  education: [
    {
      school: "Cyber Asia University",
      href: "https://unsia.ac.id/",
      degree: "Computer Science",
      logoUrl: "/unsia.jpg",
      start: "2023",
      end: "2026",
    },
  ],
  projects: [
    // {
    //   title: "Magic UI",
    //   href: "https://magicui.design",
    //   dates: "June 2023 - Present",
    //   active: true,
    //   description:
    //     "Designed, developed and sold animated UI components for developers.",
    //   technologies: [
    //     "Next.js",
    //     "Typescript",
    //     "PostgreSQL",
    //     "Prisma",
    //     "TailwindCSS",
    //     "Stripe",
    //     "Shadcn UI",
    //     "Magic UI",
    //   ],
    //   links: [
    //     {
    //       type: "Website",
    //       href: "https://magicui.design",
    //       icon: <Icons.globe className="size-3" />,
    //     },
    //     {
    //       type: "Source",
    //       href: "https://github.com/magicuidesign/magicui",
    //       icon: <Icons.github className="size-3" />,
    //     },
    //   ],
    //   image: "",
    //   video: "https://cdn.magicui.design/bento-grid.mp4",
    // },
  ],
  hackathons: [
    {
      title: "LKS (Lomba Kompetisi Siswa) 2022 - Web Dev",
      dates: "February 2022",
      location: "Yogyakarta, Indonesia",
      description:
        "1st place winner of the LKS 2022 Web Dev competition",
      image:
        "/lks.png",
      links: [],
    },
    {
      title: "LKSN (Lomba Kompetisi Siswa Nasional) 2022 - Web Dev",
      dates: "October 2022",
      location: "Online",
      description:
        "Medal of Excellence winner of the LKSN 2022 Web Dev competition",
      image:
        "/lks.png",
      links: [],
    },
    {
      title: "SEMESTA Scholarship - Web Dev",
      dates: "Aug 2023",
      location: "Online",
      description:
        "3rd place winner of the SEMESTA Scholarship 2023 Web Dev",
      image:
        "/semesta.png",
      links: [
        {
          title: "Article",
          href: "https://sevima.com/selamat-inilah-25-penerima-beasiswa-semesta-2023/"
        },
        {
          title: "Repo",
          href: "https://github.com/Maru-Yasa/SEVIMA-Vidya-Learn",
          Icon: <Icons.github className="h-4 w-4" />
        }
      ],
    },
  ],
} as const;
