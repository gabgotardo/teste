import styled from "styled-components";
import { motion } from "framer-motion";

export const CartContainer = styled(motion.div)`
  max-width: 19.5rem;
  max-height: 40rem;
  width: 100%;
  height: 100%;
  transform: translateX(100%);
  position: fixed;
  right: 0;
  top: 0;
  z-index: 99999;

  .swiper {
    height: 100%;
  }
`;

export const CartWrapper = styled.div`
  width: 100%;
  height: 100%;
`;

export const CartIcon = styled.div`
  width: 2.7416rem;
  height: 2.1928rem;
  position: absolute;
  top: 1.875rem;
  right: 0;

  @media screen and (max-width: 48rem) {
    top: 1.75rem;
    right: 1rem;
  }
`;

export const CartCount = styled.div`
  width: 1.5rem;
  height: 1.5rem;
  background: #01a292;
  border-radius: 100%;
  color: var(--background-white, #fff);
  text-align: center;
  font-family: Colgate Ready;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 700;
  line-height: 1rem;
  letter-spacing: -0.0175rem;
  position: relative;
  top: -2.8125rem;
  left: 1.0625rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CartOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 1000%;
  height: 1000%;
  background: rgba(0, 0, 0, 0.5); 
  z-index: 9999; 
}`;
