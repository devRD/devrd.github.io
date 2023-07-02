import { Waterfall, Unna } from 'next/font/google'
import Link from 'next/link'

import DateFormatter from './date-formatter'
import CoverImage from './cover-image'
import type Author from '@interfaces/author'

import Avatar from './avatar'
import styles from '@styles/blog-layout.module.css'

type Props = {
  title: string
  coverImage: string
  date: string
  excerpt: string
  author: Author
  slug: string
}

const unna = Unna({
  subsets: [],
  weight: ["400", "700"],
  preload: true
})

const HeroPost = ({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}: Props) => {
  return (
    <>
      {/** Add Cover Image Hero as background **/}
      <div className={`${unna.className} position-relative ${styles.herocont}`}>
        <CoverImage title={title} src={coverImage} slug={slug} />
        <div className={`${styles.text} position-absolute`}>
          <h4 className={`mb-4 text-truncate ${styles.herotitle}`}>
            <Link
              as={`/posts/${slug}`}
              href="/posts/[slug]"
            >
              {title}
            </Link>
          </h4>
          <DateFormatter dateString={date} />
          <p className="mt-4 mb-4 text-truncate">{excerpt}</p>
        </div>
      </div>
    </>
  )
}

export default HeroPost
