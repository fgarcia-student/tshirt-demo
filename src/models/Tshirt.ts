type PriceBySizeDictionary = {[key: string]: number};

export class Tshirt {
  constructor(data: Partial<Tshirt>) {
    this.id = data?.id ?? "0";
    this.name = data?.name ?? "";
    this.formattedPrice = data?.formattedPrice ?? "{price} USD";
    this.price = data?.price ?? 0;
    this.imgMain = data?.imgMain ?? "";
    this.imgAlt = data?.imgAlt ?? [];
    this.description = data?.description ?? "";
    this.sizes = data?.sizes ?? [];
    this.priceBySize = data?.priceBySize ?? {};
  }
  public id: string;
  public name: string;
  public formattedPrice: string;
  public price: number;
  public imgMain: string;
  public imgAlt: string[];
  public description: string;
  public sizes: string[];
  public priceBySize: PriceBySizeDictionary;
}