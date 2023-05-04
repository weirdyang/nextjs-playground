import { motion } from 'framer-motion'
import Link from 'next/link'

const MotionLink = motion(Link)
function Logo() {
  return (
    <motion.div className="flex items-center justify-center mt-2">
      <MotionLink
        href={'/'}
        className={
          'w-16 h-16 bg-slate-900 text-white flex items-center justify-center rounded-full text-2xl font-bold'
        }
        whileHover={{
          backgroundColor: 'slategray',
          transition: {
            duration: 1,
          },
        }}
      >
        Hi
      </MotionLink>
    </motion.div>
  )
}

export default Logo
