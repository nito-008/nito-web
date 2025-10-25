import { z, defineCollection } from "astro:content";

const blogCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    pubDate: z.coerce.date(),
    tags: z.array(z.string()).optional(),
    image: z.string().optional(),
  }),
});

const workCollection = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      name: z.string(),
      description: z.string(),
      icon: image(),
      url: z.string().url().optional(),
      pubDate: z.date(),
    }),
});

const linkCollection = defineCollection({
  type: "data",
  schema: ({ image }) =>
    z.object({
      name: z.string(),
      icon: z.object({
        normal: image(),
        inverted: image(),
      }),
      id: z.string(),
      link: z.string(),
      color: z.string(),
    }),
});

export const collections = {
  blog: blogCollection,
  link: linkCollection,
  work: workCollection,
};
