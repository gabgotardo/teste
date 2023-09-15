import styled from "styled-components";

export const CartBodyWrapper = styled.div`
  background: #fff;
  position: relative;
  height: 100%;
`;

export const EmptyButton = styled.button`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 3rem;
  border: none;
  background: var(--colgate-red-dark, #ee0400);
  color: var(--background-white, #fff);
  text-align: center;
  font-family: Colgate Ready;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 24px;
`;

export const Span = styled.span`
  color: var(--text-grey-darker, #222121);
  text-align: center;
  font-family: Colgate Ready;
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 700;
  line-height: 1.75rem;
  letter-spacing: -0.16px;
  margin-bottom: 0.75rem;
`;

export const Small = styled.small`
  color: var(--text-grey-dark, #524c4c);
  text-align: center;
  font-family: Colgate Ready;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 400;
  line-height: 20px; /* 142.857% */
  letter-spacing: -0.112px;

  strong {
    font-weight: 700;
    color: var(--text-grey-darker, #222121);
  }
`;

export const EmptyWrapper = styled.div`
  padding: 0 2.3125rem;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #fff;

  svg {
    margin-bottom: 1rem;
  }
`;

export const ProductWrapper = styled.div``;

export const ProductList = styled.ul`
  display: flex;
  flex-direction: column;
  padding: 1rem;
`;

export const ProductItem = styled.li`
  list-style: none;
  display: flex;
  align-items: center;
  gap: 1rem;
  position: relative;
  padding-bottom: 1rem;

  border-bottom: 0.0625rem solid #efe9ec;
  margin-bottom: 1rem;

  &::last-child {
    border-bottom: none;
  }
`;

export const ProductImage = styled.img`
  width: 3rem;
  height: 3rem;
`;

export const ProductInfosWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ProductBrand = styled.p`
  color: var(--colgate-red-dark, #ee0400);
  font-family: Colgate Ready;
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 700;
  line-height: 1rem;
  letter-spacing: -0.003rem;
  margin: 0 0 0.25rem 0;
`;

export const ProductName = styled.p`
  color: var(--text-grey-dark, #524c4c);
  font-family: Colgate Ready;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.25rem;
  letter-spacing: -0.0035rem;
  margin: 0 0 0.5rem 0;
  width: 12.3125rem;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
  height: 2.5rem;
  text-overflow: ellipsis;
`;

export const RemoveButton = styled.button`
  border: none;
  background: transparent;
  width: 0.875rem;
  height: 1rem;

  position: absolute;
  right: 0;
  top: 1.875rem;

  &::before {
    content: url('data:image/svg+xml,<svg width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.375 13H9.125C9.3125 13 9.5 12.8438 9.5 12.625V5.875C9.5 5.6875 9.3125 5.5 9.125 5.5H8.375C8.15625 5.5 8 5.6875 8 5.875V12.625C8 12.8438 8.15625 13 8.375 13ZM13.5 2.5H10.9062L9.84375 0.75C9.59375 0.34375 9.03125 0 8.5625 0H5.40625C4.9375 0 4.375 0.34375 4.125 0.75L3.0625 2.5H0.5C0.21875 2.5 0 2.75 0 3V3.5C0 3.78125 0.21875 4 0.5 4H1V14.5C1 15.3438 1.65625 16 2.5 16H11.5C12.3125 16 13 15.3438 13 14.5V4H13.5C13.75 4 14 3.78125 14 3.5V3C14 2.75 13.75 2.5 13.5 2.5ZM5.34375 1.59375C5.375 1.5625 5.46875 1.5 5.5 1.5H5.53125H8.46875C8.5 1.5 8.59375 1.5625 8.625 1.59375L9.15625 2.5H4.8125L5.34375 1.59375ZM11.5 14.5H2.5V4H11.5V14.5ZM4.875 13H5.625C5.8125 13 6 12.8438 6 12.625V5.875C6 5.6875 5.8125 5.5 5.625 5.5H4.875C4.65625 5.5 4.5 5.6875 4.5 5.875V12.625C4.5 12.8438 4.65625 13 4.875 13Z" fill="%23BBBBBB"/></svg>');
  }
`;

export const QuantityWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 6rem;
  height: 2rem;
  padding: 0 0.75rem;
  border-radius: 4px;
  border: 2px solid var(--line-grey-light, #efe9ec);
  background: var(--background-white, #fff);
`;

export const QuantityButton = styled.button`
  background: transparent;
  border: none;
`;

export const QuantityInput = styled.div`
  color: var(--text-grey-darker, #222121);
  font-family: Colgate Ready;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 20px;
  letter-spacing: 0.28px;
  border: none;
  background: transparent;

  &:focus {
    outline: none;
  }
`;

export const NextButton = styled.button`
  border: none;
  background: #0b9084;
  width: 100%;
  height: 3rem;
  color: var(--background-white, #fff);
  text-align: center;
  font-family: Colgate Ready;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 24px;
  position: absolute;
  bottom: 0;
  transition: all 0.2s ease-in-out;

  &:disabled {
    opacity: 1;
    background: #8d8b87;
  }

  @keyframes loading {
    to {
      transform: rotate(360deg);
    }
  }

  &.loading {
    font-size: 0;
    &::before {
      content: "";
      box-sizing: border-box;
      position: absolute;
      top: 50%;
      left: 50%;
      width: 20px;
      height: 20px;
      margin-top: -10px;
      margin-left: -10px;
      border-radius: 50%;
      border: 2px solid #ccc;
      border-top-color: #000;
      animation: loading 0.6s linear infinite;
    }
  }
`;

export const BackToCartButton = styled.button`
  border: none;
  background: transparent;
  color: var(--text-grey-dark, #524c4c);
  font-family: Colgate Ready;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: -0.128px;
  display: flex;
  align-items: center;
  position: absolute;
  top: 1.5rem;
  left: 1rem;

  &::before {
    content: url('data:image/svg+xml,<svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.15748 6.62871C-0.0524931 6.84711 -0.0524931 7.15289 0.15748 7.37129L6.33071 13.8362C6.49869 14.0546 6.83465 14.0546 7.04462 13.8362L7.84252 12.9626C8.05249 12.7878 8.05249 12.4384 7.84252 12.22L2.88714 7.02184L7.84252 1.78003C8.05249 1.56162 8.05249 1.25585 7.84252 1.03744L7.04462 0.163807C6.83465 -0.0546022 6.49869 -0.0546022 6.33071 0.163807L0.15748 6.62871Z" fill="%23BBBBBB"/></svg>');
    margin-right: 1rem;
  }
`;

export const StepContentWrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* margin-bottom: 170px; */
`;

export const StepText = styled.p`
  color: var(--text-grey-darker, #222121);
  text-align: center;
  font-family: Colgate Ready;
  font-size: 16px;
  font-style: normal;
  font-weight: 300;
  line-height: 24px;
  letter-spacing: -0.064px;
  margin: 0 0 1rem 0;
  width: 11.5rem;

  margin-top: -102px;

  strong {
    font-weight: 700;
  }
`;

export const Input = styled.input`
  border-radius: 4px;
  border: 2px solid var(--line-grey-dark, #dad2d6);
  background: transparent;
  max-width: 16.5rem;
  max-height: 3rem;
  width: 100%;
  height: 100%;
  color: var(--text-grey-darker, #222121);
  font-family: Colgate Ready;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0.064px;
  transition: all 0.2s ease-in-out;
  padding: 0.75rem 1rem;
  margin-bottom: 1.5rem;

  &:focus {
    outline: none;
    border-color: #222121;
  }

  &::placeholder {
    color: var(--text-grey-light, #8d8b87);
  }
`;

export const Label = styled.label`
  position: relative;
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
`;

export const InputName = styled.span`
  color: var(--text-grey-darker, #222121);
  font-family: Colgate Ready;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 12px; /* 100% */
  letter-spacing: 0.24px;
  width: 38px;
  background: var(--background-white, #fff);
  position: absolute;
  text-align: center;
  margin-top: -6px;
  left: 35px;
`;

export const PolicyWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 16px;
  border-top: 1px solid var(--line-grey-dark, #dad2d6);
  position: absolute;
  bottom: 48px;
`;

export const Checkbox = styled.div`
  min-width: 20px;
  height: 20px;
  border: 1px solid #8d8b87;
  border-radius: 4px;
  margin-right: 0.5rem;
  display: flex;

  &.checked {
    background: url('data:image/svg+xml,<svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg"><g filter="url(%23filter0_d_12226_1791)"><rect x="8" y="4" width="20" height="20" rx="4" fill="%230B9084"/></g><path d="M16.3984 17.8325C16.4766 17.9581 16.5938 18 16.75 18C16.8867 18 17.0039 17.9581 17.1016 17.8325L22.8633 11.6754C22.9414 11.5916 23 11.466 23 11.2984C23 11.1518 22.9414 11.0262 22.8633 10.9215L22.1406 10.1675C22.043 10.0628 21.9258 10 21.7891 10C21.6523 10 21.5352 10.0628 21.4375 10.1675L16.75 15.1937L14.5625 12.8482C14.4453 12.7435 14.3281 12.6806 14.1914 12.6806C14.0547 12.6806 13.9375 12.7435 13.8594 12.8482L13.1367 13.6021C13.0391 13.7068 13 13.8325 13 13.9791C13 14.1466 13.0391 14.2723 13.1367 14.356L16.3984 17.8325Z" fill="white"/><defs><filter id="filter0_d_12226_1791" x="0" y="0" width="36" height="36" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/><feOffset dy="4"/><feGaussianBlur stdDeviation="4"/><feColorMatrix type="matrix" values="0 0 0 0 0.00392157 0 0 0 0 0.635294 0 0 0 0 0.572549 0 0 0 0.16 0"/><feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_12226_1791"/><feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_12226_1791" result="shape"/></filter></defs></svg>');
    background-position: -9px -5px;
    border-color: #0b9084;
  }
`;

export const PolicyText = styled.p`
  color: var(--text-grey-dark, #524c4c);
  font-family: Colgate Ready;
  font-size: 11px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px;
  margin: 0;
`;

export const SuccessText = styled.p`
  color: var(--text-grey-darker, #222121);
  text-align: center;
  font-family: Colgate Ready;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 32px; /* 133.333% */
  margin-top: 3rem;
  margin-bottom: 8px;
`;

export const NewRecommendationButton = styled.button`
  border: none;
  background: var(--greenlight-1, #e4fffd);
  color: var(--green-dark1, #0b9084);
  text-align: center;
  font-family: Colgate Ready;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 24px;
  width: 100%;
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: 3rem;
`;

export const ShareAgainButton = styled(NewRecommendationButton)`
  background: var(--green-dark1, #0b9084);
  color: var(--background-white, #fff);
  bottom: 0;
`;
