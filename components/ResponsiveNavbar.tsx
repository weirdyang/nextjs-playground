import { useState } from 'react'
import ThemeButton from './ThemeButton'
import Link from 'next/link'

function ResponsiveNavbar({ children }) {
  const [isShown, setIsShown] = useState(false)

  const onClick = () => {
    setIsShown(!isShown)
  }
  return (
    <nav
      className={`flex opacity-95 items-center justify-between flex-wrap bg-inherit p-6 z-50 sticky top-0`}
    >
      <div className="flex items-center flex-shrink-0 dark:text-white mr-6">
        <span className="font-semibold text-xl tracking-tight">
          <Link href={'/'}>yo</Link>
        </span>
      </div>
      <div className="lg:hidden flex flex-row">
        <ThemeButton />
        <button
          onClick={onClick}
          className={`place-items-center w-12 h-12 grid px-3 py-2 border-slate-900
                hover:text-slate-700
                hover:border-slate-700
                dark:border-neutral-200
                border rounded dark:bg-slate-900
                 bg-zinc-200 dark:hover:text-white dark:hover:border-white`}
        >
          <svg
            className="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      {
        <div
          className={`w-full  flex-grow lg:!flex lg:items-center lg:w-auto ${
            isShown ? 'block' : 'hidden'
          }`}
        >
          <div className="w-full block absolute sm:relative z-50 flex-grow lg:flex-grow lg:flex lg:flex-row lg:items-start">
            {children}
          </div>
          <div className="lg:inline-block hidden">
            <ThemeButton />
          </div>
        </div>
      }
    </nav>
  )
}

export default ResponsiveNavbar
