import db from "db"
import { gql } from "graphql-request"

export default async function findPostById({ id }) {
  const { post } = await db.request(
    gql`
      query findPost($id: ID!) {
        post: findPostByID(id: $id) {
          id: _id
          title
          content
          tags
        }
      }
    `,
    { id }
  )

  return post
}
