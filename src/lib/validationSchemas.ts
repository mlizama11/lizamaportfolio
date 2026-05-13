import { z } from 'zod';

export const contactFormSchema = z.object({
  firstName: z.string().min(1, 'First name is required').max(50),
  lastName: z.string().min(1, 'Last name is required').max(50),
  companyName: z.string().max(100).optional().or(z.literal('')),
  email: z.string().email('Invalid email address'),
  message: z
    .string()
    .min(10, 'Message must be at least 10 characters')
    .max(5000),
  altcha: z.string().min(1, 'CAPTCHA verification is required')
});

export type ContactFormInput = z.infer<typeof contactFormSchema>;

export const altchaChallengeSchema = z.object({
  algorithm: z.string(),
  challenge: z.string(),
  difficulty: z.number(),
  salt: z.string(),
  signature: z.string()
});

export type AltchaChallengeType = z.infer<typeof altchaChallengeSchema>;
