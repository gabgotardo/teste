import {
  MinusQuantity,
  PlusQuantity,
} from "../../../../components/ProductQuantity/product-quantity.styles";
import { useRecommendation } from "../../../../context/Recommendation";
import { IProduct } from "../../../../typings/product";
import {
  CartBodyWrapper,
  NextButton,
  ProductBrand,
  ProductImage,
  ProductInfosWrapper,
  ProductItem,
  ProductList,
  ProductName,
  QuantityInput,
  QuantityWrapper,
  RemoveButton,
} from "./cart-body.styles";

interface IFullCartProps {
  handleStepChange: (action: string) => void;
}

const FullCart = ({ handleStepChange }: IFullCartProps) => {
  const { cartItems, updateCartItems } = useRecommendation();

  const updateQuantity = (productId, newQuantity) => {
    const updatedCartItems = cartItems.map(item => {
      if (item.product.productId === productId) {
        return {
          ...item,
          quantity: newQuantity,
        };
      }
      return item;
    });

    updateCartItems(updatedCartItems);
  };

  const removeItem = productId => {
    const updatedCartItems = cartItems.filter(
      item => item.product.productId !== productId
    );

    updateCartItems(updatedCartItems);
  };

  return (
    <CartBodyWrapper>
      <ProductList>
        {cartItems?.map(item => {
          const { product, selectedItem, quantity } = item;
          const { productId, productName, brand } = product as IProduct;
          const { imageUrl } = selectedItem.images[0];
          return (
            <ProductItem key={productId}>
              <ProductImage src={imageUrl} alt={productName} />
              <ProductInfosWrapper>
                <ProductBrand>{brand}</ProductBrand>
                <ProductName>{productName}</ProductName>
                <QuantityWrapper>
                  <MinusQuantity
                    onClick={() => {
                      if (quantity > 1) {
                        updateQuantity(productId, quantity - 1);
                      }
                    }}
                  />
                  <QuantityInput>{quantity}</QuantityInput>
                  <PlusQuantity
                    onClick={() => {
                      updateQuantity(productId, quantity + 1);
                    }}
                  />
                </QuantityWrapper>
                <RemoveButton
                  onClick={() => {
                    removeItem(productId);
                  }}
                />
              </ProductInfosWrapper>
            </ProductItem>
          );
        })}
      </ProductList>
      <NextButton onClick={() => handleStepChange("next")}>
        Continuar e compartilhar
      </NextButton>
    </CartBodyWrapper>
  );
};

export default FullCart;
