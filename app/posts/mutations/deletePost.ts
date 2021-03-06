import { Ctx } from "blitz"
import db from "db"
import { gql } from "graphql-request"
import { CreatePostInput, CreatePostInputType } from "../validations"

export default async function createPost(input: CreatePostInputType, { session }: Ctx) {
  // const { title, content, tags } = CreatePostInput.parse(input)
  // const { post } = await db.request(
  //   gql`
  //     mutation createPost($data: PostInput!) {
  //       user: createPost(data: $data) {
  //         id: _id
  //         content
  //         title
  //         language
  //         tags
  //         user {
  //           email
  //         }
  //       }
  //     }
  //   `,
  //   {
  //     data: {
  //       createdAt: new Date().toISOString(),
  //       language: language.toLowerCase(),
  //       tags: tags,
  //       content: content,
  //       title: title,
  //       user: { connect: session.userId },
  //     },
  //   }
  // )
  // return post
}
