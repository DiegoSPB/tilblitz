import * as z from "zod"

export const CreatePostInput = z.object({
  title: z.string().min(1).max(100),
  content: z.string().min(1).max(2000),
  language: z.string().min(1).max(2000),
  tags: z.array(z.string()),
})

export type CreatePostInputType = z.infer<typeof CreatePostInput>
