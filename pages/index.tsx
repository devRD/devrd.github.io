import Image from 'next/image'
import Link from 'next/link'
import { Waterfall, Unna } from 'next/font/google'

import styles from '@styles/page.module.css'

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
    <main className={styles.main}>
      <div className={styles.description}>
        <a href="/website">
          <div
            className={`${styles.logo} ${unna.className} fs-4 fw-bold`}
           >
             _devrd
           </div>
        </a>
      </div>

      <div className={styles.center}>
      </div>

      <div className={styles.grid}>
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
        <Image
          alt="landing_flower"
          className={`d-none d-sm-block position-absolute img-fluid ${styles.flow}`}
          src="./assets/flower.svg"
          width="300"
          height="300"
        />
        <Image
          alt="landing_flower"
          className={`d-none d-sm-block position-absolute img-fluid ${styles.tflow}`}
          src="./assets/tflow.svg"
          width="150"
          height="150"
        />
      </div>
    </main>
  )
}
