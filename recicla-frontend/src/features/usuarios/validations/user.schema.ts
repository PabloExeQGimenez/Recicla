import { z } from "zod";

export const userFormSchema = z.object({
  name: z.string().trim().min(1, "El nombre es requerido"),
  lastName: z.string().trim().min(1, "El apellido es requerido"),
  dni: z.string().trim().optional(),
  email: z.string().trim().email("Email inválido"),
  password: z.string().min(6, "La contraseña debe tener al menos 6 caracteres"),
  role: z.enum(["ADMIN", "OPERADOR"]),
});

export type UserFormValues = z.infer<typeof userFormSchema>;
