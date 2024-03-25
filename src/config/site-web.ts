export type SiteConfig = typeof siteConfig
import { TbHomeDown} from "react-icons/tb";
import { FaGithub,FaLinkedin,FaYoutube,FaInstagram } from "react-icons/fa";

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
      href: "/contacto",
    },
  ],
  links: {
    github: {
      title: "Github",
      href: "https://github.com/rajput-hemant",
      icon: FaGithub,
    },

    linkedin: {
      title: "Linkedin",
      href: "https://www.linkedin.com/in/rajput-hemant",
      icon: FaLinkedin,
    },

    twitter: {
      title: "Youtube",
      href: "https://twitter.com/rajput_hemant01",
      icon: FaYoutube,
    },

    stackoverflow: {
      title: "Instagram",
      href: "https://stackoverflow.com/users/20652038/rajput-hemant",
      icon: FaInstagram ,
    },
  },
}