import { ToggleDarkMode } from "./ToggleDarkMode";

export function Header() {
    return (
        <header className="flex justify-between mb-9">
            <h1 className="font-bold text-2xl">devfinder</h1>
            <ToggleDarkMode />
        </header>
    )
}