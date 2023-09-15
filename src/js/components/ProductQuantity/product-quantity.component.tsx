import { useEffect, useState } from "react";
import { useProduct } from "../../hooks/useProduct";
import { ISeller } from "../../typings/product";
import {
  MinusQuantity,
  PlusQuantity,
  Quantity,
  QuantityWrapper,
  SkeletonQuantity,
} from "./product-quantity.styles";

enum QuantityType {
  PLUS = "plus",
  MINUS = "minus",
}

const ProductQuantity = () => {
  const { selectedItem, dispatch, loading, selectedQuantity } = useProduct();
  const [currentQuantity, setCurrentQuantity] = useState(1);

  const defaultSeller = selectedItem?.sellers?.find(
    (seller: ISeller) => seller.sellerDefault
  );

  const maxQuantity = defaultSeller?.commertialOffer?.AvailableQuantity;

  const handleQuantity = (type: QuantityType) => {
    let newQuantity: number;

    if (type === QuantityType.PLUS) {
      newQuantity = Math.min(currentQuantity + 1, maxQuantity);
    } else {
      newQuantity = Math.max(currentQuantity - 1, 1);
    }

    setCurrentQuantity(newQuantity);
    dispatch({ type: "SET_SELECTED_QUANTITY", payload: newQuantity });
  };

  useEffect(() => {
    setCurrentQuantity(selectedQuantity);
  }, [selectedQuantity]);

  if (loading) return <SkeletonQuantity variant="rectangular" />;

  return (
    <QuantityWrapper>
      <MinusQuantity onClick={() => handleQuantity(QuantityType.MINUS)} />
      <Quantity>{currentQuantity}</Quantity>
      <PlusQuantity
        onClick={() => handleQuantity(QuantityType.PLUS)}
        disabled={currentQuantity === maxQuantity}
      />
    </QuantityWrapper>
  );
};

export default ProductQuantity;
