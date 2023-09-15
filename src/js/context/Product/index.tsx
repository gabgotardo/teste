// ProductContext.tsx
import React, {
  createContext,
  useReducer,
  useContext,
  ReactNode,
  Dispatch,
  FC,
} from "react";
import { Action } from "../../reducer/product/interface";
import { productReducer } from "../../reducer/product/product.reducer";
import { ProductContextState } from "./interface";

type ProductProviderProps = {
  children: ReactNode;
  initialState: ProductContextState;
};

export const ProductStateContext = createContext<
  Partial<ProductContextState> | undefined
>(undefined);
export const ProductDispatchContext = createContext<
  Dispatch<Action> | undefined
>(undefined);

export const ProductContextProvider: React.FC<ProductProviderProps> = ({
  children,
  initialState,
}) => {
  const [state, dispatch] = useReducer(productReducer, {
    ...initialState,
    loading: true,
    selectedQuantity: 1,
    buyboxIsOpen: false,
  });

  return (
    <ProductStateContext.Provider value={state}>
      <ProductDispatchContext.Provider value={dispatch}>
        {children}
      </ProductDispatchContext.Provider>
    </ProductStateContext.Provider>
  );
};
