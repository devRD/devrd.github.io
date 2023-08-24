import Avatar from './avatar'
import DateFormatter from './date-formatter'
import CoverImage from './cover-image'
import Link from 'next/link'
import type Author from '@interfaces/author'

type Props = {
  title: string
  coverImage: string
  date: string
  excerpt: string
  author: Author
  slug: string
}

const PostPreview = ({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}: Props) => {
  return (
    <div className="col-md-6 col-sm-12 mb-4">
      <div className="mb-5">
        <CoverImage slug={slug} title={title} src={coverImage}/>
      </div>
      <h5 className="mb-1 fw-bold text-truncate">
        <Link
          as={`/posts/${slug}`}
          href="/posts/[slug]"
          className="hover:underline"
        >
          {title}
        </Link>
      </h5>
      <div
         style={{ "fontSize": "0.8rem" }}
         className="p-0 m-0 lh-0 pb-1 fst-italic"
       >
          <DateFormatter dateString={date} />
          <Avatar name={author.name} />
      </div>
      <p className="mb-4">{excerpt}</p>
    </div>
  )
}

export default PostPreview
