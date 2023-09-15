import { IProduct } from "../../typings/product";
import { ICartItem } from "../Recommendation/interface";

export interface IGlobalsContextData {
  globalState: IGlobalState;
  setGlobalState: (state: IGlobalState) => void;
  toggleCart: (action: string) => void;
  isLoading: boolean;
  isMobile: boolean;
}

export interface IGlobalState {
  showBuyBox: boolean;
  deviceInfo: string;
  page: string;
  buyBoxContent: any;
  cartIsOpen: boolean;
}

export enum CartActionsType {
  OPEN_CART = "open",
  CLOSE_CART = "close",
}
