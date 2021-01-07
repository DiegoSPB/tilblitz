import React from "react"
import getAllPosts from "app/posts/queries/getPosts"
import { useInfiniteQuery } from "blitz"
import Post from "./Post"

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
            <Post post={post} />
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
