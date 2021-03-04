import { Product } from './products';

export interface ShopI {
  id: string;
  name: string;
  siren: string;
  capacity: string;
  product: Product[];
}
export class Shop {
  constructor(
    public id: number,
    public name: string,
    public siren: string,
    public capacity: number,
    public product?: Product[]
  ) {}
}
