import { motion } from 'framer-motion'
import Link from 'next/link'

const MotionLink = motion(Link)
function Logo() {
  return (
    <motion.div className="flex items-stretch justify-center mt-2">
      <MotionLink
        href={'/'}
        className={
          'w-auto p-2 h-16 bg-slate-900 text-white flex items-center justify-center rounded-xl text-2xl font-bold opacity-95'
        }
        whileHover={{
          backgroundColor: 'slategray',
          transition: {
            duration: 1,
          },
        }}
      >
        alterwyx
      </MotionLink>
    </motion.div>
  )
}

export default Logo
