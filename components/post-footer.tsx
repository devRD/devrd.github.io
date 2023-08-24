import Avatar from './avatar'
import DateFormatter from './date-formatter'
import CoverImage from './cover-image'
import PostTitle from './post-title'
import type Author from '../interfaces/author'

type Props = {
  title: string
  date: string
  author: Author
}

const PostFooter = ({ title, date, author }: Props) => {
  return (
    <>
      <div className="d-flex flex-column">
        <Avatar name={author.name} picture={author.picture} />
        <DateFormatter dateString={date} />
      </div>
    </>
  )
}

export default PostFooter
