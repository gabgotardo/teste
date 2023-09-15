import { Fragment } from "react";
import { useRecommendation } from "../../context/Recommendation";
import { useGlobal } from "../../hooks/useGlobal";
import { useProduct } from "../../hooks/useProduct";
import { Button, SkeletonButton } from "./buy-button.styles";

const BuyButton = () => {
  const { selectedItem, selectedQuantity, product, loading } = useProduct();
  const { addToCart } = useRecommendation();
  const { setGlobalState, globalState } = useGlobal();

  const cartItem = {
    selectedItem,
    product,
    quantity: selectedQuantity,
  };

  const handleAddToCart = () => {
    addToCart(cartItem);
    setGlobalState({
      ...globalState,
      showBuyBox: true,
      buyBoxContent: cartItem,
    });
  };

  if (loading) return <SkeletonButton variant="rectangular" />;

  return (
    <Fragment>
      <Button onClick={() => handleAddToCart()}>Adicionar</Button>
    </Fragment>
  );
};

export default BuyButton;
