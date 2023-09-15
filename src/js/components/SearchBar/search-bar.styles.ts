import styled from "styled-components";

export const SearchBarWrapper = styled.div`
  max-width: 39.375rem;
  max-height: 3.25rem;
  padding: 0.625rem 1rem;
  width: 100%;
  position: relative;
  border-radius: 0.5rem;
  border: 4px solid rgba(0, 0, 0, 0.02);
  background: var(--background-white, #fff);
  box-shadow: 0px 1px 0px 0px rgba(0, 0, 0, 0.12);
  margin-left: 2.5625rem;
  z-index: 9999;

  @media screen and (max-width: 48rem) {
    margin: 0 auto 1rem auto;

    width: 100%;
  }
`;

export const Overlay = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.3);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
`;

export const Input = styled.input`
  width: 100%;
  border: none;
  background-color: transparent;
  font-family: Colgate Ready;
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.5rem;
  color: var(--text-grey-dark, #524c4c);

  &:focus {
    border: none;
    outline: none;
  }

  &:placeholder {
    color: var(--text-grey-light, #8d8b87);
  }
`;

export const SearchIcon = styled.button`
  position: absolute;
  right: 1rem;
  top: 0.625rem;
  width: 1.5rem;
  height: 1.5rem;
  display: block;

  background-color: transparent;
  border: none;
  &::before {
    width: 1.5rem;
    height: 1.5rem;

    content: url('data:image/svg+xml,<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M17.84 18.0016C14.217 21.6577 8.34505 21.6577 4.72203 18.0016C1.09901 14.3472 1.09901 8.41994 4.72203 4.76386C8.34505 1.10778 14.217 1.10778 17.84 4.76386C21.4631 8.41994 21.4631 14.3472 17.84 18.0016ZM19.2575 3.33344C14.8515 -1.11115 7.70893 -1.11115 3.30454 3.33344C-1.10151 7.77971 -1.10151 14.9857 3.30454 19.432C7.50691 23.6727 14.1936 23.8581 18.6264 20.0065L22.2895 23.703C22.6802 24.099 23.3146 24.099 23.707 23.703C24.0977 23.3088 24.0977 22.6686 23.707 22.2743L20.0322 18.566C23.6452 14.0961 23.3864 7.50171 19.2575 3.33344Z" fill="%23EE0400"/></svg>');
  }
`;
