import React from "react"
import getAllPosts from "app/posts/queries/getPosts"
import { useInfiniteQuery } from "blitz"
import ReactMarkdown from "react-markdown"
import CodeBlock from "./CodeBlock"
import styled from "styled-components"

const Markdown = styled(ReactMarkdown)`
  &&& {
    p,
    pre {
      margin-bottom: 20px !important;
    }
  }
`

export const Posts = () => {
  const [groupedPosts, { isFetching, isFetchingMore, fetchMore, canFetchMore }] = useInfiniteQuery(
    getAllPosts,
    (page = { size: 10, cursor: null }) => page,
    {
      getFetchMore: (lastGroup) => lastGroup.nextPage,
    }
  )

  return (
    <div>
      {groupedPosts.map((group, i) => (
        <div key={i} className="flex flex-col p-16">
          {group.allPosts.data.map((post: { _id: string; title: string; content: string }) => (
            <div key={post._id} className="shadow rounded p-16 bg-white mb-16">
              <h1 className="pb-4 text-3xl font-bold">
                <a href={`posts/${post._id}`}>{post.title}</a>
              </h1>
              <Markdown source={post.content} renderers={{ code: CodeBlock }} allowDangerousHtml />
            </div>
          ))}
        </div>
      ))}
      <div>
        <button onClick={() => fetchMore()} disabled={!canFetchMore || !!isFetchingMore}>
          {isFetchingMore ? "Loading more..." : canFetchMore ? "Load More" : "Nothing more to load"}
        </button>
      </div>
      <div>{isFetching && !isFetchingMore ? "Fetching..." : null}</div>
    </div>
  )
}

export default Posts
