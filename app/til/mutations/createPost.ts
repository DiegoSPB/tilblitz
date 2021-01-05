import { Ctx } from "blitz"
import db from "db"
import { gql } from "graphql-request"
import { CreatePostInput, CreatePostInputType } from "../validations"

export default async function createPost(input: CreatePostInputType, { session }: Ctx) {
  const { title, content, tags } = CreatePostInput.parse(input)

  console.log(session)

  const { post } = await db.request(
    gql`
      mutation createPost($data: PostInput!) {
        user: createPost(data: $data) {
          id: _id
          content
          title
          tags
          user {
            email
          }
        }
      }
    `,
    { data: { content: content, title: title, user: { connect: session.userId } } }
  )
  console.log("Create post result:", post)

  return post
}
