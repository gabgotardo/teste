import { ProductContextState } from "../../context/Product/interface";
import { Action } from "./interface";

export const productReducer = (
  state: ProductContextState,
  action: Action
): ProductContextState => {
  switch (action.type) {
    case "SET_LOADING":
      return { ...state, loading: action.payload };
    case "SET_PRODUCT":
      return { ...state, product: action.payload };
    case "SET_SELECTED_ITEM":
      return { ...state, selectedItem: action.payload };
    case "SET_SELECTED_QUANTITY":
      return { ...state, selectedQuantity: action.payload };
    case "TOGGLE_BUYBOX":
      return { ...state, buyboxIsOpen: !state.buyboxIsOpen };
    default:
      return state;
  }
};
