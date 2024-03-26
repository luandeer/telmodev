"use client"
import { cn } from "@/lib/utils";
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"
import { useState } from "react";

export function ThemeToggle() {
    const { setTheme, theme } = useTheme()
    const [isRotated, setIsRotated] = useState(false);

    return (
        <Button
            className={cn(
                "flex h-7 w-7 items-center justify-center rounded-full border border-border p-1 transition-transform duration-300 dark:text-green-600",
                isRotated ? "-rotate-180" : "rotate-0",
            )}
            onClick={() => {
                setIsRotated(!isRotated);
                setTheme(theme === "light" ? "dark" : "light");
            }}
        >
            <Sun className={`dark:hidden block ${isRotated ? "rotate-180" : ""}`} />
            <Moon className={`hidden dark:block ${isRotated ? "rotate-180" : ""}`} />
            <span className="sr-only">Toggle theme</span>
        </Button>
    )
}
