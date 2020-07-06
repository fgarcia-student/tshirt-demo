export class Asset {
  constructor(data: Partial<Asset>) {
    this.id = data?.id ?? "0";
    this.title = data?.title ?? "";
    this.description = data?.description ?? "";
    this.fileUrl = data?.fileUrl ?? "";
    this.fileName = data?.fileName ?? "";
    this.contentType = data?.contentType ?? "";
    this.imgWidth = data?.imgWidth ?? 0;
    this.imgHeight = data?.imgHeight ?? 0;
    this.imgSize = data?.imgSize ?? 0;
  }
  public id: string;
  public title: string;
  public description: string;
  public fileUrl: string;
  public fileName: string;
  public contentType: string;
  public imgWidth: number;
  public imgHeight: number;
  public imgSize: number;
}