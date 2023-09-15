import { Link } from "react-router-dom";
import styled from "styled-components";

export const ResultListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 1rem;
`;

export const Span = styled.span`
  color: var(--text-grey-darker, #222121);
  font-family: Colgate Ready;
  font-size: 1rem;
  font-style: normal;
  font-weight: 700;
  line-height: 1.5rem;
  padding: 1rem;
`;

export const ResultListItem = styled.ul`
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  height: 16.25rem;

  &::-webkit-scrollbar {
    width: 4px;
  }

  &::-webkit-scrollbar-track {
    background: #dad2d6;
  }

  &::-webkit-scrollbar-thumb {
    background: #8d8b87;
  }
`;

export const ResultItem = styled.li`
  list-style: none;
  display: flex;
  gap: 1rem;
  padding: 1rem;
`;

export const ResultItemLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

export const ImageWrapper = styled.div`
  max-width: 4rem;
  max-height: 4rem;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
`;

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Name = styled.h3`
  color: var(--text-grey-dark, #524c4c);
  font-family: Colgate Ready;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
`;

export const Price = styled.p`
  color: var(--text-grey-darker, #222121);
  font-family: Colgate Ready;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 20px; /* 142.857% */
`;
