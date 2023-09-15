import styled from "styled-components";

export const AccordionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 4rem auto;
`;

export const AccordionTitle = styled.h2`
  color: var(--text-grey-darker, #222121);
  text-align: center;
  font-family: Colgate Ready;
  font-size: 2rem;
  font-style: normal;
  font-weight: 700;
  line-height: 2.5rem;
  margin-bottom: 2rem;

  @media screen and (max-width: 768px) {
    font-size: 24px;
  }
`;

export const AccordionContent = styled.div<{ open: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 50rem;
  max-height: ${({ open }) => (open ? "1000px" : "96px")};
  height: fit-content;
  margin-bottom: 2rem;

  overflow: hidden;
  ransition: max-height 0.3s ease-in-out;
`;

export const Text = styled.p`
  color: var(--text-grey-dark, #524c4c);
  text-align: center;
  font-family: Colgate Ready;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.5rem;

  @media screen and (max-width: 768px) {
    padding: 0 16px;
    font-size: 16px;
  }
`;

export const SeeMoreButton = styled.button`
  border: none;
  background: transparent;
  color: var(--greendark-2, #066d63);
  text-align: center;
  leading-trim: both;
  text-edge: cap;
  font-family: Colgate Ready;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 24px;
  letter-spacing: 0.32px;
`;
