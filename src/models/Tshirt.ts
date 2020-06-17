export class Tshirt {
  constructor(data) {
    this.id = data?.id ?? 0;
    this.name = data?.name ?? "";
    this.price = data?.price ?? "";
    this.img_main = data?.img_main ?? "";
    this.img_alt = data?.img_alt ?? [];
    this.description = data?.description ?? "";
    this.sizes = data?.sizes ?? [];
    this.quantity = data?.quantity ?? 0;
  }
  public id: number;
  public name: string;
  public price: string;
  public img_main: string;
  public img_alt: string[];
  public description: string;
  public sizes: string[];
  public quantity: number
}