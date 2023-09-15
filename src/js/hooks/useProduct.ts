import { useContext } from "react";
import {
  ProductStateContext,
  ProductDispatchContext,
} from "../context/Product";

export const useProduct = () => {
  const state = useContext(ProductStateContext);
  const dispatch = useContext(ProductDispatchContext);

  if (!state) {
    throw new Error("useProduct must be used within a ProductContextProvider");
  }

  const { product, selectedItem, loading, selectedQuantity, buyboxIsOpen } =
    state;

  return {
    product,
    selectedItem,
    selectedQuantity,
    loading,
    buyboxIsOpen,
    dispatch,
  };
};
