import styled from "styled-components";
import { Skeleton } from "@mui/material";

export const Name = styled.h1`
  color: var(--text-grey-darker, #222121);
  font-family: Colgate Ready;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 400;
  margin: 0.5rem 0 1rem 0;
  line-height: 1.25rem;
  letter-spacing: 0.00875rem;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  overflow: hidden;
  text-overflow: ellipsis;
  height: 3.75rem;

  @media screen and (max-width: 48rem) {
    font-size: 0.75rem;
    -webkit-line-clamp: 2;
    height: unset;
    margin: 8px 0;
  }
`;

export const SkeletonName = styled(Skeleton)`
  font-size: 0.875rem;
  @media screen and (max-width: 48rem) {
    font-size: 0.75rem;
  }
`;
