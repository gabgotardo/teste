import styled from "styled-components";

export const StepsContainer = styled.section`
  display: flex;
  max-width: 76.0625rem;
  gap: 6.0625rem;
  width: 100%;
  align-items: center;
  padding-bottom: 1.5rem;
  position: relative;

  .swiper {
    position: unset !important;
  }

  .swiper-pagination {
    top: unset;
    bottom: 10px;
  }

  .swiper-pagination-bullet-active {
    background-color: #ee0400;
  }

  @media screen and (max-width: 76.875rem) {
    padding: 0 1rem 2.5rem 1rem;
  }
`;

export const Step = styled.div`
  display: flex;
  flex-direction: column;
  transition: transform 0.1s ease-in-out;

  &:last-child {
    max-width: 14.875rem;
    width: 100%;
  }

  h3 {
    color: var(--text-grey-darker, #222121);
    font-family: Colgate Ready;
    font-size: 1rem;
    font-style: normal;
    font-weight: 700;
    line-height: 1.5rem;
    letter-spacing: 0.001rem;
  }

  p {
    color: var(--text-grey-darker, #222121);
    font-family: Colgate Ready;
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1.25rem;
  }

  a {
    font-weight: 700;
    color: var(--text-grey-darker, #222121);
    text-decoration: underline;
  }
`;
