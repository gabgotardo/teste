import styled from "styled-components";
import { motion } from "framer-motion";

export const ResultContainer = styled(motion.div)`
  max-width: 39.375rem;
  display: flex;
  width: 100%;
  height: auto;
  border-radius: 8px;
  border: 1px solid rgba(156, 160, 174, 0.4);
  background: #fff;
  position: absolute;
  left: 0;
  top: 50px;
  box-shadow: 0px 8px 16px 8px rgba(0, 0, 0, 0.1),
    0px 1px 2px 0px rgba(0, 0, 0, 0.05);
  z-index: 2;
  overflow: hidden;
`;

export const ResultWrapper = styled.div`
  width: 100%;
  height: 23.625rem;
  display: flex;

  @media screen and (max-width: 48rem) {
    flex-direction: column-reverse;
    height: auto;
  }
`;
