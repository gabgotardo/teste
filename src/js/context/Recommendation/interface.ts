import { IProduct, IProductItem } from "../../typings/product";

export interface IRecommendationContext {
  recommendationData: IRecommendationCatalog;
  isEmpty: boolean;
  cartItems: ICartItem[];
  setCartItems: (cartItems: ICartItem[]) => void;
  addToCart: (cartItem: ICartItem) => void;
  updateCartItems: (cartItem: ICartItem[]) => void;
  userData: IUserData;
  setUserData: (userData: IUserData) => void;
  sendRecommendedProducts: (userData: IUserData) => Promise<boolean>;
}

export interface ICartItem {
  product: IProduct;
  quantity: number;
  selectedItem: IProductItem;
}

export interface IRecommendationCatalog {
  bestSellers: IProduct[];
  elmexCollection: IProduct[];
  mainCatalog: IProduct[];
  mostSearched: IProduct[];
}

export interface IUserData {
  alreadyUsed: boolean;
  couponCode: string;
  dentistDocument: string;
  dentistName: string;
  dentistEmail: string;
  patientEmail: string;
  patientName: string;
  recommendCartItems: ICartItem[];
  recommendCartShippingData: any;
  recommendCartTotalizers: any[];
  recommendValue: number;
  urlCart: string;
}
