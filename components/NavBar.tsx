import { motion } from 'framer-motion'
import { FC, ReactNode } from 'react'
import Logo from './Logo'
import TwitterIcon from './Social/Twitter'
import ThemeButton from './ThemeButton'

interface NavBar {
  children?: ReactNode
}

const NavBar = ({ children, className = '' }) => {
  return (
    <header
      className={`w-full px-4 lg:px-32 md:px-24 py-8 font-medium bg-inherit
        z-50
        sticky top-0
        flex items-center justify-between ${className}`}
    >
      <nav>{children}</nav>
      <div className="absolute left-[50%] top-2 translate-x-"></div>
      <div className="inline-block">
        <ThemeButton />
      </div>
      <nav className="flex items-center flex-wrap justify-center">
        <motion.a
          href="/"
          target={'_blank'}
          className={'w-6 mx-3'}
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
        >
          <TwitterIcon className={''}></TwitterIcon>
        </motion.a>
      </nav>
    </header>
  )
}

export default NavBar
