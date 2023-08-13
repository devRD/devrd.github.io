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
      <div className={`${unna.className} ${styles.herocont}`}>
        <CoverImage title={title} src={coverImage} slug={slug} />
        <div className={`${styles.text}`}>
          <h3 className="fs-4 mb-1 text-truncate">
            <Link
              as={`/posts/${slug}`}
              href="/posts/[slug]"
              className="hover:underline"
            >
              {title}
            </Link>
          </h3>
          <div className="text-lg mb-4">
            <DateFormatter dateString={date} />
          </div>
          <p className="mb-4">{excerpt}</p>
          <Avatar name={author.name} picture={author.picture} />
        </div>
      </div>
    </>
  )
}

export default HeroPost
