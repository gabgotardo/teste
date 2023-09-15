import { Fragment, useState } from "react";
import { useGlobal } from "../../hooks/useGlobal";
import { useProduct } from "../../hooks/useProduct";
import {
  BuyBoxContainer,
  BuyBoxWrapper,
  CloseButton,
  IconCheck,
  Overlay,
  ProductImage,
  ProductInfo,
  ProductInfoWrapper,
  ProductName,
  SeeCartButton,
  Span,
} from "./buy-box-styles";

const variants = {
  open: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 24,
    },
  },
  closed: {
    y: "10%",
    opacity: 0,
    zIndex: -1,
    transition: {
      duration: 0.2,
    },
  },
};

const Buybox = () => {
  const { buyBoxContent, setGlobalState, globalState, toggleCart, showBuyBox } =
    useGlobal();

  const { selectedItem } = buyBoxContent;

  if (!selectedItem)
    return (
      <BuyBoxContainer
        animate={showBuyBox ? "open" : "closed"}
        variants={variants}
      />
    );
  const { images, name } = selectedItem;

  const handleClose = () => {
    setGlobalState({
      ...globalState,
      buyBoxContent: {},
      showBuyBox: false,
    });
  };

  const seeCart = () => {
    handleClose();
    toggleCart("open");
  };

  return (
    <Fragment>
      <BuyBoxContainer
        animate={showBuyBox ? "open" : "closed"}
        variants={variants}
      >
        {selectedItem && (
          <BuyBoxWrapper>
            <IconCheck>
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.99984 16L13.9998 20L21.9998 12M29.3332 16C29.3332 23.3638 23.3636 29.3333 15.9998 29.3333C8.63604 29.3333 2.6665 23.3638 2.6665 16C2.6665 8.63619 8.63604 2.66666 15.9998 2.66666C23.3636 2.66666 29.3332 8.63619 29.3332 16Z"
                  stroke="#0B9084"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </IconCheck>
            <ProductInfoWrapper>
              <ProductImage src={images[0].imageUrl} />
              <ProductInfo>
                <Span>
                  1 produto adicionado no seu carrinho de recomendação.
                </Span>
                <ProductName>{name}</ProductName>
              </ProductInfo>
            </ProductInfoWrapper>
            <SeeCartButton onClick={() => seeCart()}>
              Ver recomendação
              <svg
                width="29"
                height="26"
                viewBox="0 0 29 26"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.00956 0C0.658016 0 0.373047 0.291015 0.373047 0.65C0.373047 1.00899 0.658016 1.3 1.00956 1.3H4.40099C6.02783 5.40775 7.62396 9.52367 9.23458 13.6398L7.74271 17.2961C7.57922 17.6897 7.91081 18.2005 8.32951 18.2H24.2424C24.5787 18.2049 24.888 17.8934 24.888 17.55C24.888 17.2065 24.5787 16.8951 24.2424 16.9H9.28429L10.3584 14.2594L25.8834 12.9898C26.1489 12.9674 26.3888 12.7568 26.4504 12.4922L28.3599 4.04219C28.4427 3.66495 28.1219 3.25276 27.7433 3.25H6.52938L5.41547 0.40625C5.32146 0.16899 5.0793 0.00132925 4.82867 0H1.00956ZM7.03659 4.55H13.7399V8.125H8.43893L7.03659 4.55ZM15.0129 4.55H19.4686V8.125H15.0129V4.55ZM20.7416 4.55H26.9476L26.1321 8.125H20.7416V4.55ZM8.94614 9.425H13.7399V12.6851L10.3385 12.9594L8.94614 9.425ZM15.0129 9.425H19.4686V12.2179L15.0129 12.5836V9.425ZM20.7416 9.425H25.8437L25.3166 11.7406L20.7416 12.1164V9.425ZM11.5121 20.15C9.93774 20.15 8.64777 21.4673 8.64777 23.075C8.64777 24.6827 9.93774 26 11.5121 26C13.0865 26 14.3764 24.6827 14.3764 23.075C14.3764 21.4673 13.0865 20.15 11.5121 20.15ZM21.0599 20.15C19.4855 20.15 18.1955 21.4673 18.1955 23.075C18.1955 24.6827 19.4855 26 21.0599 26C22.6342 26 23.9242 24.6827 23.9242 23.075C23.9242 21.4673 22.6342 20.15 21.0599 20.15ZM11.5121 21.45C12.3985 21.45 13.1034 22.1698 13.1034 23.075C13.1034 23.9802 12.3985 24.7 11.5121 24.7C10.6257 24.7 9.9208 23.9802 9.9208 23.075C9.9208 22.1698 10.6257 21.45 11.5121 21.45ZM21.0599 21.45C21.9462 21.45 22.6511 22.1698 22.6511 23.075C22.6511 23.9802 21.9462 24.7 21.0599 24.7C20.1735 24.7 19.4686 23.9802 19.4686 23.075C19.4686 22.1698 20.1735 21.45 21.0599 21.45Z"
                  fill="#01A292"
                />
              </svg>
            </SeeCartButton>
            <CloseButton onClick={() => handleClose()}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M1.73701 0.636039L0.322794 2.05025L5.27254 7L0.322794 11.9497L1.73701 13.364L6.68676 8.41421L11.6365 13.364L13.0507 11.9497L8.10097 7L13.0507 2.05025L11.6365 0.636039L6.68676 5.58579L1.73701 0.636039Z"
                  fill="#222121"
                />
              </svg>
            </CloseButton>
          </BuyBoxWrapper>
        )}
      </BuyBoxContainer>
      <Overlay />
    </Fragment>
  );
};

export default Buybox;
