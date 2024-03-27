import * as React from "react"
import Link from "next/link"
import { NavItem } from "@/types/nav"
import { siteConfig } from "@/config/site-web"
import { ActiveLinks } from "./active-links"
import Image from "next/image"

interface MainNavProps {
    readonly items?: readonly NavItem[];
}

export function MainNav({ items }: MainNavProps) {
    return (
        <div className="flex gap-6 md:gap-10">
            <Link href="/" className="flex items-center space-x-2">
                <Image src="/vercel.svg" className="hidden object-cover" alt="logo" width={90} height={90} priority />
                <div className="flex">
                <span className="text-lg bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent font-extrabold">{siteConfig.nameLogo}</span>
                <span className="bg-gradient-to-r from-emerald-500 to-emerald-900 bg-clip-text text-transparent text-lg font-extrabold hidden">Dev</span>
                </div>

            </Link>
            {items?.length ? (
                <nav className="hidden md:flex items-center gap-3 text-muted-foreground">
                    {items?.map(
                        (item, index) =>
                            item.href && (
                                <ActiveLinks key={item.title} item={item} />
                            )
                    )}
                </nav>
            ) : null}
        </div>
    )
}