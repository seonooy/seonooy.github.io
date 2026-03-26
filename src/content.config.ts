import { defineCollection, z } from "astro:content";

const posts = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    lang: z.enum(["kr", "en"]),
    category: z.string(),
    tags: z.array(z.string()).default([]),
    publishedAt: z.coerce.date(),
    draft: z.boolean().default(false)
  })
});

export const collections = { posts };
