import e from "express";
import styled from "styled-components";

export const MyAccountWrapper = styled.div`
  display: flex;
  position: absolute;
  right: 98px;

  @media screen and (max-width: 48rem) {
    display: none;
  }
`;

export const UserIcon = styled.div``;

export const UserName = styled.span`
  color: #fff;
  font-family: Colgate Ready;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 700;
  line-height: 128%;
  margin-left: 1rem;
`;

export const Link = styled.a`
  text-decoration: none;
  color: inherit;
  display: flex;
`;
