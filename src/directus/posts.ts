import { readItems } from "@directus/sdk";
import { directusClient } from ".";

export async function getPostBySlug() {
  const articles = await directusClient.request(
    // @ts-expect-error Typings should include this
    readItems("posts", {
      fields: ["*"],
      sort: ["sort", "-published_at"], //Sort by sort field and creation date descending
    }),
  );
  return articles;
}
