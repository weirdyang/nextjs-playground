import Head from 'next/head'
import Layout from '../../components/Layout/Layout'
import CSS from '../../config/css'
import tarot from '../../data/tarot'
import { AnimatePresence, LayoutGroup, motion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'

function Card({
  index,
  item,
  clickHandler,
  revealed,
  lastRevealed,
  className = '',
}) {
  let cardProps = {
    layoutId: index,
    id: index,
    className: '',
  }
  let animationProps = {
    initial: { rotateY: 180, color: 'rgba(0, 0, 0, 0.0)' },
    animate: {
      rotateY: 0,
      perspectiveY: 700,
      color: 'rgba(255, 255, 255, 1)',
      transition: {
        ease: 'easeIn',
        duration: 1,
      },
    },
    flip: {
      rotateY: [0, 90, 180],
      perspectiveY: 700,
      transition: {
        type: 'spring',
        stiffness: 100,
      },
    },
  }
  console.log('reveal', revealed, 'last', lastRevealed)
  const animation =
    revealed === index ? 'animate' : lastRevealed === index ? 'flip' : ''
  const side = Math.random() < 0.5 ? 'meaning_up' : 'meaning_rev'
  return (
    <AnimatePresence>
      <motion.article
        onClick={() => clickHandler(index)}
        {...cardProps}
        initial={'initial'}
        variants={animationProps}
        animate={animation}
        layout
        key={`${item.name_short}-${index}`}
        className={`${className} w-full 
    border 
  border-slate-950 rounded-md
  dark:border-neutral-100
   h-full
   grid
   place-items-center
   min-h-[350px] min-w-[325px]
   p-4
   text-base
   transition-colors
   duration-500
   bg-slate-700
  `}
      >
        <div className="h-full flex flex-col  align-middle">
          <h1 className="mb-2">{item['name']}</h1>
          <p>{item[side]}</p>
          <p className="mt-auto"></p>
        </div>
      </motion.article>
    </AnimatePresence>
  )
}
function TarotPage() {
  const [revealed, setRevealed] = useState(-1)
  const [lastRevealed, setLastRevealed] = useState(-1)
  function clickHandler(index) {
    setLastRevealed(() => revealed)
    console.log(revealed)
    setRevealed((revealed) => (revealed === index ? -1 : index))
  }

  function getCards() {
    const selected = []
    while (selected.length < 4) {
      const randomElement =
        tarot.cards[Math.floor(Math.random() * tarot.cards.length)]
      if (!selected.find((t) => t.name_short === randomElement.name_short)) {
        selected.push(randomElement)
      }
    }
    return selected
  }

  return (
    <>
      <Head>
        <title>tarot</title>
        <meta name="description" content="uh.." />
      </Head>
      <Layout className={`grid place-items-center w-full`}>
        <section
          className={`
        max-w-sm p-4
        sm:max-w-full md:p-8 lg:p-16
        bg-zinc-200
        dark:bg-slate-800
        rounded-md
        grid
        grid-cols-1
        md:grid-cols-2
        lg:grid-cols-4
        md:gap-8 lg:gap-16 gap-4
        duration-500 ease-in-out
        `}
        >
          <LayoutGroup>
            {getCards().map((card, index) => (
              <Card
                lastRevealed={lastRevealed}
                revealed={revealed}
                clickHandler={clickHandler}
                index={index}
                key={`${index}-${card.name_short}`}
                item={card}
              />
            ))}
          </LayoutGroup>
        </section>
      </Layout>
    </>
  )
}

export default TarotPage
