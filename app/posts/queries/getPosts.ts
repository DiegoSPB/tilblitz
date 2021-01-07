import db from "db"
import { gql } from "graphql-request"

export default async function getAllPosts({ size, cursor }) {
  const { allPosts } = await db.request(
    gql`
      query allPosts($size: Int!, $cursor: String) {
        allPosts(_size: $size, _cursor: $cursor) {
          data {
            _id
            content
            title
            user {
              email
            }
          }
          before
          after
        }
      }
    `,
    { size: size, cursor }
  )

  // TODO: check if there are more
  const hasMore = true
  const nextPage = hasMore ? { size: size, cursor: allPosts.after } : null
  return {
    allPosts,
    nextPage,
  }
}
