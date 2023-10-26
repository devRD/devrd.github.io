import { Waterfall, Unna } from 'next/font/google'
import Link from 'next/link'
import Container from './container'
import { PATH_CONFIG } from '../config'

import styles from '@styles/project.module.css'

export default function ProjectHeader() {
  return (
    <>
      <nav className="navbar navbar-expand-lg border-secondary-subtle p-0 border-bottom bg-body-tertiary">
        <div className="container-fluid">
            <Link href="/">
            <img
              src={`${PATH_CONFIG}/assets/logo.png`}
              className={`img-fluid ${styles.mainLogo}`}
            /> 
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="justify-content-end collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link
                  href="/"
                  className={`${styles.navl} nav-link`} 
                >
                    Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  href="/about"
                  className={`${styles.navl} nav-link`} 
                >
                    About
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  href="/blog"
                  className={`${styles.navl} nav-link`} 
                >
                    Blog
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  href="/projects"
                  className={`${styles.navl} nav-link`} 
                >
                    Portfolio
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}
