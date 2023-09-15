import { Link } from "react-router-dom";
import styled from "styled-components";

export const SuggestedTermsWrapper = styled.div`
  max-width: 12rem;
  width: 100%;
  height: 100%;
  border-right: 1px solid rgba(156, 160, 174, 0.4);

  @media screen and (max-width: 48rem) {
    max-width: 100%;
    max-height: 10.5rem;
  }
`;

export const Span = styled.span`
  color: var(--text-grey-darker, #222121);
  font-family: Colgate Ready;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 700;
  line-height: 1.25rem;
  display: block;
  padding: 1rem;

  @media screen and (max-width: 48rem) {
    padding-bottom: 0;
  }
`;

export const SuggestedTermsList = styled.ul`
  padding: 1rem;
`;

export const SuggestedTermsItem = styled.li`
  list-style: none;
  color: var(--text-grey-darker, #222121);
  font-family: Colgate Ready;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  padding: 0.375rem 0.5rem;
  width: 100%;
  margib-bottom: 0.125rem;
`;

export const TermLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;
