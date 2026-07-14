import { z } from 'zod';

export const ChangeMaterialPriceSchema = z.object({
  currentPrice: z.coerce.number().min(1),
});

export type ChangeMaterialPriceDTO = z.infer<typeof ChangeMaterialPriceSchema>;
