import markdownStyles from '@styles/markdown-styles.module.css'
import ReactMarkdown from 'react-markdown'
import rehypeRaw from "rehype-raw";
import Image from 'next/image'

type Props = {
  content: string
}

const PostBody = ({ content }: Props) => {
  return (
    <ReactMarkdown
      children={content}
      rehypePlugins={[rehypeRaw]}
      className={markdownStyles['markdown']}
      components={{
        img: (props) => (
          <Image
            src={props.src!}
            alt={props.alt!}
            width={props.width}
            height={props.height}
            className="p-2 position-relative"
          />
        ),
      }}
    />
  )
}

export default PostBody
