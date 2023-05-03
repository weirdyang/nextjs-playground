import { Props } from "next/script"
import {FC, ReactNode} from "react"

import styles from "./Layout.module.css"
interface Layout {
    children?: ReactNode;
  }
  
const Layout: FC<Layout> = ({children }) => {
    return <div className={styles.layout}>{children}</div>
}

export default Layout