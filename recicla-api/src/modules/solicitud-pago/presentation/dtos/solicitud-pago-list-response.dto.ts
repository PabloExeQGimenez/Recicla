export type SolicitudPagoListItemResponseDTO = {
  data: {
    id: string;
    from: Date;
    to: Date;
    status: string;
    createdAt: Date;
    totalAmount: number;
    itemsCount: number;
  }[];
  page: number;
  limit: number;
  total: number;
  totalPages: number;
};
