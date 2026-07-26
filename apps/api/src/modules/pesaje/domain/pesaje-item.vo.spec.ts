import { PesajeItem } from './pesaje-item.vo';
import { MaterialPrice } from 'src/modules/material/domain/material-price.vo';

describe('PesajeItem', () => {
  it('debería crear un item válido', () => {
    const item = new PesajeItem({
      materialId: 'mat-1',
      weight: 100,
      pricePerKgAtMoment: MaterialPrice.create(85),
    });

    expect(item.materialId).toBe('mat-1');
    expect(item.weight).toBe(100);
    expect(item.pricePerKgAtMoment).toBe(85);
  });

  it('debería calcular subtotal', () => {
    const item = new PesajeItem({
      materialId: 'mat-1',
      weight: 10,
      pricePerKgAtMoment: MaterialPrice.create(5),
    });

    expect(item.subtotal).toBe(50);
  });

  it('debería aceptar precio cero', () => {
    const item = new PesajeItem({
      materialId: 'mat-1',
      weight: 10,
      pricePerKgAtMoment: MaterialPrice.create(0),
    });
    expect(item.pricePerKgAtMoment).toBe(0);
    expect(item.subtotal).toBe(0);
  });

  describe('validaciones del constructor', () => {
    it('error si el peso es cero', () => {
      expect(() => {
        new PesajeItem({
          materialId: 'mat-1',
          weight: 0,
          pricePerKgAtMoment: MaterialPrice.create(15),
        });
      }).toThrow('El peso debe ser mayor a cero');
    });

    it('deberia lanzar error si el peso es negativo', () => {
      expect(() => {
        new PesajeItem({
          materialId: 'mat-1',
          weight: -1,
          pricePerKgAtMoment: MaterialPrice.create(5),
        });
      }).toThrow('El peso debe ser mayor a cero');
    });

    it('error si el precio es negativo', () => {
      expect(() => {
        new PesajeItem({
          materialId: 'mat-1',
          weight: 10,
          pricePerKgAtMoment: MaterialPrice.create(-1),
        });
      }).toThrow('El precio debe ser mayor a cero');
    });

    it('error si materialId está vacío', () => {
      expect(() => {
        new PesajeItem({
          materialId: '  ',
          weight: 10,
          pricePerKgAtMoment: MaterialPrice.create(5),
        });
      }).toThrow('El material es obligatorio');
    });
  });
});
