import { Product } from './products';

export class Shop {
  constructor(
    public id: number,
    public name: string,
    public siren: string,
    public capacity: string,
    public product: Product[]
  ) {}
}
