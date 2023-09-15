import styled from "styled-components";

export const ShelfWrapper = styled.div`
  position: relative;
  width: 100%;
  height: auto;
  margin: 2rem auto 0 auto;

  &.twice-mode {
    max-width: 29.5rem;
  }

  &.normal-mode {
    max-width: 76rem;
  }

  @media screen and (max-width: 48rem) {
    padding: 0 1rem;
  }
`;

export const ShelfTitle = styled.h2`
  color: var(--text-grey-darker, #222121);
  font-family: Colgate Ready;
  font-size: 2rem;
  font-style: normal;
  font-weight: 700;
  line-height: 2.5rem;
  letter-spacing: -0.02rem;
  border-bottom: 1px solid var(--line-grey-light, #efe9ec);
  padding-bottom: 1rem;

  @media screen and (max-width: 48rem) {
    text-align: center;
    font-size: 1.5rem;
  }
`;
