import styled from "styled-components";

export const Container = styled.div`
  background: var(--line-grey-lighter, #f5f5f5);
  justify-content: center;
  flex-direction: column;
  max-height: 25.25rem;
  align-items: center;
  display: flex;
  height: 100%;
  width: 100%;
`;

export const Banner = styled.img`
  max-width: 76.0625rem;
  max-height: 16.5rem;
  margin: 1.5rem auto;
  height: 100%;
  width: 100%;

  @media screen and (min-width: 1217px) {
    border-radius: 0.5rem;
  }
`;
