import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Normal() {
  return (
    <>
      <Head>
        <title>MeetBit Sample Meeting Link Embed</title>
        <meta name="description" content="A sample NextJS application on how to embed MeetBit Meeting Links." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>

        <h1> <a href='/'>&lt;- </a> A Normal Meeting Link</h1>
        <p className={styles.description}>A publicly accessible meeting link.</p>

        <iframe className={styles.iframe} src={`https://demo.meetbit.io/meeting/${process.env.NEXT_PUBLIC_NORMAL_MEETING_LINK_ID}?embed=true`} />

      </main>
    </>
  )
}
