import markdownStyles from '@styles/markdown-styles.module.css'
import ReactMarkdown from 'react-markdown'
import rehypeRaw from "rehype-raw";
import Image from 'next/image'
import { Waterfall, Unna } from 'next/font/google'

type Props = {
  content: string
}

const unna = Unna({
  subsets: [],
  weight: ["400", "700"],
  preload: true
})

const PostBody = ({ content }: Props) => {
  return (
    <ReactMarkdown
      children={content}
      rehypePlugins={[rehypeRaw]}
      className={`${unna.className} ${markdownStyles.markdown}`}
      components={{
        img: (props) => (
          <Image
            src={props.src!}
            alt={props.alt!}
            width={Number(props.width)}
            height={Number(props.height)}
            className="p-2 position-relative"
          />
        ),
      }}
    />
  )
}

export default PostBody
