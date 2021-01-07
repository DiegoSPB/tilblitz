import React from "react"
import Posts from "app/posts/components/Posts"
import { BlitzPage } from "blitz"
import Layout from "app/layouts/Layout"
import { Suspense } from "react"

const Index: BlitzPage = () => {
  return (
    <div className="container mx-auto">
      <Suspense fallback="Loading...">
        <Posts />
      </Suspense>
    </div>
  )
}

Index.getLayout = (page) => <Layout title="Posts">{page}</Layout>

export default Index
