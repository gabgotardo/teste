import styled from "styled-components";
import { motion } from "framer-motion";

export const MenuContainer = styled.div`
  width: 100%;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  background-color: var(--white, #ffffff);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  @media screen and (max-width: 48rem) {
    height: 0;
  }
`;

export const MenuList = styled(motion.ul)`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2.25rem;

  @media screen and (max-width: 48rem) {
    position: fixed;
    left: 0;
    top: 0;
    flex-direction: column;
    background-color: var(--white, #ffffff);
    width: 100%;
    height: 45.1875rem;
    z-index: 1111;
    align-items: flex-start;
    justify-content: flex-start;

    &::after {
      content: "";
      position: absolute;
      left: 0;
      top: 723px;
      width: 100%;
      height: 100vh;
      background-color: rgb(0, 0, 0, 0.5);
      opacity: 0.5;
    }
  }
`;

export const MenuItem = styled.li`
  color: var(--text-grey-dark, #524c4c);
  font-family: Colgate Ready;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 128%;

  list-style: none;

  @media screen and (max-width: 768px) {
    padding-left: 1rem;
  }
`;

export const AllCategories = styled(MenuItem)`
  color: var(--colgate-red-dark, #ee0400);
  font-family: Colgate Ready;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 24px;

  &::after {
    content: ">";

    margin-left: 0.5rem;
  }

  @media screen and (max-width: 48rem) {
    width: 100%;
    height: 4rem;
    background: #ee0400;
    color: var(--background-white, #fff);
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding-left: 1rem;

    &::after {
      content: "";
    }
  }
`;

export const CloseMenuButton = styled.button`
  background: transparent;
  border: none;
  position: absolute;
  right: 16px;
  top: 23px;

  &::before {
    content: url('data:image/svg+xml,<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M2.36396 0.636039L0.949747 2.05025L5.89949 7L0.949747 11.9497L2.36396 13.364L7.31371 8.41421L12.2635 13.364L13.6777 11.9497L8.72792 7L13.6777 2.05025L12.2635 0.636039L7.31371 5.58579L2.36396 0.636039Z" fill="white"/></svg>');
  }
`;

export const MenuDrawerIcon = styled.div`
  @media screen and (min-width: 48rem) {
    display: none;
  }

  position: absolute;
  left: 1rem;
  top: 3.9375rem;
`;

export const Link = styled.a`
  text-decoration: none;
  color: inherit;
`;
