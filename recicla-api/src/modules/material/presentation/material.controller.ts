import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  Patch,
  UseGuards,
} from '@nestjs/common';
import { ZodValidationPipe } from 'src/shared/pipes/zod-validation.pipe';
import { CreateMaterialUseCase } from '../application/create-material.usecase';
import { GetMaterialByIdUseCase } from '../application/get-material-by-id.usecase';
import { GetMaterialesUseCase } from '../application/get-materiales.usecase';
import {
  type CreateMaterialDTO,
  createMaterialSchema,
} from './schemas/create-material.schema';
import { MaterialResponseDTO } from './dtos/material-response.dto';
import { MaterialResponseMapper } from './mappers/material-response.mapper';
import { IdSchema, type IdDTO } from 'src/shared/validation/id.schema';
import {
  type ActiveDTO,
  ActiveSchema,
} from 'src/shared/validation/active.schema';
import { ChangeMaterialPriceUseCase } from '../application/change-material-price.usecase';
import {
  type ChangeMaterialPriceDTO,
  ChangeMaterialPriceSchema,
} from './schemas/change-material-price.schema';
import { ActivateMaterialUseCase } from '../application/activate-material.usecase';
import { DeactivateMaterialUseCase } from '../application/deactivate-material.usecase';
import { Roles } from '../../auth/infrastructure/decorators/roles.decorator';
import { RolesGuard } from '../../auth/infrastructure/guards/roles.guard';

@Controller('materiales')
export class MaterialController {
  constructor(
    private readonly createMaterialUseCase: CreateMaterialUseCase,
    private readonly getMaterialByIdUseCase: GetMaterialByIdUseCase,
    private readonly getMaterialesUseCase: GetMaterialesUseCase,
    private readonly changeMaterialPriceUseCase: ChangeMaterialPriceUseCase,
    private readonly activateMaterialUseCase: ActivateMaterialUseCase,
    private readonly deactivateMaterialUseCase: DeactivateMaterialUseCase,
  ) {}

  @Post()
  @UseGuards(RolesGuard)
  @Roles('ADMIN')
  async create(
    @Body(new ZodValidationPipe(createMaterialSchema))
    body: CreateMaterialDTO,
  ): Promise<MaterialResponseDTO> {
    const material = await this.createMaterialUseCase.execute(body);
    return MaterialResponseMapper.toResponse(material);
  }

  @Get(':id')
  async findById(
    @Param(new ZodValidationPipe(IdSchema))
    param: IdDTO,
  ): Promise<MaterialResponseDTO> {
    const material = await this.getMaterialByIdUseCase.execute(param.id);
    return MaterialResponseMapper.toResponse(material);
  }

  @Get()
  async findAll(
    @Query(new ZodValidationPipe(ActiveSchema))
    query: ActiveDTO,
  ): Promise<MaterialResponseDTO[]> {
    const materiales = await this.getMaterialesUseCase.execute(query.active);
    return materiales.map(MaterialResponseMapper.toResponse);
  }

  @Patch(':id/price')
  @UseGuards(RolesGuard)
  @Roles('ADMIN')
  async changePrice(
    @Param(new ZodValidationPipe(IdSchema))
    param: IdDTO,
    @Body(new ZodValidationPipe(ChangeMaterialPriceSchema))
    body: ChangeMaterialPriceDTO,
  ): Promise<MaterialResponseDTO> {
    const material = await this.changeMaterialPriceUseCase.execute(
      param.id,
      body,
    );
    return MaterialResponseMapper.toResponse(material);
  }

  @Patch(':id/activate')
  @UseGuards(RolesGuard)
  @Roles('ADMIN')
  async activate(
    @Param(new ZodValidationPipe(IdSchema))
    param: IdDTO,
  ): Promise<MaterialResponseDTO> {
    const material = await this.activateMaterialUseCase.execute(param.id);
    return MaterialResponseMapper.toResponse(material);
  }

  @Patch(':id/deactivate')
  @UseGuards(RolesGuard)
  @Roles('ADMIN')
  async deactivate(
    @Param(new ZodValidationPipe(IdSchema))
    param: IdDTO,
  ): Promise<MaterialResponseDTO> {
    const material = await this.deactivateMaterialUseCase.execute(param.id);
    return MaterialResponseMapper.toResponse(material);
  }
}
