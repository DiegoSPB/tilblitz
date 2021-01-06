import React from "react"
import { useQuery } from "blitz"
import getAllPosts from "app/posts/queries/getPosts"

export const Posts = () => {
  const [{ data: posts }] = useQuery(getAllPosts, null)

  return (
    <div>
      {posts.map((post) => (
        <div key={post._id}>{post.title}</div>
      ))}
    </div>
  )
}

export default Posts
