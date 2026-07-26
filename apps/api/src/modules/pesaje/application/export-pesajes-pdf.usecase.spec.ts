import { ExportPesajesPdfUseCase } from './export-pesajes-pdf.usecase';
import { MaterialPrice } from "src/modules/material/domain/material-price.vo";
import { PesajeRepository } from '../domain/pesaje.repository';
import { MaterialPrice } from "src/modules/material/domain/material-price.vo";
import { PdfExporter } from '../domain/pdf-exporter';
import { MaterialPrice } from "src/modules/material/domain/material-price.vo";
import { Pesaje } from '../domain/pesaje.entity';
import { MaterialPrice } from "src/modules/material/domain/material-price.vo";
import { PesajeStatus } from '../domain/pesaje-status.enum';
import { MaterialPrice } from "src/modules/material/domain/material-price.vo";
import { PesajeItem } from '../domain/pesaje-item.vo';
import { MaterialPrice } from "src/modules/material/domain/material-price.vo";

describe('ExportPesajesPdfUseCase', () => {
  let useCase: ExportPesajesPdfUseCase;
  let mockPesajeRepo: jest.Mocked<PesajeRepository>;
  let mockExporter: jest.Mocked<PdfExporter>;

  beforeEach(() => {
    mockPesajeRepo = { findAll: jest.fn() } as any;
    mockExporter = { generate: jest.fn() };
    useCase = new ExportPesajesPdfUseCase(mockPesajeRepo, mockExporter);
  });

  it('debería buscar todos los pesajes y generar el pdf', async () => {
    const pesaje = Pesaje.reconstitute({
      id: 'p-1',
      recuperadorId: 'rec-1',
      status: PesajeStatus.PENDING,
      items: [
        new PesajeItem({
          materialId: 'mat-1',
          weight: 10,
          pricePerKgAtMoment: MaterialPrice.create(2),
          material: { id: 'mat-1', name: 'Plástico' },
        }),
      ],
      date: new Date('2026-01-15'),
      createdAt: new Date('2026-01-15'),
      updatedAt: new Date('2026-01-15'),
      recuperador: {
        id: 'rec-1',
        name: 'María',
        lastName: 'García',
        dni: '87654321',
      },
    });

    mockPesajeRepo.findAll.mockResolvedValue([pesaje]);
    mockExporter.generate.mockResolvedValue(Buffer.from('pdf test'));

    const result = await useCase.execute({});

    expect(result).toBeInstanceOf(Buffer);
    expect(mockExporter.generate).toHaveBeenCalledWith(
      expect.arrayContaining([
        expect.objectContaining({
          recuperador: 'María García',
          material: 'Plástico',
          kg: 10,
        }),
      ]),
    );
  });
});
