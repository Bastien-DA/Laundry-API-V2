import { z } from 'zod';

export const envSchema = z.object({
    NODE_ENV: z.string().default('development'),
    PORT: z.coerce.number().default(3000),
    JWT_SECRET: z.string().min(20),
    JWT_EXPIRES_IN: z.string().default('3600s'),
});

export type EnvVars = z.infer<typeof envSchema>;

export function validateEnv(config: Record<string, unknown>) {
    const parsed = envSchema.safeParse(config);
    if (!parsed.success) {
        // eslint-disable-next-line no-console
        console.error(parsed.error);
        throw new Error('Invalid environment variables');
    }
    return parsed.data;
}
