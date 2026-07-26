import { Material as PrismaMaterial, Prisma } from '@prisma/client';
import { Material } from '../../domain/material.entity';
import { MaterialPrice } from '../../domain/material-price.vo';

export class MaterialPrismaMapper {
  static toDomain(material: PrismaMaterial): Material {
    return Material.reconstitute({
      id: material.id,
      name: material.name,
      currentPrice: MaterialPrice.create(material.currentPrice.toNumber()),
      active: material.active,
      createdAt: material.createdAt,
      updatedAt: material.updatedAt,
    });
  }

  static toPersistence(material: Material) {
    return {
      id: material.id,
      name: material.name,
      currentPrice: new Prisma.Decimal(material.currentPrice.value),
      active: material.active,
      createdAt: material.createdAt,
      updatedAt: material.updatedAt,
    };
  }
}
