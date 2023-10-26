import Head from 'next/head'
import Image from 'next/image'
import { Waterfall, Unna } from 'next/font/google'

import ProjectHeader from '@components/project-header'
import Footer from '@components/footer'

import { web, text, art } from '@lib/projects'
import styles from '@styles/project.module.css'

const unna = Unna({
  subsets: [],
  weight: ["400", "700"],
  preload: true
})

export default function Projects() {
  return (
    <>
      <Head>
        <title>{`Projects`}</title>
      </Head>
      <ProjectHeader />
      <div className={`container ${unna.className} mt-3 mb-3`}>
        <div className={`mb-4 d-flex justify-content-center align-items-center flex-column ${styles.top}`}>
          <img src={`http://localhost:3000/website/assets/projects/portfolio.svg`} className="w-50"/>
          <p className="fs-4 m-0 p-0 lh-0">
            {`Explore projects ranging from web design, graphics, and development`}
          </p>
        </div>
        {/** Textual Projects Section **/}
        <div className="row mt-4">
          <div className={`mb-3 ${styles.web}`}>
            <p className="p-0 m-0 lh-0 font-bold">Written Works</p>
            <hr className="m-0"/>
          </div>
          {text && text.map((item, idx) => {
            return (
              <div className={`${styles.wrap} col-12 col-sm-6 col-md-6`}>
                <a
                  href={item.link}
                  className={`${styles.link} card`}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <div className={`${styles.imgOverlay}`}>
                    <div className={`${styles.project}`}>
                      {item.title}
                      <ul className={`${styles.list}`}>
                        <li> - {item.tag}</li>
                      </ul>
                    </div>
                    <img
                      className={`${styles.image}`}
                      src={item.image}
                      alt={item.title}
                    />
                    <div className={`d-flex ${styles.explore}`}>
                      Explore 
                    </div>
                    <hr className={`${styles.under}`}/>
                  </div>
                </a>
              </div>
            )
          })}
        </div>
        {/** Web Projects Section **/}
        <div className="row mt-4">
          <div className={`mb-3 ${styles.web}`}>
            <p className="p-0 m-0 lh-0 font-bold">Web Projects</p>
            <hr className="m-0"/>
          </div>
          {web && web.map((item, idx) => {
            return (
              <div className={`${styles.wrap} col-12 col-sm-6 col-md-6`}>
                <a
                  href={item.link}
                  className={`${styles.link} card`}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <div className={`${styles.imgOverlay}`}>
                    <div className={`${styles.project}`}>
                      {item.title}
                      <ul className={`${styles.list}`}>
                        <li> - {item.tag}</li>
                      </ul>
                    </div>
                    <img
                      className={`${styles.image}`}
                      src={item.image}
                      alt={item.title}
                    />
                    <div className={`d-flex ${styles.explore}`}>
                      Explore 
                    </div>
                    <hr className={`${styles.under}`}/>
                  </div>
                </a>
              </div>
            )
          })}
        </div>
        {/** Illutration Project Section **/}
        <div className="row mt-4">
          <div className={`mb-3 ${styles.web}`}>
            <p className="p-0 m-0 lh-0 font-bold">Graphic Art</p>
            <hr className="m-0"/>
          </div>
          {art && art.map((item, idx) => {
            return (
              <div className={`${styles.wrap} col-12 col-sm-6 col-md-6`}>
                <a
                  href={item.link}
                  className={`${styles.link} card`}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <div className={`${styles.imgOverlay}`}>
                    <div className={`${styles.project}`}>
                      {item.title}
                      <ul className={`${styles.list}`}>
                        <li key={idx}> - {item.tag}</li>
                      </ul>
                    </div>
                    <img
                      className={`${styles.image}`}
                      src={item.image}
                      alt={item.title}
                    />
                    <div className={`d-flex ${styles.explore}`}>
                      <p>Explore</p> 
                    </div>
                    <hr className={`${styles.under}`}/>
                  </div>
                </a>
              </div>
            )
          })}
        </div>
      </div>
      <Footer />
    </>
  )
}
