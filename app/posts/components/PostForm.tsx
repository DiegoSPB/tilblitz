import React from "react"
import { useMutation } from "blitz"
import { LabeledTextField } from "app/components/LabeledTextField"
import { Form, FORM_ERROR } from "app/components/Form"
import { Field } from "react-final-form"
import { CreatePostInput } from "../validations"
import createPost from "../mutations/createPost"

type PostFormProps = {
  onSuccess?: () => void
}

export const PostForm = (props: PostFormProps) => {
  const [signupMutation] = useMutation(createPost)

  return (
    <div>
      <h1>Create a Post</h1>

      <Form
        submitText="Create Post"
        schema={CreatePostInput}
        initialValues={{ content: "content", title: "Title", language: "ruby", tags: [""] }}
        onSubmit={async (values) => {
          try {
            await signupMutation(values)
            props.onSuccess?.()
          } catch (error) {
            return { [FORM_ERROR]: error.toString() }
          }
        }}
      >
        <LabeledTextField name="title" label="Title" placeholder="Title" />
        <LabeledTextField name="language" label="Language" placeholder="Language" />
        <div>
          Content
          <Field name="content" component="textarea" rows="10" className="w-full" />
        </div>
      </Form>
    </div>
  )
}

export default PostForm
