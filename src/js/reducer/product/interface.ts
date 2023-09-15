import { IProduct, IProductItem } from "../../typings/product";

export type Action =
  | { type: "SET_LOADING"; payload: boolean }
  | { type: "SET_PRODUCT"; payload: IProduct }
  | { type: "SET_SELECTED_ITEM"; payload: IProductItem }
  | { type: "SET_SELECTED_QUANTITY"; payload: number }
  | { type: "TOGGLE_BUYBOX" };
