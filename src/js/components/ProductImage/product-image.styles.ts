import styled from "styled-components";
import { Skeleton } from "@mui/material";

export const ImageWrapper = styled.div``;

export const Image = styled.img`
  max-width: 12rem;
  max-height: 12rem;
  width: 100%;
  height: 100%;
  object-fit: contain;

  @media screen and (max-width: 48rem) {
    max-width: 8.5rem;
    max-height: 8rem;
  }
`;

export const SkeletonImage = styled(Skeleton)`
  width: 12rem !important;
  height: 12rem !important;

  @media screen and (max-width: 48rem) {
    width: 8.5rem !important;
    height: 8rem !important;
  }
`;
