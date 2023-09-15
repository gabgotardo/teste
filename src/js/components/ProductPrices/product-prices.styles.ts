import styled from "styled-components";
import { Skeleton } from "@mui/material";

export const PriceWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const Price = styled.span`
  color: var(--colgate-red-dark, #ee0400);
  font-family: Colgate Ready;
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 700;
  line-height: 1.5rem;

  @media screen and (max-width: 48rem) {
    font-size: 1rem;
  }
`;

export const OldPrice = styled.span`
  color: var(--text-grey-light, #8d8b87);
  font-family: Colgate Ready;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.125rem;
  text-decoration: line-through;
  margin-right: 0.25rem;

  @media screen and (max-width: 48rem) {
    font-size: 0.75rem;
  }
`;

export const Installments = styled.small`
  color: var(--text-grey-light, #8d8b87);
  font-family: Colgate Ready;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 700;
  line-height: 1.5rem;

  strong {
    color: var(--text-grey-darker, #222121);
  }

  @media screen and (max-width: 48rem) {
    font-size: 0.625rem;
  }
`;

export const SkeletonPrice = styled(Skeleton)``;

export const SkeletonInstallments = styled(Skeleton)``;
