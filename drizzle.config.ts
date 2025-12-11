import { defineConfig } from 'drizzle-kit';

export default defineConfig({
  out: './worker/db/drizzle',
  schema: './worker/db/schema.ts',
  dialect: 'postgresql',
  dbCredentials: {
    url: process.env.DATABASE_URL!,
  },
});
