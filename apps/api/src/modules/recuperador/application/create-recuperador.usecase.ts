import { ConflictException, Inject, Injectable, Logger } from '@nestjs/common';
import { Recuperador } from '../domain/recuperador.entity';
import {
  RECUPERADOR_REPOSITORY,
  type RecuperadorRepository,
} from '../domain/recuperador.repository';
import type { CreateRecuperadorDTO } from '../presentation/schemas/create-recuperador.schema';

@Injectable()
export class CreateRecuperadorUseCase {
  private readonly logger = new Logger(CreateRecuperadorUseCase.name);

  constructor(
    @Inject(RECUPERADOR_REPOSITORY)
    private readonly recuperadorRepository: RecuperadorRepository,
  ) {}

  async execute(data: CreateRecuperadorDTO): Promise<Recuperador> {
    if (data.dni) {
      const existing = await this.recuperadorRepository.findByDni(data.dni);

      if (existing) {
        throw new ConflictException('Ya existe un recuperador con ese dni');
      }
    }

    const recuperador = Recuperador.create(data);

    await this.recuperadorRepository.save(recuperador);

    this.logger.log(
      `Recuperador creado: ${data.name} ${data.lastName} (DNI: ${data.dni})`,
    );

    return recuperador;
  }
}
