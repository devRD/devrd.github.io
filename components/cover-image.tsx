import cn from 'classnames'
import Link from 'next/link'
import Image from 'next/image'

import styles from '@styles/blog-layout.module.css'

type Props = {
  title: string
  src: string
  slug?: string
}

const CoverImage = ({ title, src, slug }: Props) => {
  const image = (
    <Image
      fill={true}
      src={src}
      alt={`Cover Image for ${title}`}
      className="shadow-lg m-3 rounded img-fluid position-relative"
    />
  )
  return (
    <>
      {slug ? (
        <Link as={`/posts/${slug}`} href="/posts/[slug]" aria-label={title}>
          <div className={`c-img ${styles.hero}`}>
            {image}
          </div>
        </Link>
      ) : (
        <div className={`c-img ${styles.hero}`}>
          {image}
        </div>
      )}
    </>
  )
}

export default CoverImage
