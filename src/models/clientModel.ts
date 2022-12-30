import { z } from 'zod';

export const clientSchema = z.object({
    id: z.string().optional(),
    name: z.string(),
    email: z.string(),
    role: z.string(),
    password: z.string(),
});

type Client = z.infer<typeof clientSchema>;

export default Client;
