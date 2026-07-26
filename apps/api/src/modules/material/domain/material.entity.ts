import { MaterialPrice } from "./material-price.vo";

type MaterialProps = {
  id: string;
  name: string;
  currentPrice: MaterialPrice;
  active: boolean;
  createdAt: Date;
  updatedAt: Date;
};

type MaterialCreationProps = {
  name: string;
  currentPrice: MaterialPrice;
}

export class Material {
  private constructor(private props: MaterialProps) {}

  static create(props: MaterialCreationProps): Material {
    if (!props.name.trim()) {
      throw new Error('Nombre obligatorio');
    }

    return new Material({
      id: crypto.randomUUID(),
      name: props.name,
      currentPrice: props.currentPrice,
      active: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    })
  }

  static reconstitute(props: MaterialProps): Material {
    return new Material(props);
  }

  changePrice(price: MaterialPrice) {
    this.props.currentPrice = price;
    this.props.updatedAt = new Date();
  }

  activate() {
    if (this.props.active) {
      return;
    }
    this.props.active = true;
    this.props.updatedAt = new Date();
  }

  deactivate() {
    this.props.active = false;
    this.props.updatedAt = new Date();
  }

  get id() {
    return this.props.id;
  }
  get name() {
    return this.props.name;
  }
  get currentPrice() {
    return this.props.currentPrice;
  }
  get active() {
    return this.props.active;
  }
  get createdAt() {
    return this.props.createdAt;
  }
  get updatedAt() {
    return this.props.updatedAt;
  }
}
