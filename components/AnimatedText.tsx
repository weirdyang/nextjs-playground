import { motion } from 'framer-motion'
const variants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      staggerChildren: 0.5,
      delay: 0.5,
    },
  },
}
const singleWord = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
    },
  },
}
function AnimatedText({ text, className = '' }) {
  return (
    <motion.div
      className={`w-full mx-auto py-2 flex items-center justify-center text-center overflow-hidden`}
    >
      <motion.h1
        variants={variants}
        initial="initial"
        animate="animate"
        className={`inline-block w-full text-slate-950 font-bold capitalize text-8xl ${className}`}
      >
        {text.split(' ').map((word, index) => (
          <motion.span
            key={`${word}-${index}`}
            className={'inline-block'}
            variants={singleWord}
          >
            {word}&nbsp;
          </motion.span>
        ))}
      </motion.h1>
    </motion.div>
  )
}

export default AnimatedText
