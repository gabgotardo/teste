import styled from "styled-components";
import { motion } from "framer-motion";

export const BuyBoxContainer = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 8.625rem;
  z-index: 999;
  background: var(--colgate-green-light, #ffffff);

  @media screen and (max-width: 768px) {
    top: unset;
    bottom: 0;
    height: fit-content;
  }
`;

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 101;
  height: 100vw;
  width: 100%;
  display: block;
  background: rgba(0, 0, 0, 0.5);

  @media screen and (max-width: 768px) {
    height: 100%;
  }
`;

export const BuyBoxWrapper = styled.div`
  max-width: 86rem;
  margin: 0 auto;
  height: 100%;
  display: flex;
  align-items: center;
  position: relative;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    padding: 32px;
  }
`;

export const IconCheck = styled.div`
  width: 2rem;
  height: 2rem;
  margin-right: 1rem;

  @media screen and (max-width: 48rem) {
    display: none;
  }
`;

export const ProductInfoWrapper = styled.div`
  display: flex;

  @media screen and (max-width: 768px) {
    margin-top: 10px;
  }
`;

export const ProductImage = styled.img`
  width: 4.625rem;
  height: 4.625rem;
  margin-right: 1rem;

  @media screen and (max-width: 48rem) {
    width: 2.625rem;
    height: 2.625rem;
  }
`;

export const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const ProductName = styled.h3`
  color: var(--text-grey-darker, #222121);
  font-family: Colgate Ready;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.25rem;
  letter-spacing: 0.14px;
  margin-top: 0.5rem;

  @media screen and (max-width: 48rem) {
    white-space: normal;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    font-size: 12px;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    margin-top: -1rem;
  }
`;

export const Span = styled.span`
  color: var(--colgate-green-dark, #01a292);
  font-family: Colgate Ready;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 1.25rem;
  letter-spacing: 0.2px;

  @media screen and (max-width: 768px) {
    font-size: 0;

    &::before {
      content: "Adicionado ao seu carrinho:";
      font-size: 12px;
      position: absolute;
      top: 1.125rem;
      left: 32px;
    }
  }
`;

export const SeeCartButton = styled.button`
  max-width: 17rem;
  width: 100%;
  height: 3.5rem;
  border-radius: 0.25rem;
  background: var(--colgate-green-light, #d4f8f5);
  box-shadow: 0px 4px 8px 0px rgba(1, 162, 146, 0.16);
  color: var(--colgate-green-dark, #01a292);
  text-align: center;
  font-family: Colgate Ready;
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 700;
  line-height: 2rem;
  letter-spacing: 0.0112rem;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  right: 5.1875rem;
  border: none;

  svg {
    margin-left: 0.625rem;
  }

  @media screen and (max-width: 768px) {
    position: relative;
    right: 0;
    margin-top: 1rem;
    max-width: 100%;
  }
`;

export const CloseButton = styled.button`
  background: transparent;
  border: none;
  position: absolute;
  right: 0;

  @media screen and (max-width: 768px) {
    right: 12px
    top: 12px;
  }
`;
