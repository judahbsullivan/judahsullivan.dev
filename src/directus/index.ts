import { createDirectus, rest } from "@directus/sdk";
import type { DirectusInterface } from "./types";
import { db } from "@/utils/env";

export const directusClient = createDirectus<DirectusInterface>(`${db}`).with(rest());




