import React from 'react'
import { Button } from "@/components/ui/button"
import { siteConfig } from "@/config/site-web";

import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { Separator } from '@/components/ui/separator';
import Link from 'next/link';
import { SiAboutdotme } from "react-icons/si";
import { TbHomeDown } from "react-icons/tb";
import { GiSkills } from "react-icons/gi";
import { BiBriefcase, BiSolidContact } from "react-icons/bi";



const SidebarMovil = () => {
    return (
        <Sheet>
            <SheetTrigger asChild>
                <Button className="px-2 py-0 h-8 rounded-lg transition-all bg-gray-800 hover:bg-gray-800 text-white text-sm flex md:hidden">Menú</Button>
            </SheetTrigger>
            <SheetContent>
                <SheetHeader>
                    <SheetTitle className='text-start'>TelmoDev</SheetTitle>
                    <Separator className="my-4" />

                    <SheetDescription className='text-start'>
                        General
                    </SheetDescription>

                </SheetHeader>

                <div className="mt-3 flex flex-wrap items-center gap-x-5 gap-y-4">

                    <SheetClose asChild>
                    <Link
                        href="/"
                        className="flex items-center p-2 gap-2 bg-gray-100 rounded transition-all"
                    >
                        <TbHomeDown size={18} />
                        <span className="text-sm">Inicio</span>
                    </Link>
                    </SheetClose>
                   
                    <SheetClose asChild>
                    <Link
                        href="/about"
                        className="flex items-center p-2 gap-2 bg-gray-100 rounded transition-all"
                    >
                        <SiAboutdotme size={18} />
                        <span className="text-sm">Sobre mi</span>
                    </Link>
                    </SheetClose>
                    <SheetClose asChild>
                    <Link
                        href="/skills"
                        className="flex items-center p-2 gap-2 bg-gray-100 rounded transition-all"
                    >
                        <GiSkills size={18} />
                        <span className="text-sm">Mis skills</span>
                    </Link>
                    </SheetClose>
                    <SheetClose asChild>
                    <Link
                        href="/portafolio"
                        className="flex items-center p-2 gap-2 bg-gray-100 rounded transition-all"
                    >
                        <BiBriefcase size={18} />
                        <span className="text-sm">Portafolio</span>
                    </Link>
                    </SheetClose>
                    <SheetClose asChild>
                    <Link
                        href="/contacto"
                        className="flex items-center p-2 gap-2 bg-gray-100 rounded transition-all"
                    >
                        <BiSolidContact size={18} />
                        <span className="text-sm">Contacto</span>
                    </Link>
                    </SheetClose>
                    
                </div>
                <Separator className="my-4" />

                <SheetFooter>
                    <div className="mt-3 flex flex-wrap items-center gap-x-5 gap-y-4">
                        {Object.values(siteConfig.links).map((item: any, i) => {
                            const { title, icon: Icon, href } = item;
                            // Comprueba si Icon está definido antes de usarlo
                            const IconComponent = Icon ?? (() => null);
                            return (
                                <a
                                    key={title}
                                    href={href}
                                    rel="noreferer noopener"
                                    target="_blank"
                                    className="flex items-center gap-2 border-b border-border"
                                >
                                    <IconComponent size={20} className="text-gray-500" />
                                    <span className="text-gray-500">{title}</span>
                                </a>
                            );
                        })}
                    </div>
                </SheetFooter>
            </SheetContent>
        </Sheet>
    )
}

export default SidebarMovil