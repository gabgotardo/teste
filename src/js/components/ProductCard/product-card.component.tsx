import { FC, useEffect } from "react";
import { ProductCardBottom, ProductCardContainer } from "./product-card-styles";
import ProductImage from "../ProductImage/product-image.component";
import ProductName from "../ProductName/product-name.component";
import ProductPrices from "../ProductPrices/product-prices.component";
import ProductQuantity from "../ProductQuantity/product-quantity.component";
import BuyButton from "../BuyButton/buy-button.component";
import { useProduct } from "../../hooks/useProduct";

const ProductCard: FC = () => {
  const { selectedItem, dispatch } = useProduct();

  // useEffect(() => {
  //   if (selectedItem) {
  //     dispatch({ type: "SET_LOADING", payload: false });
  //   }
  // }, [selectedItem]);

  return (
    <ProductCardContainer>
      <ProductImage />
      <ProductName />
      <ProductPrices />
      <ProductCardBottom>
        <ProductQuantity />
        <BuyButton />
      </ProductCardBottom>
    </ProductCardContainer>
  );
};

export default ProductCard;
