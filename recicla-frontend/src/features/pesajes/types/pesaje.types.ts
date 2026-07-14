export type PesajePago = "pendiente" | "solicitado" | "pagado";

export type RecuperadorOption = {
  id: string;
  label: string;
  dni?: string | null;
};

export interface MaterialRefAPI {
  id: string;
  name: string;
}

export interface RecuperadorRefAPI {
  id: string;
  name: string;
  lastName: string;
}

export interface PesajeItemResponseDTO {
  id: string;
  materialId: string;
  material: MaterialRefAPI;
  weight: number;
  pricePerKgAtMoment: number;
  subtotal: number;
}

export interface PesajeAPIResponse {
  id: string;
  recuperadorId: string;
  recuperador: RecuperadorRefAPI;
  status: string;
  totalAmount: number;
  items: PesajeItemResponseDTO[];
  date: string;
  createdAt: string;
  updatedAt: string;
}

export interface MaterialRefDTO {
  id: string;
  nombre: string;
}

export interface RecuperadorRefDTO {
  id: string;
  nombre: string;
  apellido: string;
}

export interface PesajeDTO {
  id: string;
  itemId: string;
  recuperador: RecuperadorRefDTO;
  material: MaterialRefDTO;
  cantidad: number;
  precio: number;
  monto: number;
  fecha: string;
  pago: PesajePago;
}

export interface PesajeListMeta {
  pagina: number;
  total: number;
  totalItems: number;
  limite: number;
  paginasTotales: number;
}

export interface PesajeListResponseDTO {
  data: PesajeDTO[];
  meta: PesajeListMeta;
}

export interface PesajeQueryDTO {
  recuperadorId?: string;
  materialId?: string;
  pago?: PesajePago;
  fechaDesde?: string;
  fechaHasta?: string;
  pagina?: number;
  limite?: number;
}

export interface CreatePesajeItemDTO {
  materialId: string;
  weight: number;
}

export interface CreatePesajeDTO {
  recuperadorId: string;
  date: string;
  items: CreatePesajeItemDTO[];
}


