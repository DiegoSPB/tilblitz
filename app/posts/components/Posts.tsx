import React from "react"
import getAllPosts from "app/posts/queries/getPosts"
import { useInfiniteQuery } from "blitz"

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
        <React.Fragment key={i}>
          {group.allPosts.data.map((post) => (
            <p key={post._id}>{post.title}</p>
          ))}
        </React.Fragment>
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
