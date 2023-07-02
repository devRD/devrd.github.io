import Avatar from './avatar'
import DateFormatter from './date-formatter'
import CoverImage from './cover-image'
import PostTitle from './post-title'
import type Author from '../interfaces/author'

type Props = {
  title: string
  coverImage: string
  date: string
  author: Author
}

const PostHeader = ({ title, coverImage, date, author }: Props) => {
  return (
    <>
      <PostTitle>{title}</PostTitle>
      <div className="d-none">
        <Avatar name={author.name} picture={author.picture} />
      </div>
      <CoverImage title={title} src={coverImage} />
      <div className="">
        <div className="block d-none mb-6">
          <Avatar name={author.name} picture={author.picture} />
        </div>
        <div className="">
          <DateFormatter dateString={date} />
        </div>
      </div>
    </>
  )
}

export default PostHeader
