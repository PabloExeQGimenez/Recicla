import { z } from 'zod';

const envSchema = z.object({
  DATABASE_URL: z.string().min(1, 'DATABASE_URL es requerida'),
  JWT_SECRET: z.string().min(8, 'JWT_SECRET debe tener al menos 8 caracteres'),
  JWT_EXPIRES_IN: z.string().min(1, 'JWT_EXPIRES_IN es requerida'),
  PORT: z.coerce.number().int().positive('PORT debe ser un número positivo'),
  ADMIN_EMAIL: z.email('ADMIN_EMAIL debe ser un email válido'),
  ADMIN_PASSWORD: z
    .string()
    .min(8, 'ADMIN_PASSWORD debe tener al menos 8 caracteres'),
  CORS_ORIGIN: z.string().optional().default('http://localhost:5173'),
});

export type Env = z.infer<typeof envSchema>;

export function validate(config: Record<string, unknown>): Env {
  return envSchema.parse(config);
}
