export type RecuperadorRefDTO = {
  id: string;
  name: string;
  lastName: string;
};

export type MaterialRefDTO = {
  id: string;
  name: string;
};

export type PesajeItemResponseDTO = {
  id: string;
  materialId: string;
  material: MaterialRefDTO;
  weight: number;
  pricePerKgAtMoment: number;
  subtotal: number;
};

export type PesajeResponseDTO = {
  id: string;
  recuperadorId: string;
  recuperador: RecuperadorRefDTO;
  status: string;
  totalAmount: number;
  items: PesajeItemResponseDTO[];
  date: Date;
  createdAt: Date;
  updatedAt: Date;
};
