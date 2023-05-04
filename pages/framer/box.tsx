import { FC, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Layout from '../../components/Layout/Layout'
const boxAnimation = {
  key: 'box',
  initial: {
    y: '50%',
    opacity: 0,
    scale: 0.5,
  },
  animate: {
    y: 0,
    opacity: 1,
    scale: 1,
  },
  exit: {
    y: '50%',
    opacity: 0,
    transition: {
      duration: 0.1,
    },
  },
  transition: {
    duration: 0.2,
    ease: 'easeOut',
  },
}

const box: FC = () => {
  const [isShown, setIsShown] = useState(true)

  const onClick = () => {
    setIsShown(!isShown)
  }

  return (
    <Layout>
      <button onClick={onClick}>{isShown ? 'Hide' : 'Show'}</button>

      <AnimatePresence>
        {isShown && <motion.div {...boxAnimation} className="box" />}
      </AnimatePresence>
    </Layout>
  )
}

export default box
