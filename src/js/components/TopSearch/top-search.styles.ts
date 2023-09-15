import styled from "styled-components";

export const TopSearchWrapper = styled.div`
  width: 100%;
`;

export const Span = styled.span`
  color: var(--text-grey-darker, #222121);
  font-family: Colgate Ready;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 20px;
  padding: 16px;
  width: 100%;
  display: block;
`;

export const TopSearchList = styled.ul``;

export const TopSearchItem = styled.li`
  padding: 0.75rem 1.5rem;
  transition: all 0.2s ease-in-out;

  a {
    display: flex;
  }

  &:last-child {
    margin-bottom: 1.5rem;
  }

  &:hover {
    background: rgba(0, 0, 0, 0.04);
    opacity: 0.8;
    cursor: pointer;
  }
`;

export const Position = styled.span`
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 12.5rem;
  background: var(--line-grey-light, #efe9ec);
  color: var(--text-grey-dark, #524c4c);
  text-align: center;
  font-family: Colgate Ready;
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 700;
  line-height: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Term = styled.p`
  color: var(--text-grey-darker, #222121);
  font-family: Colgate Ready;
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.5rem;
  margin-left: 0.75rem;
`;
