import styled from "styled-components";

import { Skeleton } from "@mui/material";

export const Button = styled.button`
  border-radius: 0.25rem;
  border: none;
  background-color: #d4f8f5;
  font-size: 0;
  max-width: 4rem;
  width: 100%;
  transition: background-color 0.2s ease-in-out;

  &::before {
    content: url('data:image/svg+xml,<svg width="36" height="29" viewBox="0 0 36 29" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.636517 3C0.284969 3 0 3.29101 0 3.65C0 4.00899 0.284969 4.3 0.636517 4.3H4.02794C5.65479 8.40775 7.25092 12.5237 8.86153 16.6398L7.36966 20.2961C7.20617 20.6897 7.53776 21.2005 7.95647 21.2H23.8694C24.2057 21.2049 24.515 20.8934 24.515 20.55C24.515 20.2065 24.2057 19.8951 23.8694 19.9H8.91124L9.98536 17.2594L25.5104 15.9898C25.7758 15.9674 26.0158 15.7568 26.0773 15.4922L27.9869 7.04219C28.0696 6.66495 27.7488 6.25276 27.3702 6.25H6.15633L5.04243 3.40625C4.94841 3.16899 4.70625 3.00133 4.45562 3H0.636517ZM6.66354 7.55H13.3669V11.125H8.06588L6.66354 7.55ZM14.6399 7.55H19.0955V11.125H14.6399V7.55ZM20.3686 7.55H26.5746L25.7591 11.125H20.3686V7.55ZM8.57309 12.425H13.3669V15.6851L9.96547 15.9594L8.57309 12.425ZM14.6399 12.425H19.0955V15.2179L14.6399 15.5836V12.425ZM20.3686 12.425H25.4706L24.9435 14.7406L20.3686 15.1164V12.425ZM11.1391 23.15C9.56469 23.15 8.27472 24.4673 8.27472 26.075C8.27472 27.6827 9.56469 29 11.1391 29C12.7134 29 14.0034 27.6827 14.0034 26.075C14.0034 24.4673 12.7134 23.15 11.1391 23.15ZM20.6868 23.15C19.1124 23.15 17.8225 24.4673 17.8225 26.075C17.8225 27.6827 19.1124 29 20.6868 29C22.2612 29 23.5511 27.6827 23.5511 26.075C23.5511 24.4673 22.2612 23.15 20.6868 23.15ZM11.1391 24.45C12.0254 24.45 12.7303 25.1698 12.7303 26.075C12.7303 26.9802 12.0254 27.7 11.1391 27.7C10.2527 27.7 9.54776 26.9802 9.54776 26.075C9.54776 25.1698 10.2527 24.45 11.1391 24.45ZM20.6868 24.45C21.5732 24.45 22.2781 25.1698 22.2781 26.075C22.2781 26.9802 21.5732 27.7 20.6868 27.7C19.8004 27.7 19.0955 26.9802 19.0955 26.075C19.0955 25.1698 19.8004 24.45 20.6868 24.45Z" fill="%2301A292"/><circle cx="26.5" cy="9.5" r="9" fill="%2301A292" stroke="%23D4F8F5"/><path fill-rule="evenodd" clip-rule="evenodd" d="M26 10V13H27V10H30V9H27V6H26V9H23V10H26Z" fill="%23D4F8F5"/></svg>');
  }

  &:hover {
    background-color: #01a292;
    &::before {
      content: url('data:image/svg+xml,<svg width="36" height="29" viewBox="0 0 36 29" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.636517 3C0.284969 3 0 3.29101 0 3.65C0 4.00899 0.284969 4.3 0.636517 4.3H4.02794C5.65479 8.40775 7.25092 12.5237 8.86153 16.6398L7.36966 20.2961C7.20617 20.6897 7.53776 21.2005 7.95647 21.2H23.8694C24.2057 21.2049 24.515 20.8934 24.515 20.55C24.515 20.2065 24.2057 19.8951 23.8694 19.9H8.91124L9.98536 17.2594L25.5104 15.9898C25.7758 15.9674 26.0158 15.7568 26.0773 15.4922L27.9869 7.04219C28.0696 6.66495 27.7488 6.25276 27.3702 6.25H6.15633L5.04243 3.40625C4.94841 3.16899 4.70625 3.00133 4.45562 3H0.636517ZM6.66354 7.55H13.3669V11.125H8.06588L6.66354 7.55ZM14.6399 7.55H19.0955V11.125H14.6399V7.55ZM20.3686 7.55H26.5746L25.7591 11.125H20.3686V7.55ZM8.57309 12.425H13.3669V15.6851L9.96547 15.9594L8.57309 12.425ZM14.6399 12.425H19.0955V15.2179L14.6399 15.5836V12.425ZM20.3686 12.425H25.4706L24.9435 14.7406L20.3686 15.1164V12.425ZM11.1391 23.15C9.56469 23.15 8.27472 24.4673 8.27472 26.075C8.27472 27.6827 9.56469 29 11.1391 29C12.7134 29 14.0034 27.6827 14.0034 26.075C14.0034 24.4673 12.7134 23.15 11.1391 23.15ZM20.6868 23.15C19.1124 23.15 17.8225 24.4673 17.8225 26.075C17.8225 27.6827 19.1124 29 20.6868 29C22.2612 29 23.5511 27.6827 23.5511 26.075C23.5511 24.4673 22.2612 23.15 20.6868 23.15ZM11.1391 24.45C12.0254 24.45 12.7303 25.1698 12.7303 26.075C12.7303 26.9802 12.0254 27.7 11.1391 27.7C10.2527 27.7 9.54776 26.9802 9.54776 26.075C9.54776 25.1698 10.2527 24.45 11.1391 24.45ZM20.6868 24.45C21.5732 24.45 22.2781 25.1698 22.2781 26.075C22.2781 26.9802 21.5732 27.7 20.6868 27.7C19.8004 27.7 19.0955 26.9802 19.0955 26.075C19.0955 25.1698 19.8004 24.45 20.6868 24.45Z" fill="%23D4F8F5"/><circle cx="26.5" cy="9.5" r="9" fill="%23D4F8F5" stroke="%2301A292"/><path fill-rule="evenodd" clip-rule="evenodd" d="M26 10V13H27V10H30V9H27V6H26V9H23V10H26Z" fill="%2301A292"/></svg>');
    }
  }

  @media screen and (max-width: 768px) {
    max-width: unset;
    color: var(--colgate-green-dark, #01a292);
    text-align: center;
    font-family: Colgate Ready;
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 700;
    line-height: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.625rem 0;
    max-height: 2.5rem;
  }
`;

export const SkeletonButton = styled(Skeleton)`
  max-width: 4rem;
  width: 100%;

  @media screen and (max-width: 48rem) {
    max-width: unset;
  }
`;