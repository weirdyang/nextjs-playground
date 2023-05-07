import { useState } from "react";
import ThemeButton from "./ThemeButton";

function ResponsiveNavbar({ children }) {
    const [isShown, setIsShown] = useState(true)

    const onClick = () => {
        setIsShown(!isShown)
    }
    return (
        <nav className={`flex items-center justify-between flex-wrap bg-inherit p-6
                        z-50
                        sticky top-0`}>
            <div className="flex items-center flex-shrink-0 text-white mr-6">
                <svg className="fill-current h-8 w-8 mr-2" width="54" height="54" viewBox="0 0 54 54" xmlns="http://www.w3.org/2000/svg"><path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z" /></svg>
                <span className="font-semibold text-xl tracking-tight">Tailwind CSS</span>
            </div>
            <div className="lg:hidden flex flex-row">
                <ThemeButton />
                <button onClick={onClick}
                    className={`place-items-center w-12 h-12 grid px-3 py-2 border-slate-900
                hover:text-slate-700
                hover:border-slate-700
                dark:border-neutral-200
                border rounded dark:bg-slate-900
                 bg-zinc-200 dark:hover:text-white dark:hover:border-white`}>
                    <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg>
                </button>
            </div>
            {
                <div className={`w-full  flex-grow lg:!flex lg:items-center lg:w-auto ${isShown ? 'block' : 'hidden'}`}>
                    <div className="w-full block flex-grow lg:flex-grow lg:flex lg:flex-row lg:items-start">
                        {children}
                    </div>
                    <div className="lg:inline-block hidden">
                        <ThemeButton />
                    </div>
                </div>
            }

        </nav>);
}

export default ResponsiveNavbar;