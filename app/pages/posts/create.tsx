import React from "react"
import { BlitzPage } from "blitz"
import Layout from "app/layouts/Layout"
import PostForm from "app/posts/components/PostForm"

const Create: BlitzPage = () => {
  return (
    <div className="container mx-auto">
      <PostForm onSuccess={() => console.log("success")} />
    </div>
  )
}

Create.getLayout = (page) => <Layout title="Create Post">{page}</Layout>

export default Create
