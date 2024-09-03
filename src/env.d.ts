/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />


interface ImportMetaEnv {
  readonly DIRECTUS_TOKEN: string;
  readonly DIRECTUS_DATABASE_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
