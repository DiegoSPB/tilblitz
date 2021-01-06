import { Ctx } from "blitz"
import db from "db"
import { gql } from "graphql-request"

export default async function getAllPosts(_ = null, { session }: Ctx) {
  if (!session.userId) return null

  const { allPosts } = await db.request(
    gql`
      query allPosts {
        allPosts {
          data {
            _id
            content
            title
            user {
              email
            }
          }
        }
      }
    `,
    {}
  )

  return allPosts
}
