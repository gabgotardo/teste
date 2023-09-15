import React, {
  createContext,
  FC,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import axios from "axios";
import {
  ICartItem,
  IRecommendationCatalog,
  IRecommendationContext,
  IUserData,
} from "./interface";
import { IProduct } from "../../typings/product";

interface Props {
  children: ReactNode;
}

const RecommendationContext = createContext<Partial<IRecommendationContext>>(
  {} as IRecommendationContext
);

export const RecommendationContextProvider: FC<Props> = ({ children }) => {
  const [recommendationData, setRecommendationData] =
    useState<IRecommendationCatalog>();
  const [isEmpty, setIsEmpty] = useState(true);
  const [cartItems, setCartItems] = useState<ICartItem[]>([]);
  const [userData, setUserData] = useState<IUserData>();

  const fetchRecommendationProducts = async () => {
    const response = await axios.get(
      "/api/io/_v/app/catalogsearch/all&_from=0&_to=49"
    );
    const newData = response.data;
    const storedData = localStorage.getItem("recommendationData");
    setRecommendationData(newData);

    if (!storedData || JSON.stringify(newData) !== storedData) {
      localStorage.setItem("recommendationData", JSON.stringify(newData));
    }

    const cartItems = JSON.parse(
      localStorage.getItem("recommendationCart") || "[]"
    );
    setIsEmpty(cartItems.length === 0);
  };

  const sendRecommendedProducts = async (updatedUserData: any) => {
    try {
      const url = "/api/io/_v/app/cart/";
      const dataSend = cartItems.map((item: ICartItem) => {
        const { quantity, selectedItem } = item;
        const defaultSeller = selectedItem.sellers.find(
          seller => seller.sellerDefault === true
        );
        return {
          sku: selectedItem.itemId,
          qtd: quantity,
          sc: 1,
          seller: defaultSeller.sellerId,
        };
      });
      const response = await axios.post(url, dataSend);

      if (response.data && response.data.orderFormId) {
        const orderFormId = response.data.orderFormId;

        const orderFormInfo = await getOrderFormInfo(orderFormId);

        const success = await sendRecommendationInfo(
          orderFormInfo,
          updatedUserData
        );

        return success;
      }
      return false;
    } catch (error) {
      console.error(error, "Something went wrong");
      return false;
    }
  };

  const getOrderFormInfo = async (orderFormId: string) => {
    try {
      const url = `/api/io/_v/app/orderForm/${orderFormId}`;
      const response = await axios.get(url);

      if (response.data) {
        return response.data;
      }
    } catch (error) {
      console.error(error, "Something went wrong");
    }
  };

  const getDentistData = async () => {
    try {
      const url = "/no-cache/profileSystem/getProfile";
      const response = await axios.get(url);

      return response.data;
    } catch (error) {}
  };

  const buildUrl = (orderFormId: string, updatedUserData, FirstName) => {
    const { dentistName, patientName } = updatedUserData;
    return `https://colgatedireto.com.br/checkout/?orderFormId=${orderFormId}&dentistName=${FirstName}&patientName=${patientName}#/cart`;
  };

  const sendRecommendationInfo = async (
    orderFormInfo: any,
    updatedUserData: any
  ) => {
    const { orderFormId, items, shippingData, totalizers, value } =
      orderFormInfo;
    const { Email, FirstName } = await getDentistData();

    try {
      const dataSend = {
        ...updatedUserData,
        urlCart: buildUrl(orderFormId, updatedUserData, FirstName),
        alreadyUsed: false,
        couponCode: "",
        dentistEmail: Email,
        dentistName: FirstName,
        recommendCartItems: items,
        recommendCartShippingData: shippingData,
        recommendCartTotalizers: totalizers,
        recommendValue: value,
      };

      const url = "/api/dataentities/SC/documents?_schema=sharedcart";
      const response = await axios.post(url, dataSend);

      return true;
    } catch (error) {
      console.error(error, "Something went wrong");
      return false;
    }
  };

  const updateCartItems = (newCartItems: ICartItem[]) => {
    setCartItems(newCartItems);

    localStorage.setItem("recommendationCart", JSON.stringify(newCartItems));

    setIsEmpty(newCartItems.length === 0);
  };

  useEffect(() => {
    const storedData = localStorage.getItem("recommendationData");
    const storedCart = localStorage.getItem("recommendationCart");
    if (storedData) {
      setRecommendationData(JSON.parse(storedData));
    }

    if (storedCart) {
      setCartItems(JSON.parse(storedCart));
    }
    fetchRecommendationProducts();
  }, []);

  const addToLocalStorage = cartItem => {
    let recommendationCart =
      JSON.parse(localStorage.getItem("recommendationCart")) || [];

    const existingItemIndex = recommendationCart.findIndex(
      item => item.selectedItem.itemId === cartItem.selectedItem.itemId
    );

    if (existingItemIndex !== -1) {
      recommendationCart[existingItemIndex].quantity += cartItem.quantity;
    } else {
      recommendationCart.push(cartItem);
    }

    updateCartItems(recommendationCart);
  };

  const addToCart = (cartItem: ICartItem) => {
    addToLocalStorage(cartItem);
    setIsEmpty(false);
  };

  return (
    <RecommendationContext.Provider
      value={{
        recommendationData,
        isEmpty,
        cartItems,
        setCartItems,
        addToCart,
        updateCartItems,
        userData,
        setUserData,
        sendRecommendedProducts,
      }}
    >
      {children}
    </RecommendationContext.Provider>
  );
};

export const useRecommendation = () => {
  const recommendationContext = useContext(RecommendationContext);

  return recommendationContext;
};
