import styled from "styled-components";

export const TopbarWrapper = styled.div`
  width: 100%;
  height: 2.5rem;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  position: sticky;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 100;

  @media screen and (max-width: 48rem) {
  }
`;

export const Span = styled.span`
  color: var(--text-grey-dark, #524c4c);
  font-family: Colgate Ready;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px; /* 142.857% */
  letter-spacing: -0.14px;

  strong {
    color: var(--colgate-red-dark, #ee0400);
    font-weight: 700;

    margin-right: 12px;
    &::after {
      content: url('data:image/svg+xml,<svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.95497 0.72031C4.72097 0.95469 4.74397 1.30625 4.95497 1.54062L7.791 4.2125H1.06499C0.735987 4.2125 0.501984 4.47031 0.501984 4.775V5.525C0.501984 5.85312 0.735987 6.0875 1.06499 6.0875H7.791L4.95497 8.7828C4.74397 9.0172 4.74397 9.3688 4.95497 9.6031L5.47099 10.1188C5.70499 10.3297 6.05699 10.3297 6.26799 10.1188L10.838 5.54844C11.049 5.3375 11.049 4.98594 10.838 4.75156L6.26799 0.204689C6.05699 -0.00625053 5.70499 -0.00625053 5.47099 0.204689L4.95497 0.72031Z" fill="%23EE0400"/></svg>');
    }
  }

  @media screen and (max-width: 48rem) {
    display: none;
  }
`;

export const Tap = styled.div`
  color: var(--text-grey-dark, #524c4c);
  font-family: Colgate Ready;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 20px;
  letter-spacing: -0.14px;

  border-radius: 10px 10px 0 0;

  height: 36px;
  margin-top: 3px;
  padding: 8px 12px 0 12px;
  cursor: pointer;

  &.active {
    color: #fff;
    font-family: Colgate Ready;
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: 20px; /* 142.857% */
    letter-spacing: -0.14px;
    background: #ee0400;
  }

  @media screen and (max-width: 48rem) {
    font-size: 0;
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 0;
    height: 100%;

    &::before {
      content: "Consultório";
      font-size: 14px;
    }

    &.active {
      border-radius: 0px 8px 0px 0px;
      font-size: 0;
      &::before {
        content: "Recomendação";
        font-size: 14px;
      }
    }
  }
`;
