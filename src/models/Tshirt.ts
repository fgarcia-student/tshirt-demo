export class Tshirt {
  constructor(data: Partial<Tshirt>) {
    this.id = data?.id ?? 0;
    this.name = data?.name ?? "";
    this.formatted_price = data?.formatted_price ?? "";
    this.price = data?.price ?? 0;
    this.img_main = data?.img_main ?? "";
    this.img_alt = data?.img_alt ?? [];
    this.description = data?.description ?? "";
    this.sizes = data?.sizes ?? [];
    this.quantity = data?.quantity ?? 0;
  }
  public id: number;
  public name: string;
  public formatted_price: string;
  public price: number;
  public img_main: string;
  public img_alt: string[];
  public description: string;
  public sizes: string[];
  public quantity: number
}