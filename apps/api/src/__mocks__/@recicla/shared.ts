import { z } from 'zod';

// Schemas
export const createMaterialSchema = z.object({
  name: z.string(),
  currentPrice: z.number(),
});

export const changeMaterialPriceSchema = z.object({
  currentPrice: z.number(),
});

export const createRecuperadorSchema = z.object({
  name: z.string(),
  lastName: z.string(),
  dni: z.string().optional(),
  cuil: z.string().optional(),
  birthdate: z.string().optional(),
  email: z.string().optional(),
  phone: z.string().optional(),
  address: z.string().optional(),
  account: z.string().optional(),
  route: z.string().optional(),
  program: z.string().optional(),
});

export const updateRecuperadorSchema = z.object({
  name: z.string().optional(),
  lastName: z.string().optional(),
  dni: z.string().optional(),
  cuil: z.string().optional(),
  birthdate: z.string().optional(),
  email: z.string().optional(),
  phone: z.string().optional(),
  address: z.string().optional(),
  account: z.string().optional(),
  route: z.string().optional(),
  program: z.string().optional(),
});

export const createPesajeItemSchema = z.object({
  materialId: z.string(),
  weight: z.number(),
});

export const createPesajeSchema = z.object({
  recuperadorId: z.string(),
  items: z.array(createPesajeItemSchema),
  date: z.string().optional(),
});

export const loginSchema = z.object({
  email: z.string(),
  password: z.string(),
});

export const registerSchema = z.object({
  name: z.string(),
  lastName: z.string(),
  email: z.string(),
  password: z.string(),
  role: z.string().optional(),
  dni: z.string().optional(),
});

export const resetPasswordSchema = z.object({
  password: z.string(),
});

export const updateUserSchema = z.object({
  email: z.string(),
});

// Enums
export const PesajeStatus = {
  PENDING: 'PENDING',
  PAYMENT_REQUESTED: 'PAYMENT_REQUESTED',
  PAID: 'PAID',
};

export const SolicitudPagoStatus = {
  PAYMENT_REQUESTED: 'PAYMENT_REQUESTED',
  PAID: 'PAID',
};
