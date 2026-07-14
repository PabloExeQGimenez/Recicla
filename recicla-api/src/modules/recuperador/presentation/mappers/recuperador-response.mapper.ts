import { Recuperador } from '../../domain/recuperador.entity';
import { RecuperadorResponseDTO } from '../dtos/recuperador-response.dto';

export class RecuperadorResponseMapper {
  static toResponse(recuperador: Recuperador): RecuperadorResponseDTO {
    return {
      id: recuperador.id,
      name: recuperador.name,
      lastName: recuperador.lastName,
      dni: recuperador.dni,
      cuil: recuperador.cuil,
      birthdate: recuperador.birthdate,
      address: recuperador.address,
      phone: recuperador.phone,
      email: recuperador.email,
      account: recuperador.account,
      route: recuperador.route,
      program: recuperador.program,
      active: recuperador.active,
      createdAt: recuperador.createdAt,
      updatedAt: recuperador.updatedAt,
    };
  }
}
