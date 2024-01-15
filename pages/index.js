import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>
      <main className={`${styles.main}`}>
        <Link href={'./ExampleOne'}>Example 1</Link>
        <Link href={'./ExampleTwo'}>Example 2</Link>
        <Link href={'./ExampleThree'}>Example 3</Link>
        <Link href={'./ExampleFour'}>Example 4</Link>
        <Link href={'./ExampleFive'}>Example 5</Link>
      </main>
      <Footer/>
    </>
  )
}
