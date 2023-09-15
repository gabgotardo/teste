import styled from "styled-components";

export const HeaderWrapper = styled.header`
  background-color: #ee0400;
  position: sticky;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 100;
`;

export const HeaderContent = styled.div`
  margin: 0 auto;
`;

export const Middle = styled.div`
  max-width: 76rem;
  width: 100%;
  height: 5rem;
  margin: 0 auto;
  display: flex;
  align-items: center;
  position: relative;

  @media screen and (max-width: 48rem) {
    flex-direction: column;
    height: auto;
    padding-bottom: 1rem;
    padding: 0 1rem;
  }
`;

export const Logo = styled.img``;
