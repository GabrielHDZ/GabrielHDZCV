import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Header from '../components/navbar/header'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
    return (
        <div className={styles.container}>
            <Head>
                <title>GabrielHDZ</title>
                <meta name="description" content="About for gabrielHDZ" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />
            <main className={styles.main}>
                <h1>GabrielHDZ</h1>
                <p>Desarrollador web Javscript, NodeJs, PHP, Go</p>
            </main>


            <footer className={styles.footer}>

                <span className={styles.logo}>
                    <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
                </span>
            </footer>
        </div>
    )
}


export default Home
