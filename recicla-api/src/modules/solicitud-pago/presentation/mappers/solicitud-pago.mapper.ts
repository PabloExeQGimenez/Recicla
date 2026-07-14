import { SolicitudPago } from '../../domain/solicitud-pago.entity';
import { SolicitudPagoResponseDTO } from '../dtos/solicitud-pago-response.dto';
import { PesajeResponseMapper } from 'src/modules/pesaje/presentation/mappers/pesaje-response.mapper';

export class SolicitudPagoResponseMapper {
  static toResponse(solicitudPago: SolicitudPago): SolicitudPagoResponseDTO {
    return {
      id: solicitudPago.id,
      from: solicitudPago.from,
      to: solicitudPago.to,
      status: solicitudPago.status,
      createdAt: solicitudPago.createdAt,
      pesajes: solicitudPago.pesajes.map(PesajeResponseMapper.toResponse),
    };
  }
}
