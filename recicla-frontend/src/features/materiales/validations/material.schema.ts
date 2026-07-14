import { z } from "zod";

export const materialFormSchema = z.object({
  name: z.string().trim().min(1, "El nombre es obligatorio"),

  currentPrice: z.number().nonnegative("El precio no puede ser negativo"),
});

export type MaterialFormValues = z.infer<typeof materialFormSchema>;
