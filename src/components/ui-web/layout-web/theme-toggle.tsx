"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";
import { useIsMounted } from "@/hook/is-mounted";

type Props = {
    readonly className?: string;
};

export function ThemeToggle({ className }: Props) {
    const isMounted = useIsMounted();
    const { systemTheme, theme, setTheme } = useTheme();

    const currentTheme = theme === "system" ? systemTheme : theme;

    function toggleTheme() {
        setTheme(currentTheme === "light" ? "dark" : "light");
    }

    return (
        <button
            onClick={toggleTheme}
            className={cn(
                "flex h-7 w-7 items-center justify-center rounded-full border border-border p-1 transition-transform duration-300 dark:text-green-300",
                isMounted() && (currentTheme === "light" ? "-rotate-180" : "rotate-0"),
                className,
            )}
        >
            {isMounted() &&
                (currentTheme === "light" ? <Sun /> : <Moon />)}
        </button>
    );
}
