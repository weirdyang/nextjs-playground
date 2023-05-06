import Head from 'next/head'
import Image from 'next/image'
import AnimatedText from '../components/AnimatedText'
import Layout from '../components/Layout/Layout'
import { motion, useAnimation, useScroll } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useEffect, useRef } from 'react'

function TextBlockInView({ children, className = '' }) {
  const controls = useAnimation()
  const [ref, inView] = useInView()
  useEffect(() => {
    if (inView) {
      controls.start('animate')
    }
  }, [controls, inView])

  const variants = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        duration: 0.8,
      },
    },
  }
  return (
    <motion.p
      ref={ref}
      className={`my-4 text-base font-medium ${className}`}
      variants={variants}
      animate={controls}
      initial="initial"
    >
      {children}
    </motion.p>
  )
}
function Textblock({ children, delay = 0, className = '' }) {
  const variants = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        delay: delay,
        duration: 0.8,
      },
    },
  }
  return (
    <motion.p
      className={`my-4 text-base font-medium ${className}`}
      variants={variants}
      animate="animate"
      initial="initial"
    >
      {children}
    </motion.p>
  )
}

export default function IndexPage() {
  return (
    <>
      <Head>
        <title>yo</title>
        <meta name="description" content="uh.." />
      </Head>
      <main className={'flex items-start w-full min-h-screen text-slate-900'}>
        <Layout className="pt-0">
          <div className="md:!flex-row flex items-stretch justify-between w-full flex-col gap-4">
            <div className={'w-full md:w-1/2 flex items-start flex-col'}>
              <Image
                src={
                  'https://source.unsplash.com/random/900x700/?fruit,night,dogs,cute'
                }
                width={900}
                height={700}
                alt="yo"
                className={'width-full h-auto'}
              />
            </div>
            <div
              className={
                'w-full md:w-1/2 flex flex-col items-start self-center'
              }
            >
              <AnimatedText
                text={'wow wow wow wow'}
                className={' !text-6xl !text-left'}
              />
              <Textblock delay={1}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Lobortis elementum nibh tellus molestie nunc non. Vestibulum
                lorem sed risus ultricies tristique nulla aliquet enim. Tellus
                mauris a diam maecenas sed enim ut sem viverra. Et tortor at
                risus viverra adipiscing at in tellus. Lorem donec massa sapien
                faucibus et molestie ac. Semper risus in hendrerit gravida
                rutrum quisque non. Non enim praesent elementum facilisis leo.
                Nisl purus in mollis nunc sed id. In arcu cursus euismod quis
                viverra nibh cras pulvinar. Cursus sit amet dictum sit amet
                justo donec enim diam. Ultrices dui sapien eget mi proin sed
                libero. Ipsum dolor sit amet consectetur adipiscing elit. Amet
                porttitor eget dolor morbi non arcu risus quis. Phasellus
                faucibus scelerisque eleifend donec pretium. Id eu nisl nunc mi
                ipsum faucibus vitae aliquet nec. Posuere lorem ipsum dolor sit
                amet consectetur adipiscing elit. Metus vulputate eu scelerisque
                felis imperdiet.
              </Textblock>
              <Textblock delay={2}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Lobortis elementum nibh tellus molestie nunc non. Vestibulum
                lorem sed risus ultricies tristique nulla aliquet enim. Tellus
                mauris a diam maecenas sed enim ut sem viverra. Et tortor at
                risus viverra adipiscing at in tellus. Lorem donec massa sapien
                faucibus et molestie ac. Semper risus in hendrerit gravida
                rutrum quisque non. Non enim praesent elementum facilisis leo.
                Nisl purus in mollis nunc sed id. In arcu cursus euismod quis
                viverra nibh cras pulvinar. Cursus sit amet dictum sit amet
                justo donec enim diam. Ultrices dui sapien eget mi proin sed
                libero. Ipsum dolor sit amet consectetur adipiscing elit. Amet
                porttitor eget dolor morbi non arcu risus quis. Phasellus
                faucibus scelerisque eleifend donec pretium. Id eu nisl nunc mi
                ipsum faucibus vitae aliquet nec. Posuere lorem ipsum dolor sit
                amet consectetur adipiscing elit. Metus vulputate eu scelerisque
                felis imperdiet.
              </Textblock>
              <Textblock delay={3}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Lobortis elementum nibh tellus molestie nunc non. Vestibulum
                lorem sed risus ultricies tristique nulla aliquet enim. Tellus
                mauris a diam maecenas sed enim ut sem viverra. Et tortor at
                risus viverra adipiscing at in tellus. Lorem donec massa sapien
                faucibus et molestie ac. Semper risus in hendrerit gravida
                rutrum quisque non. Non enim praesent elementum facilisis leo.
                Nisl purus in mollis nunc sed id. In arcu cursus euismod quis
                viverra nibh cras pulvinar. Cursus sit amet dictum sit amet
                justo donec enim diam. Ultrices dui sapien eget mi proin sed
                libero. Ipsum dolor sit amet consectetur adipiscing elit. Amet
                porttitor eget dolor morbi non arcu risus quis. Phasellus
                faucibus scelerisque eleifend donec pretium. Id eu nisl nunc mi
                ipsum faucibus vitae aliquet nec. Posuere lorem ipsum dolor sit
                amet consectetur adipiscing elit. Metus vulputate eu scelerisque
                felis imperdiet.
              </Textblock>
              <TextBlockInView>
                !!!!!!! Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua. Lobortis elementum nibh tellus molestie nunc non.
                Vestibulum lorem sed risus ultricies tristique nulla aliquet
                enim. Tellus mauris a diam maecenas sed enim ut sem viverra. Et
                tortor at risus viverra adipiscing at in tellus. Lorem donec
                massa sapien faucibus et molestie ac. Semper risus in hendrerit
                gravida rutrum quisque non. Non enim praesent elementum
                facilisis leo. Nisl purus in mollis nunc sed id. In arcu cursus
                euismod quis viverra nibh cras pulvinar. Cursus sit amet dictum
                sit amet justo donec enim diam. Ultrices dui sapien eget mi
                proin sed libero. Ipsum dolor sit amet consectetur adipiscing
                elit. Amet porttitor eget dolor morbi non arcu risus quis.
                Phasellus faucibus scelerisque eleifend donec pretium. Id eu
                nisl nunc mi ipsum faucibus vitae aliquet nec. Posuere lorem
                ipsum dolor sit amet consectetur adipiscing elit. Metus
                vulputate eu scelerisque felis imperdiet.
              </TextBlockInView>
              <TextBlockInView>
                !!!!!!! Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua. Lobortis elementum nibh tellus molestie nunc non.
                Vestibulum lorem sed risus ultricies tristique nulla aliquet
                enim. Tellus mauris a diam maecenas sed enim ut sem viverra. Et
                tortor at risus viverra adipiscing at in tellus. Lorem donec
                massa sapien faucibus et molestie ac. Semper risus in hendrerit
                gravida rutrum quisque non. Non enim praesent elementum
                facilisis leo. Nisl purus in mollis nunc sed id. In arcu cursus
                euismod quis viverra nibh cras pulvinar. Cursus sit amet dictum
                sit amet justo donec enim diam. Ultrices dui sapien eget mi
                proin sed libero. Ipsum dolor sit amet consectetur adipiscing
                elit. Amet porttitor eget dolor morbi non arcu risus quis.
                Phasellus faucibus scelerisque eleifend donec pretium. Id eu
                nisl nunc mi ipsum faucibus vitae aliquet nec. Posuere lorem
                ipsum dolor sit amet consectetur adipiscing elit. Metus
                vulputate eu scelerisque felis imperdiet.
              </TextBlockInView>
              <TextBlockInView>
                !!!!!!! Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua. Lobortis elementum nibh tellus molestie nunc non.
                Vestibulum lorem sed risus ultricies tristique nulla aliquet
                enim. Tellus mauris a diam maecenas sed enim ut sem viverra. Et
                tortor at risus viverra adipiscing at in tellus. Lorem donec
                massa sapien faucibus et molestie ac. Semper risus in hendrerit
                gravida rutrum quisque non. Non enim praesent elementum
                facilisis leo. Nisl purus in mollis nunc sed id. In arcu cursus
                euismod quis viverra nibh cras pulvinar. Cursus sit amet dictum
                sit amet justo donec enim diam. Ultrices dui sapien eget mi
                proin sed libero. Ipsum dolor sit amet consectetur adipiscing
                elit. Amet porttitor eget dolor morbi non arcu risus quis.
                Phasellus faucibus scelerisque eleifend donec pretium. Id eu
                nisl nunc mi ipsum faucibus vitae aliquet nec. Posuere lorem
                ipsum dolor sit amet consectetur adipiscing elit. Metus
                vulputate eu scelerisque felis imperdiet.
              </TextBlockInView>
              <TextBlockInView>
                !!!!!!! Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua. Lobortis elementum nibh tellus molestie nunc non.
                Vestibulum lorem sed risus ultricies tristique nulla aliquet
                enim. Tellus mauris a diam maecenas sed enim ut sem viverra. Et
                tortor at risus viverra adipiscing at in tellus. Lorem donec
                massa sapien faucibus et molestie ac. Semper risus in hendrerit
                gravida rutrum quisque non. Non enim praesent elementum
                facilisis leo. Nisl purus in mollis nunc sed id. In arcu cursus
                euismod quis viverra nibh cras pulvinar. Cursus sit amet dictum
                sit amet justo donec enim diam. Ultrices dui sapien eget mi
                proin sed libero. Ipsum dolor sit amet consectetur adipiscing
                elit. Amet porttitor eget dolor morbi non arcu risus quis.
                Phasellus faucibus scelerisque eleifend donec pretium. Id eu
                nisl nunc mi ipsum faucibus vitae aliquet nec. Posuere lorem
                ipsum dolor sit amet consectetur adipiscing elit. Metus
                vulputate eu scelerisque felis imperdiet.
              </TextBlockInView>
              <TextBlockInView>
                !!!!!!! Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua. Lobortis elementum nibh tellus molestie nunc non.
                Vestibulum lorem sed risus ultricies tristique nulla aliquet
                enim. Tellus mauris a diam maecenas sed enim ut sem viverra. Et
                tortor at risus viverra adipiscing at in tellus. Lorem donec
                massa sapien faucibus et molestie ac. Semper risus in hendrerit
                gravida rutrum quisque non. Non enim praesent elementum
                facilisis leo. Nisl purus in mollis nunc sed id. In arcu cursus
                euismod quis viverra nibh cras pulvinar. Cursus sit amet dictum
                sit amet justo donec enim diam. Ultrices dui sapien eget mi
                proin sed libero. Ipsum dolor sit amet consectetur adipiscing
                elit. Amet porttitor eget dolor morbi non arcu risus quis.
                Phasellus faucibus scelerisque eleifend donec pretium. Id eu
                nisl nunc mi ipsum faucibus vitae aliquet nec. Posuere lorem
                ipsum dolor sit amet consectetur adipiscing elit. Metus
                vulputate eu scelerisque felis imperdiet.
              </TextBlockInView>
            </div>
          </div>
        </Layout>
      </main>
    </>
  )
}
