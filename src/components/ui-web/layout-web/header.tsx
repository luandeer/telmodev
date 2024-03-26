"use client";
import Link from "next/link";
import { siteConfig } from "@/config/site-web";
import { MainNav } from "./main-nav";
import { ThemeToggle } from "./theme-toggle";
import { FaGithub, FaWhatsapp } from "react-icons/fa";
import SidebarMovil from "./sidebar-movil";

export function SiteHeader() {


    return (
        <header className=" fixed bg-white top-0 z-40 w-full border-b dark:bg-transparent">
            <div className="container flex h-12 items-center space-x-4 text-gray-900 sm:justify-between sm:space-x-0 max-sm:px-3">
                <MainNav items={siteConfig.mainNav} />
                <div className="flex flex-1 items-center justify-end space-x-4">
                    <nav className="flex items-center gap-2">

                        <span className="group relative">
                            <div className="absolute left-[50%] top-[calc(100%+0.5rem)] hidden w-auto -translate-x-[50%] group-hover:block">
                                <div className="right-0 top-full whitespace-nowrap rounded bg-gray-800 px-2 py-1 text-xs text-gray-100">
                                    chatea conmigo
                                </div>
                            </div>
                            <Link
                                href={siteConfig.links.whatsapp.href}
                                target="_blank"
                                rel="noreferrer"
                            >
                                <div>
                                    <FaWhatsapp size={27} className="text-gray-800" />
                                    <span className="sr-only">Whatsapp</span>
                                </div>
                            </Link>
                        </span>
                        <span className="group relative">
                            <div className="absolute left-[50%] top-[calc(100%+0.5rem)] hidden w-auto -translate-x-[50%] group-hover:block">
                                <div className="right-0 top-full whitespace-nowrap rounded bg-gray-800 px-2 py-1 text-xs text-gray-100">
                                    Github
                                </div>
                            </div>
                            <Link
                                href={siteConfig.links.github.href}
                                target="_blank"
                                rel="noreferrer"
                            >
                                <div>
                                    <FaGithub size={27} className="text-gray-800 dark:text-gray-50" />
                                    <span className="sr-only">GitHub</span>
                                </div>
                            </Link>
                        </span>


                        <ThemeToggle />
                        <SidebarMovil />
                    </nav>
                </div>
            </div>
        </header>
    );
}