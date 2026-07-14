export type RecuperadorResponseDTO = {
  id: string;
  name: string;
  lastName: string;
  dni?: string;
  cuil?: string;
  birthdate?: Date;
  address?: string;
  phone?: string;
  email?: string;
  account?: string;
  route?: string;
  program?: string;
  active: boolean;
  createdAt: Date;
  updatedAt: Date;
};
