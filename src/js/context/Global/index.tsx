import React, {
  createContext,
  FC,
  ReactNode,
  useEffect,
  useState,
} from "react";
import { isMobile } from "react-device-detect";
import {
  CartActionsType,
  IGlobalsContextData,
  IGlobalState,
} from "./interface";

interface Props {
  children: ReactNode;
}

const GlobalContext = createContext<Partial<IGlobalsContextData>>(
  {} as IGlobalsContextData
);

const GlobalContextProvider: FC<Props> = ({ children }) => {
  const [globalState, setGlobalState] = useState<IGlobalState>({
    deviceInfo: window.navigator.userAgent,
    page: "",
    showBuyBox: false,
    buyBoxContent: {},
    cartIsOpen: false,
  });

  useEffect(() => {
    const page = document.querySelector("body")?.className;
    setGlobalState(prevGlobalState => ({
      ...prevGlobalState,
      page,
    }));
  }, []);

  const toggleCart = (action: string) => {
    setGlobalState(prevGlobalState => ({
      ...prevGlobalState,
      cartIsOpen: action === CartActionsType.OPEN_CART,
    }));
  };

  const isLoading = Object?.keys(globalState).length === 0;

  return (
    <GlobalContext.Provider
      value={{ globalState, setGlobalState, toggleCart, isLoading, isMobile }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export { GlobalContextProvider, GlobalContext };
