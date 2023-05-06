import { Props } from 'next/script'
import { FC, ReactNode } from 'react'

import styles from './Layout.module.css'
interface Layout {
  children?: ReactNode
}

const Layout = ({ children, className = '' }) => {
  return (
    <div
      className={`${className} w-full h-full inline-block z-0 bg-neutral-100 md:p-16 p-8`}
    >
      {children}
    </div>
  )
}

export default Layout
