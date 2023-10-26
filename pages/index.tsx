import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { Waterfall, Unna } from 'next/font/google'

import styles from '@styles/page.module.css'
import { PATH_CONFIG } from '../config'

const mo = Waterfall({
  subsets: [],
  weight: ["400"],
  preload: true
})

const unna = Unna({
  subsets: [],
  weight: ["400", "700"],
  preload: true
})

export default function Home() {
  return (
    <>
      <Head>
        <title>{`Landing Page`}</title>
        <link rel="icon" href="/favicon/favicon.ico" sizes="any" />
      </Head>
      <main className={styles.main}>
        <div className={styles.description}>
          <a href="/">
            <div
              className={`${styles.logo} ${unna.className} fs-4 fw-bold`}
             >
               _devrd
             </div>
          </a>
        </div>
        <div className={`${styles.grid}`}>
          <Link
            href="/about"
            className={styles.card}
          >
            <h2 className={unna.className}>
              About <span>&rarr;</span>
            </h2>
            <p>Who am I?</p>
          </Link>

          <Link
            href="/blog"
            className={styles.card}
          >
            <h2 className={unna.className}>
              Blog <span>&rarr;</span>
            </h2>
            <p>What do I do?</p>
          </Link>
          <Link
            href="/projects"
            className={styles.card}
          >
            <h2 className={unna.className}>
              Portfolio <span>&rarr;</span>
            </h2>
            <p>Explore projects</p>
          </Link>
          <Image
            alt="landing_flower"
            className={`d-block d-sm-none position-absolute img-fluid ${styles.mobileflow}`}
            src={`${PATH_CONFIG}/assets/tflow.svg`}
            width="250"
            height="250"
          />
          <Image
            alt="landing_flower"
            className={`d-none d-sm-block position-absolute img-fluid ${styles.flow}`}
            src={`${PATH_CONFIG}/assets/flower.svg`}
            width="300"
            height="300"
          />
          <Image
            alt="landing_flower"
            className={`d-none d-sm-block position-absolute img-fluid ${styles.tflow}`}
            src={`${PATH_CONFIG}/assets/tflow.svg`}
            width="150"
            height="150"
          />
        </div>
      </main>
    </>
  )
}
