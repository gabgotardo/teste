import { useGlobal } from "../../../../hooks/useGlobal";
import { CloseButton, HeaderWrapper } from "./cart-header.styles";

const CartHeader = () => {
  const { toggleCart } = useGlobal();
  return (
    <HeaderWrapper>
      Minhas Recomendações
      <CloseButton
        onClick={() => {
          toggleCart("close");
        }}
      >
        <svg
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M2.36396 0.636039L0.949747 2.05025L5.89949 7L0.949747 11.9497L2.36396 13.364L7.31371 8.41421L12.2635 13.364L13.6777 11.9497L8.72792 7L13.6777 2.05025L12.2635 0.636039L7.31371 5.58579L2.36396 0.636039Z"
            fill="#BBBBBB"
          />
        </svg>
      </CloseButton>
    </HeaderWrapper>
  );
};

export default CartHeader;
