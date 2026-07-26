import { PesajeStatus } from './pesaje-status.enum';
import { PesajeItem } from './pesaje-item.vo';

export type RecuperadorRef = {
  id: string;
  name: string;
  lastName: string;
  dni?: string;
};

export type PesajeProps = {
  id: string;
  recuperadorId: string;
  status: PesajeStatus;
  items: PesajeItem[];
  solicitudPagoId?: string;
  date: Date;
  createdAt: Date;
  updatedAt: Date;
  recuperador?: RecuperadorRef;
};

export type PesajeCreationProps = {
  recuperadorId: string;
  items: PesajeItem[];
  date: Date;
  recuperador?: RecuperadorRef;
};

export class Pesaje {
  private constructor(private props: PesajeProps) {}

  static create(props: PesajeCreationProps): Pesaje {
    if (!props.recuperadorId) {
      throw new Error('El recuperador es obligatorio');
    }

    if (props.items.length === 0) {
      throw new Error('El pesaje debe contener items');
    }

    return new Pesaje({
      id: crypto.randomUUID(),
      recuperadorId: props.recuperadorId,
      status: PesajeStatus.PENDING,
      items: props.items,
      date: props.date,
      createdAt: new Date(),
      updatedAt: new Date(),
      recuperador: props.recuperador,
    });
  }

  static reconstitute(props: PesajeProps): Pesaje {
    return new Pesaje(props);
  }

  get id(): string {
    return this.props.id;
  }

  get recuperadorId(): string {
    return this.props.recuperadorId;
  }

  get status(): PesajeStatus {
    return this.props.status;
  }

  get items(): PesajeItem[] {
    return this.props.items;
  }

  get solicitudPagoId(): string | undefined {
    return this.props.solicitudPagoId;
  }

  get date(): Date {
    return this.props.date;
  }

  get createdAt(): Date {
    return this.props.createdAt;
  }

  get updatedAt(): Date {
    return this.props.updatedAt;
  }

  get recuperador(): RecuperadorRef | undefined {
    return this.props.recuperador;
  }

  get totalAmount(): number {
    return this.props.items.reduce((total, item) => total + item.subtotal, 0);
  }

  markAsPaymentRequested() {
    this.props.status = PesajeStatus.PAYMENT_REQUESTED;
    this.props.updatedAt = new Date();
  }

  assignToPaymentRequest(solicitudPagoId: string) {
    if (this.props.status !== PesajeStatus.PENDING) {
      throw new Error(
        'Solo un pesaje pendiente puede asociarse a una solicitud de pago',
      );
    }
    this.props.solicitudPagoId = solicitudPagoId;
    this.markAsPaymentRequested();
  }

  markAsPaid() {
    if (this.props.status !== PesajeStatus.PAYMENT_REQUESTED) {
      throw new Error('Solo un pesaje con pago requerido puede ser pagado');
    }
    this.props.status = PesajeStatus.PAID;
    this.props.updatedAt = new Date();
  }

  canBeDeleted() {
    return this.props.status === PesajeStatus.PENDING;
  }
}
