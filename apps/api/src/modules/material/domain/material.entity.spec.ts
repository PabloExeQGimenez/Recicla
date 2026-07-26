import { Material } from './material.entity';
import { MaterialPrice } from './material-price.vo';

describe('Material', () => {
  const now = new Date('2026-01-01T00:00:00.000Z');

  const defaultCreationProps = {
    name: 'Cartón',
    currentPrice: MaterialPrice.create(10),
  };

  const defaultReconstituteProps = {
    id: 'mat-1',
    name: 'Cartón',
    currentPrice: MaterialPrice.create(10),
    active: true,
    createdAt: now,
    updatedAt: now,
  };

  it('Material válido', () => {
    const material = Material.create(defaultCreationProps);

    expect(material.id).toBeDefined();
    expect(material.name).toBe('Cartón');
    expect(material.currentPrice.value).toBe(10);
    expect(material.active).toBe(true);
  });

  describe('changePrice', () => {
    it('cambio de precio', () => {
      const material = Material.reconstitute(defaultReconstituteProps);
      material.changePrice(MaterialPrice.create(20));

      expect(material.currentPrice.value).toBe(20);
    });
  });

  describe('activate', () => {
    it('activar el material', () => {
      const material = Material.reconstitute({ ...defaultReconstituteProps, active: false });
      material.activate();
      expect(material.active).toBe(true);
    });
  });

  describe('deactivate', () => {
    it('desactivar material', () => {
      const material = Material.reconstitute(defaultReconstituteProps);
      material.deactivate();
      expect(material.active).toBe(false);
    });
  });
});
