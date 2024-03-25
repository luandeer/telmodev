"use client"
import { cn } from "@/lib/utils";
import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"

export function ThemeToggle() {
    const { setTheme, theme } = useTheme()

    return (
        <Button
            size="icon"
            className={cn(
                "flex h-7 w-7 items-center justify-center rounded-full border border-border p-1 transition-transform duration-300 dark:text-green-600",
                theme === "light" ? "-rotate-180" : "rotate-0",
            )}
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        >
            <Sun className=" dark:hidden" />
            <Moon className="hidden  dark:block" />
            <span className="sr-only">Toggle theme</span>
        </Button>
    )
}
