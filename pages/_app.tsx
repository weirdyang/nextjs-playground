import '../styles/global.css'
import { Inter } from 'next/font/google'
import Head from 'next/head'
import NavBar from '../components/NavBar'
import Link from 'next/link'
import CustomLink from '../components/CustomLink'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width-device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main
        className={`${inter.variable} font-sans bg-neutral-100 w-full min-h-screen flex flex-col`}
      >
        <NavBar>
          <CustomLink href={'/framer/box'} title={'box'} />
        </NavBar>
        <Component {...pageProps} />
      </main>
    </>
  )
}
