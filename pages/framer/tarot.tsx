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
      perspectiveY: 0,
      color: 'rgba(255, 255, 255, 1)',
      transition: {
        ease: 'easeInOut',
        duration: 1,
      },
    },
    flip: {
      rotateY: [0, 90, 180],
      perspectiveY: 0,
      transition: {
        type: 'spring',
        stiffness: 100,
      },
    },
  }
  console.log('reveal', revealed, 'last', lastRevealed)
  const animation =
    revealed === index ? 'animate' : lastRevealed === index ? 'flip' : ''

  return (
    <AnimatePresence>
      <motion.article
        onClick={(ev) => clickHandler(ev, index)}
        {...cardProps}
        initial={'initial'}
        variants={animationProps}
        animate={animation}
        layout
        key={`${item.name_short}-${index}`}
        className={`${className} 
    border 
  border-slate-950 rounded-md
  dark:border-neutral-100
   grid
   place-items-center
   h-[350px] w-[325px]
   md:w-[300px]
   p-4
   text-base
   bg-slate-700
  `}
      >
        <div
          className={`${
            revealed === index ? 'flex' : 'hidden'
          } h-full flex-col`}
        >
          <h1 className="mb-2">{item['name']}</h1>
          <p>{item['meaning_up']}</p>
          <p className="mt-auto"></p>
        </div>
      </motion.article>
    </AnimatePresence>
  )
}
function TarotPage() {
  const [revealed, setRevealed] = useState(-1)
  const [lastRevealed, setLastRevealed] = useState(-1)
  const [cards, setCards] = useState([])
  const [selected, setSelected] = useState([])
  function clickHandler(event, index) {
    event.stopPropagation()
    setLastRevealed(() => revealed)
    console.log(revealed)
    setRevealed((revealed) => (revealed === index ? -1 : index))
  }
  useEffect(() => setCards(() => altNaiveShuffle(tarot)), [])

  function altNaiveShuffle({ cards }) {
    let randomCard
    let tempX
    for (let index = cards.length - 1; index > -1; index -= 1) {
      randomCard = Math.floor(Math.random() * cards.length)
      tempX = cards[index]
      cards[index] = cards[randomCard]
      cards[randomCard] = tempX
    }
    return cards
  }
  function drawCard(ev) {
    if (ev.target !== ev.currentTarget) {
      return
    }
    if (selected.length >= 4) {
      return
    }
    setSelected((selected) => [...selected, cards[selected.length]])
  }

  return (
    <>
      <Head>
        <title>tarot</title>
        <meta name="description" content="uh.." />
      </Head>
      <Layout className={`grid place-items-center`}>
        <section
          onClick={drawCard}
          className={`
        max-w-sm p-4
        sm:max-w-full md:p-8 lg:p-16
        bg-zinc-200
        dark:bg-slate-800
        rounded-md
        grid
        grid-cols-1
        md:grid-cols-2
        xxl:grid-cols-4
        md:gap-8 lg:gap-16 gap-4
        duration-500 ease-in-out
        `}
        >
          <LayoutGroup>
            {selected.length === 0 && (
              <div className="grid place-items-center col-span-2">
                <h1>Click to draw</h1>
              </div>
            )}
            {selected.length > 0 &&
              selected.map((card, index) => (
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
