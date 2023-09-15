import { Link } from "react-router-dom";
import styled from "styled-components";

export const BreadcrumbContainer = styled.nav`
  margin-bottom: 1rem;
  margin-top: 0.875rem;
  max-width: 76rem;
  width: 100%;
  margin: 14px auto 0.75rem auto;
`;

export const BreadcrumbList = styled.ol`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
`;

export const BreadcrumbItem = styled.li`
  &:last-child {
    margin-right: 0;

    a,
    span {
      color: var(--text-grey-darker, #222121);
      font-size: 12px;
      font-weight: 700;
    }
  }
`;

export const BreadcrumbLink = styled(Link)`
  text-decoration: none;
  color: var(--text-grey-light, #8d8b87);
  font-family: Colgate Ready;
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 400;
  line-height: 16px; /* 133.333% */
  letter-spacing: 0.12px;
  transition: color 0.2s;

  &:hover {
    color: #0056b3;
  }
`;

export const BreadcrumbHomeLink = styled.a`
  text-decoration: none;
  color: #007bff;
`;

export const BreadcrumbSeparator = styled.span`
  margin: 0 8px;
  color: #ccc;

  &::before {
    content: url('data:image/svg+xml,<svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.88189 5.26521C6.03937 5.1092 6.03937 4.8908 5.88189 4.73479L1.28346 0.117005C1.12598 -0.0390016 0.874016 -0.0390016 0.748031 0.117005L0.11811 0.74103C-0.0393701 0.865835 -0.0393701 1.11544 0.11811 1.27145L3.83465 4.9844L0.11811 8.72855C-0.0393701 8.88456 -0.0393701 9.10296 0.11811 9.25897L0.748031 9.883C0.874016 10.039 1.12598 10.039 1.28346 9.883L5.88189 5.26521Z" fill="%238D8B87"/></svg>');
  }
`;
