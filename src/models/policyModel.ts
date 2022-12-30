import { z } from 'zod';

export const clientSchema = z.object({
    id: z.string().optional(),
    amountInsured: z.number(),
    email: z.string(),
    inceptionDate: z.string(),
    installPayment: z.boolean(),
    clientId: z.string(),
});

type Client = z.infer<typeof clientSchema>;

export default Client;
