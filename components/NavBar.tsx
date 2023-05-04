import { motion } from 'framer-motion'
import { FC, ReactNode } from 'react'
import Logo from './Logo'
import TwitterIcon from './Social/Twitter'

interface NavBar {
  children?: ReactNode
}

const NavBar: FC<NavBar> = ({ children }) => {
  return (
    <header
      className="w-full px-32 py-8 font-medium
        flex items-center justify-between"
    >
      <nav>{children}</nav>
      <div className="absolute left-[50%] top-2 translate-x-">
        <Logo></Logo>
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
