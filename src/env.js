import { createEnv } from '@t3-oss/env-nextjs';
import { z } from 'zod';

export const env = createEnv({
  server: {
    NODE_ENV: z
      .enum(['development', 'test', 'production'])
      .default('development'),
  },

  client: {
    NEXT_PUBLIC_TMDB_API_BASE_URL: z.string().url(),
    NEXT_PUBLIC_TMDB_IMAGE_URL: z.string().url(),
    NEXT_PUBLIC_TMDB_API_KEY: z.string(),
  },

  runtimeEnv: {
    NODE_ENV: process.env.NODE_ENV,
    NEXT_PUBLIC_TMDB_API_BASE_URL: process.env.NEXT_PUBLIC_TMDB_API_BASE_URL,
    NEXT_PUBLIC_TMDB_IMAGE_URL: process.env.NEXT_PUBLIC_TMDB_IMAGE_URL,
    NEXT_PUBLIC_TMDB_API_KEY: process.env.NEXT_PUBLIC_TMDB_API_KEY,
  },

  skipValidation: !!process.env.SKIP_ENV_VALIDATION,

  emptyStringAsUndefined: true,

  // Called when the schema validation fails.
  onValidationError: (error) => {
    console.error(
      '❌ Invalid environment variables:',
      error.flatten().fieldErrors
    );
    process.exit(1);
  },
});
