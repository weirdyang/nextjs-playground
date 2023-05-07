import '../styles/global.css'
import { Inter } from 'next/font/google'
import Head from 'next/head'
import NavBar from '../components/NavBar'
import CustomLink from '../components/CustomLink'
import { ThemeProvider } from 'next-themes'
import ResponsiveNavbar from '../components/ResponsiveNavbar'
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

export default function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute='class'>
      <Head>
        <meta name="viewport" content="width-device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main
        className={`${inter.variable} font-sans bg-neutral-100 w-full min-h-screen
        dark:bg-slate-900 dark:text-zinc-300
        duration-500 ease-in-out transition-colors`}
      >
        <ResponsiveNavbar>
          <CustomLink href={'/framer/box'} title={'box'} />
        </ResponsiveNavbar>

        <Component {...pageProps} />
      </main>
    </ThemeProvider>
  )
}
