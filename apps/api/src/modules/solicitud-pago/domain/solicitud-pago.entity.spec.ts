import { SolicitudPago } from './solicitud-pago.entity';
import { SolicitudPagoStatus } from './solicitud-pago-status.enum';

describe('SolicitudPago', () => {
  const defaultProps = {
    id: 'sp-1',
    from: new Date('2026-01-01'),
    to: new Date('2026-01-31'),
    status: SolicitudPagoStatus.PAYMENT_REQUESTED,
    createdAt: new Date('2026-01-01'),
  };

  const creationProps = {
    from: new Date('2026-01-01'),
    to: new Date('2026-01-31'),
  };

  describe('constructor', () => {
    it('debería crear una solicitud válida', () => {
      const solicitud = SolicitudPago.reconstitute(defaultProps);

      expect(solicitud.id).toBe('sp-1');
      expect(solicitud.status).toBe(SolicitudPagoStatus.PAYMENT_REQUESTED);
    });

    it('debería crear solicitud sin pesajes', () => {
      const solicitud = SolicitudPago.reconstitute(defaultProps);

      expect(solicitud.pesajes).toEqual([]);
    });
  });

  describe('create', () => {
    it('debería crear una solicitud con valores por defecto', () => {
      const solicitud = SolicitudPago.create(creationProps);

      expect(solicitud.id).toBeDefined();
      expect(solicitud.from).toEqual(new Date('2026-01-01'));
      expect(solicitud.to).toEqual(new Date('2026-01-31'));
      expect(solicitud.status).toBe(SolicitudPagoStatus.PAYMENT_REQUESTED);
      expect(solicitud.pesajes).toEqual([]);
    });

    it('debería lanzar error si from > to', () => {
      expect(() => {
        SolicitudPago.create({
          from: new Date('2026-02-01'),
          to: new Date('2026-01-01'),
        });
      }).toThrow('Rango de fechas inválido');
    });
  });

  describe('markAsPaid', () => {
    it('debería marcar como pagada', () => {
      const solicitud = SolicitudPago.reconstitute({ ...defaultProps });
      solicitud.markAsPaid();

      expect(solicitud.status).toBe(SolicitudPagoStatus.PAID);
    });

    it('debería lanzar error si ya está pagada', () => {
      const solicitud = SolicitudPago.reconstitute({
        ...defaultProps,
        status: SolicitudPagoStatus.PAID,
      });

      expect(() => {
        solicitud.markAsPaid();
      }).toThrow('La solicitud ya fue pagada');
    });
  });
});
