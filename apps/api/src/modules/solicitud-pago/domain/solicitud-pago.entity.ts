import { Pesaje } from '../../pesaje/domain/pesaje.entity';
import { SolicitudPagoStatus } from './solicitud-pago-status.enum';

export type SolicitudPagoProps = {
  id: string;
  from: Date;
  to: Date;
  status: SolicitudPagoStatus;
  createdAt: Date;
  pesajes?: Pesaje[];
};

export type SolicitudPagoCreationProps = {
  from: Date;
  to: Date;
};

export class SolicitudPago {
  private constructor(private props: SolicitudPagoProps) {}

  static create(props: SolicitudPagoCreationProps): SolicitudPago {
    if (props.from > props.to) {
      throw new Error('Rango de fechas inválido');
    }

    return new SolicitudPago({
      id: crypto.randomUUID(),
      from: props.from,
      to: props.to,
      status: SolicitudPagoStatus.PAYMENT_REQUESTED,
      createdAt: new Date(),
    });
  }

  static reconstitute(props: SolicitudPagoProps): SolicitudPago {
    return new SolicitudPago(props);
  }

  get id(): string {
    return this.props.id;
  }

  get from(): Date {
    return this.props.from;
  }

  get to(): Date {
    return this.props.to;
  }

  get status(): SolicitudPagoStatus {
    return this.props.status;
  }

  get createdAt(): Date {
    return this.props.createdAt;
  }

  get pesajes(): Pesaje[] {
    return this.props.pesajes ?? [];
  }

  markAsPaid(): void {
    if (this.props.status === SolicitudPagoStatus.PAID) {
      throw new Error('La solicitud ya fue pagada');
    }
    this.props.status = SolicitudPagoStatus.PAID;
  }
}
