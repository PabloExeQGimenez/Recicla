import { Material } from '../../domain/material.entity';
import { MaterialResponseDTO } from '../dtos/material-response.dto';

export class MaterialResponseMapper {
  static toResponse(material: Material): MaterialResponseDTO {
    return {
      id: material.id,
      name: material.name,
      currentPrice: material.currentPrice,
      active: material.active,
    };
  }
}
