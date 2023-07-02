import Image from 'next/image'
import { Waterfall, Unna } from 'next/font/google'

import styles from '@styles/about.module.css'

const unna = Unna({
  subsets: [],
  weight: ["400", "700"],
  preload: true
})

export default function About() {
  return (
    <>
      <div className={`${styles.about} ${unna.className}`}>
        <div className="container">
          <div className="d-flex">
            <Image
              src="/assets/flow.svg"
              width="40"
              height="40"
              className="img-fluid"
            />
            <h3 className={`${styles.aboutTitle} text-dark pt-4`}>About.</h3>
          </div>
          <section className={`${styles.aboutCard} ${unna.className} mb-5`}>
          <p>
            {`Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna
              aliqua. Praesent elementum facilisis leo vel fringilla est
              ullamcorper eget. At imperdiet dui accumsan sit amet nulla
              facilities morbi tempus. Praesent elementum facilisis leo
              vel fringilla. Congue mauris rhoncus aenean vel. Egestas
              sed tempus urna et pharetra pharetra massa massa ultricies.`}
            </p>
          </section>
        </div>
      </div>
    </>
  )
}
