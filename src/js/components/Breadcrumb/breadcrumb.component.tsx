import React from "react";
import { useLocation } from "react-router-dom";
import {
  BreadcrumbContainer,
  BreadcrumbHomeLink,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "./breadcrumb.styles";

const Breadcrumb = () => {
  const location = useLocation();
  const pathname = decodeURIComponent(
    location.pathname.split("/")[4]?.replace(/-/g, " ") ?? ""
  );

  return (
    <BreadcrumbContainer>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbHomeLink href="/">
            <HomeIcon />
          </BreadcrumbHomeLink>
          <BreadcrumbSeparator />
        </BreadcrumbItem>
        <BreadcrumbItem>
          <BreadcrumbLink to="/_secure/recomendacao">
            Colgate Pro Recomendação
          </BreadcrumbLink>
        </BreadcrumbItem>
        {pathname && (
          <BreadcrumbItem>
            <BreadcrumbSeparator />
            <span>{pathname}</span>
          </BreadcrumbItem>
        )}
      </BreadcrumbList>
    </BreadcrumbContainer>
  );
};

const HomeIcon = () => (
  <svg
    width="16"
    height="12"
    viewBox="0 0 16 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M15.8333 5.77181L14.2222 4.48322V1.90604C14.2222 1.79866 14.1111 1.69128 14 1.69128H13.1111C12.9722 1.71812 12.8889 1.79866 12.8889 1.90604V3.43624L8.97222 0.322148C8.75 0.134228 8.30556 0 8 0C7.66667 0 7.22222 0.134228 7 0.322148L0.138889 5.77181C0.0555556 5.85235 0 5.98658 0 6.09396C0 6.1745 0.0277778 6.30872 0.0833333 6.36242L0.388889 6.71141C0.444444 6.79195 0.611111 6.84564 0.722222 6.84564C0.805556 6.84564 0.944444 6.81879 1 6.7651L1.77778 6.14765V11.1409C1.77778 11.6242 2.16667 12 2.66667 12H6.22222C6.69444 12 7.08333 11.6242 7.11111 11.1409V8.34899H8.88889V11.1409C8.88889 11.6242 9.27778 12 9.77778 12H13.3333C13.8056 12 14.1944 11.6242 14.2222 11.1678V6.14765L14.9722 6.76510C15.0278 6.81879 15.1667 6.87248 15.25 6.87248C15.3611 6.87248 15.5278 6.79195 15.6111 6.71141L15.8889 6.36242C15.9444 6.30872 16 6.1745 16 6.09396C16 5.98658 15.9167 5.85235 15.8333 5.77181ZM12.8611 10.7114H10.2222V7.91946C10.1944 7.46309 9.80556 7.08725 9.33333 7.0604H6.66667C6.16667 7.08725 5.77778 7.46309 5.77778 7.91946V10.7114H3.11111V5.10067L8 1.20805L12.8889 5.10067L12.8611 10.7114Z"
      fill="#8D8B87"
    />
  </svg>
);

export default Breadcrumb;
