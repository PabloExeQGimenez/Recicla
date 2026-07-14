export interface Material {
  id: string;
  name: string;
  currentPrice: number;
  active: boolean;
}

export interface CreateMaterialPayload {
  name: string;
  currentPrice: number;
}

export interface ChangeCurrentPricePayload {
  currentPrice: number;
}
