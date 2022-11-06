import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Navbar } from '../components/Navbar'
import Link from 'next/link'
export default function Home() {
  return (
    <>
    <Head>
      <title>Ninja List | Home</title>
      <meta name="keywords" content="ninjas"/>
    </Head>
    <div>
      <h1 className={styles.title}>Home Page</h1>
      <p className={styles.text}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae provident repellat fuga laborum? Numquam repellat error doloremque temporibus dolorem. Dignissimos, ullam. Aliquam ipsam a nobis eveniet? Porro, eius. Perferendis, quisquam.</p>
      <p className={styles.text}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae provident repellat fuga laborum? Numquam repellat error doloremque temporibus dolorem. Dignissimos, ullam. Aliquam ipsam a nobis eveniet? Porro, eius. Perferendis, quisquam.</p>
      <Link className={styles.btn} href="/ninjas">See Ninja Listing</Link>
    </div>
    </>
  )
}
