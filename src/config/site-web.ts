export type SiteConfig = typeof siteConfig
import { TbHomeDown} from "react-icons/tb";
import { FaGithub,FaLinkedin,FaYoutube,FaInstagram, FaWhatsapp, FaFacebook } from "react-icons/fa";

export const siteConfig = {
  nameLogo: "TelmoDev",
  nameMetada: "Telmo",
  description:
    "Este es mi portafolio como desarrollador web",
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
      href: "https://github.com/luandeer",
      icon: FaGithub,
    },

    linkedin: {
      title: "Linkedin",
      href: "https://www.linkedin.com/in/telmoalexander/",
      icon: FaLinkedin,
    },

    youtube: {
      title: "Youtube",
      href: "https://www.youtube.com/@luandeer/videos",
      icon: FaYoutube,
    },

    instagram: {
      title: "Instagram",
      href: "https://www.instagram.com/tel_alexander/",
      icon: FaInstagram ,
    },
    facebook: {
      title: "Facebook",
      href: "https://www.facebook.com/telmoalexander.perezreginaldo",
      icon: FaFacebook ,
    },
    whatsapp: {
      title: "Whatsapp",
      href: "https://api.whatsapp.com/send?phone=51967502750&text=Hola,%20telmo.%20Te%20escribo%20desde%20tu%20sitio%20web...",
      icon: FaWhatsapp ,
    },
  },
}