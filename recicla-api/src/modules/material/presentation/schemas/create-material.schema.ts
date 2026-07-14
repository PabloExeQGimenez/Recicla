import { z } from 'zod';

export const createMaterialSchema = z.object({
  name: z.string().trim().min(1, 'El nombre del material no puede estar vacio'),
  currentPrice: z.coerce.number().nonnegative(),
});

export type CreateMaterialDTO = z.infer<typeof createMaterialSchema>;
