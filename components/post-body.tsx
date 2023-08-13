import markdownStyles from './markdown-styles.module.css'
import ReactMarkdown from 'react-markdown'
import rehypeRaw from "rehype-raw";
import Image from 'next/image'

type Props = {
  content: string
}

const PostBody = ({ content }: Props) => {
  
  console.log(content)
  return (
    <ReactMarkdown
      children={content}
      rehypePlugins={[rehypeRaw]}
      className={markdownStyles['markdown']}
      escapeHtml={false}
      components={{
        img: (props) => (
          <Image
            src={props.src}
            alt={props.alt}
            width={props.width}
            height={props.height}
            className="position-relative p-3 m-1"
          />
        ),
      }}
    />
  )
}

export default PostBody
