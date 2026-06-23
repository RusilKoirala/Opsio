import {z} from 'zod';

const EnvSchema = z.object({
    AUTH_SCECRET : z.string().min(1),
    AUTH_GITHUB_ID: z.string().min(1),
    AUTH_GITHUB_SECRET: z.string().min(1),
    MONGODB_URI: z.string().url().or(z.string().startsWith('mongodb')),
    DATABASE_NAME: z.string().min(1),
    RESEND_API_KEY: z.string().min(1).optional(),
    NODE_ENV: z
    .enum(['development', 'test', 'production'])
    .default('development'),
})

const IS_CI = process.env.CI === "true";


