import { MoonIcon, SunIcon } from "@phosphor-icons/react"
import { useEffect, useState } from "react"

export function ToggleDarkMode() {
    const [theme, setTheme] = useState(() => localStorage.getItem("theme") ?? "")

    useEffect(() => {
        localStorage.setItem("theme", theme)
        const tagHTML = document.documentElement
        tagHTML.classList.remove("dark")

        if (theme === "dark") {
            tagHTML.classList.add("dark")
        }
    }, [theme])

    return (
        <button onClick={() => setTheme(prevTheme => prevTheme === "dark" ? "" : "dark")} className="flex items-center gap-4">
            {theme === "dark" ? (
                <>
                    LIGHT
                    <SunIcon size={32} weight="fill" />
                </>
            ) : (
                <>
                    DARK
                    <MoonIcon size={32} weight="fill" />
                </>
            )}
        </button>
    )
}