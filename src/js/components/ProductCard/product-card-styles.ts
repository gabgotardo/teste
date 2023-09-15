import styled from "styled-components";

export const ProductCardContainer = styled.div`
  max-width: 14rem;
  max-height: 28rem;
  width: 100%;
  height: 100%;
  padding: 1rem;

  @media screen and (max-width: 48rem) {
    padding: 0.75rem;
  }
`;

export const ProductCardBottom = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-top: 1rem;

  @media screen and (max-width: 48rem) {
    margin-top: 0.5rem;
  }
`;
