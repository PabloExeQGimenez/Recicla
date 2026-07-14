export type CreateSolicitudPagoDTO = {
  from: string;
  to: string;
  excludedPesajeIds?: string[];
};

export type SolicitudPagoStatus = "PAYMENT_REQUESTED" | "PAID";

export type SolicitudPago = {
  id: string;
  from: string;
  to: string;
  status: SolicitudPagoStatus;
  createdAt: string;
};

export type PesajePreviewItem = {
  id: string;
  itemId: string;
  recuperador: { id: string; nombre: string; apellido: string; dni?: string };
  material: { id: string; nombre: string };
  cantidad: number;
  precio: number;
  monto: number;
  fecha: string;
};

export type SolicitudPagoPreviewResumen = {
  cantidadRecuperadores: number;
  cantidadItems: number;
  totalAPagar: number;
};

export type SolicitudPagoPreview = {
  pesajes: PesajePreviewItem[];
  resumen: SolicitudPagoPreviewResumen;
};

export type SolicitudPagoListItem = {
  id: string;
  from: string;
  to: string;
  status: SolicitudPagoStatus;
  createdAt: string;
  totalAmount: number;
  itemsCount: number;
};

export type PaginatedResponse<T> = {
  data: T[];
  page: number;
  limit: number;
  total: number;
  totalPages: number;
};

export type PesajeItemDetail = {
  id: string;
  materialId: string;
  material: { id: string; name: string };
  weight: number;
  pricePerKgAtMoment: number;
  subtotal: number;
};

export type PesajeDetail = {
  id: string;
  recuperadorId: string;
  recuperador: { id: string; name: string; lastName: string; dni?: string };
  status: string;
  totalAmount: number;
  items: PesajeItemDetail[];
  date: string;
  createdAt: string;
  updatedAt: string;
};

export type SolicitudPagoDetail = {
  id: string;
  from: string;
  to: string;
  status: SolicitudPagoStatus;
  createdAt: string;
  pesajes: PesajeDetail[];
};
