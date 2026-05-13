import { z } from 'zod';

const envSchema = z.object({
  CONTENTFUL_SPACE_ID: z.string().min(1, 'CONTENTFUL_SPACE_ID is required'),
  CONTENTFUL_ACCESS_TOKEN: z.string().min(1, 'CONTENTFUL_ACCESS_TOKEN is required'),
  CONTENTFUL_PREVIEW_TOKEN: z.string().optional(),
  CONTENTFUL_MANAGEMENT_TOKEN: z.string().optional(),
  SMTP_HOST: z.string().min(1, 'SMTP_HOST is required'),
  EMAIL_PORT: z
    .string()
    .refine((val) => !isNaN(Number(val)), 'EMAIL_PORT must be a valid number'),
  AUTH_EMAIL: z.string().email('AUTH_EMAIL must be a valid email'),
  PASSWORD: z.string().min(1, 'PASSWORD is required'),
  REPLY_EMAIL: z.string().email('REPLY_EMAIL must be a valid email'),
  ALTCHA_HMAC_KEY: z.string().min(1, 'ALTCHA_HMAC_KEY is required'),
  NEXT_PUBLIC_SITE_URL: z
    .string()
    .url('NEXT_PUBLIC_SITE_URL must be a valid URL'),
  NEXT_PUBLIC_ALTCHA_API_URL: z.string().url().optional()
});

export type Env = z.infer<typeof envSchema>;

let cachedEnv: Env | null = null;

/**
 * Validates and returns environment variables.
 * During build time with dummy values, this may fail silently if called during static generation.
 * For API routes, ensure all required env vars are set in production.
 */
export function getEnv(): Env {
  if (cachedEnv) return cachedEnv;

  try {
    cachedEnv = envSchema.parse(process.env);
    return cachedEnv;
  } catch (error) {
    if (error instanceof z.ZodError) {
      const missingVars = error.issues
        .map((issue) => issue.path.join('.'))
        .join(', ');

      // Log error but don't throw during build
      if (process.env.NODE_ENV === 'production' && process.env.VERCEL === 'false') {
        throw new Error(
          `Missing or invalid environment variables: ${missingVars}`
        );
      }

      console.warn(
        `[ENV WARNING] Missing or invalid environment variables: ${missingVars}`
      );
      throw error;
    }
    throw error;
  }
}
