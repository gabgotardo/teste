import { Fragment, useEffect, useState } from "react";
import { useRecommendation } from "../../../../context/Recommendation";
import { useGlobal } from "../../../../hooks/useGlobal";
import { CartContainer, CartCount, CartIcon, CartOverlay } from "./cart.styles";
import CartBody from "../CartBody/cart-body.component";
import CartHeader from "../CartHeader/cart-header.component";

const variants = {
  open: {
    opacity: 1,
    x: 0,

    transition: {
      type: "spring",
      stiffness: 300,
      damping: 24,
    },
  },
  closed: {
    x: "100%",
    opacity: 0,
    transition: {
      duration: 0.2,
    },
  },
};
const Cart = () => {
  const { cartItems } = useRecommendation();
  const { toggleCart, cartIsOpen } = useGlobal();

  const itemsCount = cartItems.length;

  return (
    <Fragment>
      <CartIcon onClick={() => toggleCart("open")}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="26"
          viewBox="0 0 28 26"
          fill="none"
        >
          <path
            d="M0.636517 -0.00012207C0.284969 -0.00012207 0 0.290893 0 0.649878C0 1.00886 0.284969 1.29988 0.636517 1.29988H4.02794C5.65479 5.40763 7.25092 9.52354 8.86153 13.6397L7.36966 17.296C7.20617 17.6896 7.53776 18.2004 7.95647 18.1999H23.8694C24.2057 18.2048 24.515 17.8933 24.515 17.5499C24.515 17.2064 24.2057 16.895 23.8694 16.8999H8.91124L9.98536 14.2593L25.5104 12.9897C25.7758 12.9673 26.0158 12.7567 26.0773 12.4921L27.9869 4.04207C28.0696 3.66483 27.7488 3.25264 27.3702 3.24988H6.15633L5.04243 0.406128C4.94841 0.168868 4.70625 0.00120718 4.45562 -0.00012207H0.636517ZM6.66354 4.54988H13.3669V8.12488H8.06588L6.66354 4.54988ZM14.6399 4.54988H19.0955V8.12488H14.6399V4.54988ZM20.3686 4.54988H26.5746L25.7591 8.12488H20.3686V4.54988ZM8.57309 9.42488H13.3669V12.685L9.96547 12.9593L8.57309 9.42488ZM14.6399 9.42488H19.0955V12.2178L14.6399 12.5835V9.42488ZM20.3686 9.42488H25.4706L24.9435 11.7405L20.3686 12.1163V9.42488ZM11.1391 20.1499C9.56469 20.1499 8.27472 21.4671 8.27472 23.0749C8.27472 24.6826 9.56469 25.9999 11.1391 25.9999C12.7134 25.9999 14.0034 24.6826 14.0034 23.0749C14.0034 21.4671 12.7134 20.1499 11.1391 20.1499ZM20.6868 20.1499C19.1124 20.1499 17.8225 21.4671 17.8225 23.0749C17.8225 24.6826 19.1124 25.9999 20.6868 25.9999C22.2612 25.9999 23.5511 24.6826 23.5511 23.0749C23.5511 21.4671 22.2612 20.1499 20.6868 20.1499ZM11.1391 21.4499C12.0254 21.4499 12.7303 22.1697 12.7303 23.0749C12.7303 23.98 12.0254 24.6999 11.1391 24.6999C10.2527 24.6999 9.54776 23.98 9.54776 23.0749C9.54776 22.1697 10.2527 21.4499 11.1391 21.4499ZM20.6868 21.4499C21.5732 21.4499 22.2781 22.1697 22.2781 23.0749C22.2781 23.98 21.5732 24.6999 20.6868 24.6999C19.8004 24.6999 19.0955 23.98 19.0955 23.0749C19.0955 22.1697 19.8004 21.4499 20.6868 21.4499Z"
            fill="white"
          />
        </svg>
        <CartCount>{itemsCount}</CartCount>
      </CartIcon>
      {cartIsOpen && <CartOverlay onClick={() => toggleCart("close")} />}
      <CartContainer
        animate={cartIsOpen ? "open" : "closed"}
        variants={variants}
      >
        <CartHeader />
        <CartBody />
      </CartContainer>
    </Fragment>
  );
};

export default Cart;
