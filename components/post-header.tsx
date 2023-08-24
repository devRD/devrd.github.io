import Avatar from './avatar'
import DateFormatter from './date-formatter'
import CoverImage from './cover-image'
import PostCover from './post-cover-image'
import PostTitle from './post-title'
import type Author from '../interfaces/author'

import { Unna } from 'next/font/google'

type Props = {
  title: string
  subtitle: string
  coverImage: string
  date: string
  author: Author
}

const unna = Unna({
  subsets: [],
  weight: ["400", "700"],
  preload: true
})


const PostHeader = ({ title, subtitle, coverImage, date, author }: Props) => {
  return (
    <>
      <div className="d-none">
        <PostTitle>{title}</PostTitle>
        <Avatar name={author.name} picture={author.picture} />
      </div>
      <div className={`${unna.className}`}>
        <PostCover title={subtitle} src={coverImage} />
        <div className="fst-italic text-center p-0 m-0 lh-0">
          <DateFormatter dateString={date} />
        </div>
        <div className="fst-italic d-flex justify-content-center mb-4">
          <Avatar name={author.name} />
        </div>
      </div>
    </>
  )
}

export default PostHeader
