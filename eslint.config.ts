import js from '@eslint/js';
import { defineConfig } from 'eslint/config';
import tseslint from 'typescript-eslint';
import reactHooks from 'eslint-plugin-react-hooks';
import prettierRecommended from 'eslint-plugin-prettier/recommended';

export default defineConfig(
  js.configs.recommended,
  tseslint.configs.recommended,
  reactHooks.configs.flat.recommended,
  prettierRecommended,
  {
    ignores: [
      'pnpm-lock.yaml',
      'dist/',
      '.wrangler/',
      'worker/cloudflare.d.ts',
      'worker/db/drizzle/meta/',
    ],
  }
);
