import cn from 'classnames'
import Link from 'next/link'
import Image from 'next/image'

import styles from '@styles/blog-layout.module.css'

type Props = {
  title: string
  src: string
}

const PostCover = ({ title, src }: Props) => {
  const image = (
    <Image
      fill={true}
      src={src}
      alt={`Cover Image for ${title}`}
      className="rounded img-fluid position-relative"
    />
  )
  return (
    <>
      <div className={`${styles.cover} position-relative`}>
        {image}
      </div>
      <h3 className="mb-0 mt-2 fw-bold text-center">{title}</h3>
    </>
  )
}

export default PostCover
