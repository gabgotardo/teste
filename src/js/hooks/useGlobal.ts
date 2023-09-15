import { useContext } from "react";
import { GlobalContext } from "../context/Global";

export const useGlobal = () => {
  const { globalState, setGlobalState, toggleCart, isLoading, isMobile } =
    useContext(GlobalContext);

  const { showBuyBox, buyBoxContent, cartIsOpen } = globalState;

  return {
    globalState,
    showBuyBox,
    setGlobalState,
    buyBoxContent,
    cartIsOpen,
    toggleCart,
    isMobile,
    isLoading,
  };
};
