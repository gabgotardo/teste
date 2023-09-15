import styled from "styled-components";
import { Skeleton } from "@mui/material";

export const QuantityWrapper = styled.div`
  border-radius: 4px;
  border: 2px solid var(--line-grey-light, #efe9ec);
  background: var(--background-white, #fff);
  width: 7.5rem;
  height: 3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 16px;

  @media screen and (max-width: 48rem) {
    display: none;
  }
`;

export const PlusQuantity = styled.button`
  background-image: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none"><mask id="path-1-inside-1_12267_275" fill="white"><path fill-rule="evenodd" clip-rule="evenodd" d="M6 0C5.44772 0 5 0.447715 5 1V5H1C0.447715 5 0 5.44772 0 6C0 6.55228 0.447715 7 1 7H5V11C5 11.5523 5.44772 12 6 12C6.55228 12 7 11.5523 7 11V7H11C11.5523 7 12 6.55228 12 6C12 5.44772 11.5523 5 11 5H7V1C7 0.447715 6.55228 0 6 0Z"/></mask><path fill-rule="evenodd" clip-rule="evenodd" d="M6 0C5.44772 0 5 0.447715 5 1V5H1C0.447715 5 0 5.44772 0 6C0 6.55228 0.447715 7 1 7H5V11C5 11.5523 5.44772 12 6 12C6.55228 12 7 11.5523 7 11V7H11C11.5523 7 12 6.55228 12 6C12 5.44772 11.5523 5 11 5H7V1C7 0.447715 6.55228 0 6 0Z" fill="white"/><path d="M5 5V7H7V5H5ZM5 7H7V5H5V7ZM7 7V5H5V7H7ZM7 5H5V7H7V5ZM7 1C7 1.55229 6.55228 2 6 2V-2C4.34315 -2 3 -0.656855 3 1H7ZM7 5V1H3V5H7ZM1 7H5V3H1V7ZM2 6C2 6.55228 1.55228 7 1 7V3C-0.656854 3 -2 4.34315 -2 6H2ZM1 5C1.55229 5 2 5.44772 2 6H-2C-2 7.65685 -0.656855 9 1 9V5ZM5 5H1V9H5V5ZM7 11V7H3V11H7ZM6 10C6.55229 10 7 10.4477 7 11H3C3 12.6569 4.34315 14 6 14V10ZM5 11C5 10.4477 5.44772 10 6 10V14C7.65685 14 9 12.6569 9 11H5ZM5 7V11H9V7H5ZM11 5H7V9H11V5ZM10 6C10 5.44771 10.4477 5 11 5V9C12.6569 9 14 7.65685 14 6H10ZM11 7C10.4477 7 10 6.55228 10 6H14C14 4.34315 12.6569 3 11 3V7ZM7 7H11V3H7V7ZM5 1V5H9V1H5ZM6 2C5.44772 2 5 1.55228 5 1H9C9 -0.656854 7.65685 -2 6 -2V2Z" fill="%238D8B87" mask="url(%23path-1-inside-1_12267_275)"/></svg>');
  background-color: transparent;
  background-repeat: no-repeat;
  background-position: center;
  border: none;
  width: 0.75rem;
  height: 0.75rem;
`;

export const MinusQuantity = styled.button`
  background-image: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="12" height="2" viewBox="0 0 12 2" fill="none"><g opacity="0.4"><mask id="path-1-inside-1_12267_273" fill="white"><path d="M0 1C0 0.447715 0.447715 0 1 0H11C11.5523 0 12 0.447715 12 1C12 1.55228 11.5523 2 11 2H1C0.447715 2 0 1.55228 0 1Z"/></mask><path d="M0 1C0 0.447715 0.447715 0 1 0H11C11.5523 0 12 0.447715 12 1C12 1.55228 11.5523 2 11 2H1C0.447715 2 0 1.55228 0 1Z" fill="white"/><path d="M1 2H11V-2H1V2ZM11 0H1V4H11V0ZM1 0C1.55229 0 2 0.447716 2 1H-2C-2 2.65685 -0.656855 4 1 4V0ZM10 1C10 0.447715 10.4477 0 11 0V4C12.6569 4 14 2.65685 14 1H10ZM11 2C10.4477 2 10 1.55228 10 1H14C14 -0.656854 12.6569 -2 11 -2V2ZM1 -2C-0.656854 -2 -2 -0.656854 -2 1H2C2 1.55228 1.55228 2 1 2V-2Z" fill="%238D8B87" mask="url(%23path-1-inside-1_12267_273)"/></g></svg>');
  background-color: transparent;
  background-repeat: no-repeat;
  background-position: center;
  border: none;
  width: 0.75rem;
  height: 0.75rem;
`;

export const Quantity = styled.span`
  color: var(--text-grey-darker, #222121);
  font-family: Colgate Ready;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0.36px;
`;

export const SkeletonQuantity = styled(Skeleton)`
  width: 7.5rem;
  height: 3rem;
`;
