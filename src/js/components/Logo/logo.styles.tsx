import { Link } from "react-router-dom";
import styled from "styled-components";

export const LogoWrapper = styled(Link)`
  max-width: 11.625rem;
  max-height: 3.25rem;
  height: 100%;
  width: 100%;

  @media screen and (max-width: 768px) {
    margin: 10px auto;
  }
`;
