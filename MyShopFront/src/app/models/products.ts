export class Product {
  constructor(
    public id: number,
    public shop_id: number,
    public name: string,
    public description: string,
    public stock: number
  ) {}
}
