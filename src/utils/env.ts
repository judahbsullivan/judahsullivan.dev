export const isDev = import.meta.env.DEV
  ? import.meta.env.DEV
  : import.meta.env.PROD;
export const db = import.meta.env.DIRECTUS_DATABASE_URL;
