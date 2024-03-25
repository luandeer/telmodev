export type SiteConfig = typeof siteConfig
import { TbHomeDown} from "react-icons/tb";

export const siteConfig = {
  nameLogo: "TELMO",
  nameMetada: "Sonqu",
  description:
    "Beautifully designed components built with Radix UI and Tailwind CSS.",
  mainNav: [
    {
      title: "Inicio",
      href: "/",
      icon: TbHomeDown,


    },
    {
      title: "Sobre mi",
      href: "/about",

    },
    {
      title: "Mis Skills",
      href: "/skills",


    },
    {
      title: "Portafolio",
      href: "/portafolio",
    },
    {
      title: "Contacto",
      href: "/dudas",
    },
  ],
  links: {
    twitter: "https://twitter.com/shadcn",
    github: "https://github.com/shadcn/ui",
    docs: "https://ui.shadcn.com",
  },
}