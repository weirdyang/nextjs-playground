import Head from 'next/head'
import Layout from '../../components/Layout/Layout'
import Plane from '../../components/Icons/Plane'
import House from '../../components/Icons/House'
import Bag from '../../components/Icons/Bag'
import Calendar from '../../components/Icons/Calendar'
import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'
import { FaCalendarAlt, FaHotel, FaPlane, FaShoppingBag } from 'react-icons/fa'
import Image from 'next/image'
import profile from '../../images/profile.png'
const svgStyle = {
  fontSize: '30px',
  height: '30px',
  width: '30px',
  minWidth: '30px',
}
const svgClass =
  'h-[20px] w-[20px] min-w-[20px] sm:h-[30px] sm:h-[30px] sm:min-w-[30px]'
const tabs = [
  {
    title: 'Flights',
    id: 'flights',
    icon: <Plane className={svgClass} />,
    color: '#f8f7ff',
    content: 'TabContent',
    keyWords: 'plane,airport,flights',
  },
  {
    title: 'Hotels',
    id: 'hotels',
    icon: <House className={svgClass} />,
    color: '#f8f7ff',
    content: 'TabContent',
    keyWords: 'hotels,resort',
  },
  {
    title: 'Reservations',
    id: 'reservations',
    icon: <Calendar className={svgClass} />,
    color: '#f8f7ff',
    content: 'TabContent',
    keyWords: 'restaurants,menu',
  },
  {
    title: 'Offers',
    id: 'offers',
    icon: <Bag className={svgClass} />,
    color: '#f8f7ff',
    content: 'TabContent',
    keyWords: 'shopping,coupons',
  },
]

function ListItem({ tab, onTabClick, index, activeIndex = 0 }) {
  const tabVariant = {
    active: {
      background: tab.color,
      width: '55%',
      transition: {
        type: 'tween',
        duration: 0.3,
      },
    },
    inactive: {
      background: 'inherit',
      width: '15%',
      transition: {
        type: 'tween',
        duration: 0.4,
      },
    },
  }
  const tabTextVariant = {
    active: {
      opacity: 1,
      x: 0,
      display: 'block',
      transition: {
        type: 'tween',
        duration: 0.3,
        delay: 0.3,
      },
    },
    inactive: {
      opacity: 0,
      x: -30,
      transition: {
        type: 'tween',
        duration: 0.3,
        delay: 0.1,
      },
      transitionEnd: { display: 'none' },
    },
  }

  return (
    <>
      <motion.li
        initial={false}
        className={`${
          activeIndex == index ? 'active' : 'inactive'
        } tab relative border rounded-md p-2`}
        role="presentation"
        variants={tabVariant}
        animate={activeIndex === index ? 'active' : 'inactive'}
      >
        <a
          href={`#${tab.id}`}
          onClick={() => onTabClick(index)}
          className="flex relative align-middle items-center overflow-hidden text-md"
        >
          {tab.icon}
          <motion.span
            className="ml-2 hidden sm:inline-block"
            variants={tabTextVariant}
          >
            {tab.title}
          </motion.span>
        </a>
      </motion.li>
    </>
  )
}
function TabsPage() {
  const [activeTabIndex, setActiveTabIndex] = useState(0)
  const [photo, setImage] = useState(tabs[0].id)

  function onTabClick(index) {
    setActiveTabIndex(index)
    setImage(() => tabs[index].keyWords)
  }
  return (
    <>
      <Head>
        <title>tabs</title>
        <meta name="description" content="uh.." />
      </Head>
      <Layout className={`grid place-items-center w-full`}>
        <div
          className={`max-w-[800px] min-w-[300px] m-auto p-4 sm:p-8 rounded-xl bg-neutral-200 w-full`}
        >
          <AnimatePresence>
            <ul
              className={`flex max-w-[400px] justify-between align-middle items-center list-none
              mt-0 mx-auto mb-[20px]`}
            >
              {tabs.map((tab, index) => (
                <ListItem
                  key={tab.id}
                  tab={tab}
                  index={index}
                  onTabClick={onTabClick}
                  activeIndex={activeTabIndex}
                />
              ))}
            </ul>
          </AnimatePresence>
          <section className=" h-auto flex flex-row flex-wrap">
            {new Array(4).fill(0).map((_, index) => (
              <div className="w-1/2 p-0 sm:p-1 rounded-md">
                <Image
                  key={index}
                  src={`https://source.unsplash.com/random/900x700/?${photo}&${tabs[index].id}`}
                  width={900}
                  height={700}
                  alt="yo"
                  placeholder="blur"
                  blurDataURL={photo}
                  className={'width-full h-auto rounded-md'}
                />
              </div>
            ))}
          </section>
        </div>
      </Layout>
    </>
  )
}

export default TabsPage
