import { createDirectus, graphql, readItems, rest } from "@directus/sdk";
import type { DirectusInterface } from "./types";
import { db } from "@/utils/env";

export const directusClient = createDirectus<DirectusInterface>(db)
  .with(rest())
  .with(graphql());

export async function getPagesBySlug() {
  const pages = await directusClient.request(
    // @ts-expect-error Typings should include this
    readItems("pages", {
      fields: ["*"],
    }),
  );
  console.log(pages);
  return pages;
}
