type RecuperadorProps = {
  id: string;
  name: string;
  lastName: string;
  active: boolean;
  createdAt: Date;
  updatedAt: Date;
  dni?: string;
  cuil?: string;
  birthdate?: Date;
  address?: string;
  phone?: string;
  email?: string;
  account?: string;
  route?: string;
  program?: string;
};

export type UpdateRecuperadorProps = {
  name?: string;
  lastName?: string;
  dni?: string;
  cuil?: string;
  birthdate?: Date;
  address?: string;
  phone?: string;
  email?: string;
  account?: string;
  route?: string;
  program?: string;
};

type RecuperadorCreationProps = {
  name: string;
  lastName: string;
  dni?: string;
  cuil?: string;
  birthdate?: Date;
  address?: string;
  phone?: string;
  email?: string;
  account?: string;
  route?: string;
  program?: string;
};

export class Recuperador {
  private constructor(private props: RecuperadorProps) {}

  static create(props: RecuperadorCreationProps): Recuperador {
    if (!props.name.trim()) {
      throw new Error('Nombre obligatorio');
    }

    if (!props.lastName.trim()) {
      throw new Error('Apellido obligatorio');
    }

    return new Recuperador({
      id: crypto.randomUUID(),
      name: props.name,
      lastName: props.lastName,
      active: true,
      createdAt: new Date(),
      updatedAt: new Date(),
      dni: props.dni,
      cuil: props.cuil,
      birthdate: props.birthdate,
      address: props.address,
      phone: props.phone,
      email: props.email,
      account: props.account,
      route: props.route,
      program: props.program,
    });
  }

  static reconstitute(props: RecuperadorProps): Recuperador {
    return new Recuperador(props);
  }

  update(data: UpdateRecuperadorProps) {
    if (data.name !== undefined) {
      this.props.name = data.name;
    }
    if (data.lastName !== undefined) {
      this.props.lastName = data.lastName;
    }
    if (data.dni !== undefined) {
      this.props.dni = data.dni;
    }
    if (data.cuil !== undefined) {
      this.props.cuil = data.cuil;
    }
    if (data.birthdate !== undefined) {
      this.props.birthdate = data.birthdate;
    }
    if (data.address !== undefined) {
      this.props.address = data.address;
    }
    if (data.phone !== undefined) {
      this.props.phone = data.phone;
    }
    if (data.email !== undefined) {
      this.props.email = data.email;
    }
    if (data.account !== undefined) {
      this.props.account = data.account;
    }
    if (data.route !== undefined) {
      this.props.route = data.route;
    }
    if (data.program !== undefined) {
      this.props.program = data.program;
    }
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
    if (!this.props.active) {
      return;
    }
    this.props.active = false;
    this.props.updatedAt = new Date();
  }

  get id() {
    return this.props.id;
  }

  get name() {
    return this.props.name;
  }

  get lastName() {
    return this.props.lastName;
  }

  get dni() {
    return this.props.dni;
  }

  get cuil() {
    return this.props.cuil;
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

  get birthdate() {
    return this.props.birthdate;
  }

  get phone() {
    return this.props.phone;
  }

  get email() {
    return this.props.email;
  }

  get address() {
    return this.props.address;
  }

  get account() {
    return this.props.account;
  }

  get route() {
    return this.props.route;
  }

  get program() {
    return this.props.program;
  }
}
