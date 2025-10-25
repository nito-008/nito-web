import type { CollectionEntry } from "astro:content";
import { getCollection } from "astro:content";

export async function getPosts(): Promise<CollectionEntry<"blog">[]> {
  const posts = await getCollection("blog");

  posts.sort((a, b) => {
    return b.data.pubDate.getTime() - a.data.pubDate.getTime();
  });

  return posts;
}

export async function getWorks(): Promise<CollectionEntry<"work">[]> {
  const posts = await getCollection("work");

  posts.sort((a, b) => {
    return b.data.pubDate.getTime() - a.data.pubDate.getTime();
  });

  return posts;
}

export function getSlugFromId(id: string): string {
  return id.split(".").slice(0, -1).join(".");
}
