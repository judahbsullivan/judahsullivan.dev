import { readItem, readItems } from "@directus/sdk";
import { directusClient } from ".";

export async function getProjectBySlug() {
  const projects = await directusClient.request(
    // @ts-expect-error Typings should include this
    readItems("projects", {
      fields: ["*"],
      sort: ["sort", "-published_at"], //Sort by sort field and creation date descending
    }),
  );
  return projects;
}
