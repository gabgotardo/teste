import styled from "styled-components";

export const BrandSectionWrapper = styled.section`
  max-width: 76rem;
  width: 100%;
  margin: 0 auto;
`;

export const BrandTitle = styled.h2`
  color: var(--text-grey-darker, #222121);
  font-family: Colgate Ready;
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: 40px;
  letter-spacing: -0.32px;
  margin-bottom: 2.875rem;
  padding-left: 16px;
`;

export const BrandBanner = styled.img``;

export const FlexLayoutRow = styled.div`
  display: flex;
  gap: 2rem;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;
