import { IProduct, IProductItem } from "../../typings/product";

export type ProductContextState = {
  selectedItem: IProductItem | any;
  loading?: boolean;
  product: IProduct | any;
  selectedQuantity?: number;
  buyboxIsOpen?: boolean;
};
