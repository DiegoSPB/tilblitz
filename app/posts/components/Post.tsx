import React from "react"
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
export const Post = ({ post }) => (
  <div key={post._id} className="shadow rounded p-16 bg-white mb-16">
    <h1 className="pb-4 text-3xl font-bold">
      <a href={`posts/${post._id}`}>{post.title}</a>
    </h1>
    <Markdown source={post.content} renderers={{ code: CodeBlock }} allowDangerousHtml />
  </div>
)

export default Post
