import Head from 'next/head'
import Image from 'next/image'
import { Unna } from 'next/font/google'

import Container from '@components/container'
import MoreStories from '@components/more-stories'
import HeroPost from '@components/hero-post'
import Layout from '@components/layout'

import { getAllPosts } from '@lib/api'
import Post from '@interfaces/post'

import styles from '@styles/blog-layout.module.css'

type Props = {
  allPosts: Post[]
}

const unna = Unna({
  subsets: [],
  weight: ["400", "700"],
  preload: true
})

export default function Index({ allPosts }: Props) {
  const heroPost = allPosts[0]
  const morePosts = allPosts.slice(1)
  return (
    <>
        <Head>
          <title>{`Blog`}</title>
        </Head>
        <div className="d-flex justify-content-center mb-4">
          <a href="/blog" className={`${unna.className} fw-bold fs-2 navbar-brand`}>Blog.</a>
        </div>
        <div className="">
          <Image
            src="/assets/tflow.svg"
            className={`${styles.tflowone} img-fluid`}
            width="200"
            height="200"
          />
          <Image
            src="/assets/tflow.svg"
            className={`${styles.tflowtwo} img-fluid`}
            width="200"
            height="200"
          />
        </div>
        <div className="container">
          {heroPost && (
            <HeroPost
              title={heroPost.title}
              coverImage={heroPost.coverImage}
              date={heroPost.date}
              author={heroPost.author}
              slug={heroPost.slug}
              excerpt={heroPost.excerpt}
            />
          )}
          <div className="mt-3">
            {morePosts.length > 0 && <MoreStories posts={morePosts} />}
          </div>
        </div>
    </>
  )
}

export const getStaticProps = async () => {
  const allPosts = getAllPosts([
    'title',
    'date',
    'slug',
    'author',
    'coverImage',
    'excerpt',
  ])

  return {
    props: { allPosts },
  }
}
