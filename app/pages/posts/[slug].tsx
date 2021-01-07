import React from "react"
import findPostById from "app/posts/queries/findPostById"
import { BlitzPage, useParam, useQuery, useRouter } from "blitz"
import Layout from "app/layouts/Layout"
import Post from "app/posts/components/Post"
import { Suspense } from "react"

const GetPost = () => {
  const router = useRouter()
  const slug = useParam("slug")
  const [post] = useQuery(findPostById, { id: slug })

  if (!post) {
    router.push("/")
    return null
  }

  return <Post post={post} />
}

const PostPage: BlitzPage = () => {
  return (
    <div className="container mx-auto">
      <Suspense fallback="Loading...">
        <GetPost />
      </Suspense>
    </div>
  )
}

PostPage.getLayout = (page) => <Layout title="Posts">{page}</Layout>

export default PostPage
