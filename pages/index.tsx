import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import AnimatedText from '../components/AnimatedText'
import Layout from '../components/Layout/Layout'
import profile from '../images/profile.png'

export default function IndexPage() {
  return (
    <>
      <Head>
        <title>yo</title>
        <meta name="description" content="uh.." />
      </Head>
      <main className={'flex items-start w-full min-h-screen text-slate-900'}>
        <Layout className="pt-0">
          <div className="md:!flex-row flex items-center justify-between w-full flex-col">
            <div className={'w-1/2'}>
              <Image src={profile} alt="yo" className={'width-full h-auto'} />
            </div>
            <div className={'w-1/2 flex flex-col items-start self-center'}>
              <AnimatedText
                text={'wow wow wow wow'}
                className={' !text-6xl !text-left'}
              />
              <p className="my-4 text-base font-medium">
                Hi Hi Hi Hi Hi Hi Hi Hi Hi Hi Hi Hi Hi Hi Hi Hi Hi Hi Hi Hi Hi
                Hi Hi Hi Hi Hi Hi Hi
              </p>
            </div>
          </div>
        </Layout>
      </main>
    </>
  )
}
