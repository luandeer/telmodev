
export type SiteConfig = typeof initialData
import { FaReact, FaNodeJs, FaHtml5, FaCss3 } from "react-icons/fa";
import { SiTypescript, SiNextdotjs, SiTailwindcss, SiNextui, SiJavascript } from "react-icons/si";


export const initialData = {

    logos:[
        {
            nombre: "React",
            icon: FaReact,
            
        },
        {
            nombre: "Typescript",
            icon: SiTypescript,
            
        },
        {
            nombre: "Next 14",
            icon: SiNextdotjs,
            
        },
        {
            nombre: "Tailwind CSS",
            icon: SiTailwindcss,
            
        },
        {
            nombre: "Next UI",
            icon: SiNextui,
            
        },
        {
            nombre: "Node js",
            icon: FaNodeJs,
            
        },
        {
            nombre: "HTML 5",
            icon: FaHtml5,
            
        },
        {
            nombre: "CSS",
            icon: FaCss3,
            
        },
        {
            nombre: "Javascript",
            icon: SiJavascript,
            
        },
       

    ]
}