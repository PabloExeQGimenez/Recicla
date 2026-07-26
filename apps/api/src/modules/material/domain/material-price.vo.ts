type MaterialPriceProps = {
  value: number;
};
export class MaterialPrice {
  private constructor(private props: MaterialPriceProps) {}

  static create(value: number): MaterialPrice {
    if (value < 0) {
      throw new Error('El precio debe ser mayor a cero');
    }

    return new MaterialPrice({ value });
  }

  get value() {
    return this.props.value;
  }
}
