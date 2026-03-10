import { defineCollection, z } from 'astro:content';

const postSchema = z.object({
  title: z.string(),
  description: z.string(),
  pubDate: z.coerce.date(),
  tags: z.array(z.string()).default([]),
  draft: z.boolean().default(false),
});

const biosecurity = defineCollection({ type: 'content', schema: postSchema });
const writing = defineCollection({ type: 'content', schema: postSchema });
const notes = defineCollection({ type: 'content', schema: postSchema });

export const collections = { biosecurity, writing, notes };
