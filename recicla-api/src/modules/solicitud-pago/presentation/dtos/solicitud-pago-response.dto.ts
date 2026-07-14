import { PesajeResponseDTO } from 'src/modules/pesaje/presentation/dtos/pesaje-response.dto';

export type SolicitudPagoResponseDTO = {
  id: string;
  from: Date;
  to: Date;
  status: string;
  createdAt: Date;
  pesajes: PesajeResponseDTO[];
};
