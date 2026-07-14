import { Pesaje } from '../../domain/pesaje.entity';
import { PesajeResponseDTO } from '../dtos/pesaje-response.dto';

export class PesajeResponseMapper {
  static toResponse(pesaje: Pesaje): PesajeResponseDTO {
    return {
      id: pesaje.id,
      recuperadorId: pesaje.recuperadorId,
      recuperador: {
        id: pesaje.recuperador?.id ?? pesaje.recuperadorId,
        name: pesaje.recuperador?.name ?? '',
        lastName: pesaje.recuperador?.lastName ?? '',
      },
      status: pesaje.status,
      totalAmount: pesaje.totalAmount,
      items: pesaje.items.map((item) => ({
        id: item.id!,
        materialId: item.materialId,
        material: {
          id: item.material?.id ?? item.materialId,
          name: item.material?.name ?? '',
        },
        weight: item.weight,
        pricePerKgAtMoment: item.pricePerKgAtMoment,
        subtotal: item.subtotal,
      })),
      date: pesaje.date,
      createdAt: pesaje.createdAt,
      updatedAt: pesaje.updatedAt,
    };
  }
}
