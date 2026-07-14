export interface Recuperador {
  id: string;
  name: string;
  lastName: string;
  dni?: string;
  cuil?: string;
  birthdate?: string;
  address?: string;
  phone?: string;
  email?: string;
  account?: string;
  route?: string;
  program?: string;
  active: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface RecuperadoresPage {
  data: Recuperador[];
  total: number;
  totalPages: number;
  page: number;
  limit: number;
}

export interface RecuperadoresQuery {
  page: number;
  limit: number;
  search?: string;
  active?: boolean;
}

export interface CreateRecuperadorPayload {
  name: string;
  lastName: string;
  dni?: string;
  cuil?: string;
  birthdate?: string;
  address?: string;
  phone?: string;
  email?: string;
  account?: string;
  route?: string;
  program?: string;
}

export interface UpdateRecuperadorPayload {
  name?: string;
  lastName?: string;
  dni?: string;
  cuil?: string;
  birthdate?: string;
  address?: string;
  phone?: string;
  email?: string;
  account?: string;
  route?: string;
  program?: string;
}
