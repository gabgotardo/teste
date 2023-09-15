import styled from "styled-components";

export const CategoryPageContainer = styled.div`
  max-width: 76rem;
  width: 100%;
  margin: 24px auto 0 auto;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  row-gap: 2rem;
  padding: 2rem 1rem;

  border-top: 1px solid var(--line-grey-light, #efe9ec);
`;

export const CategoryPageTitle = styled.h2`
  color: var(--text-grey-darker, #222121);
  font-family: Colgate Ready;
  font-size: 20px;
  text-transform: capitalize;
  font-style: normal;
  font-weight: 700;
  line-height: 40px; /* 200% */
  letter-spacing: -0.2px;
  max-width: 76rem;
  width: 100%;
  margin: 24px auto 0 auto;
  margin-top: 32px;
  margin-bottom: 16px;
  text-align: left;
`;

export const NotFoundWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 6.25rem auto;
  gap: 2rem;
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const LeftSide = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1 {
    color: var(--colgate-red-dark, #ee0400);
    font-family: Colgate Ready;
    font-size: 64px;
    font-style: normal;
    font-weight: 700;
    line-height: 72px; /* 112.5% */
  }

  span {
    color: var(--text-grey-darker, #222121);
    text-align: center;
    font-family: Colgate Ready;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px; /* 150% */
  }
`;

export const RightSide = styled.div`
  max-width: 24rem;
  height: 17rem;
  padding: 2rem;
  border-radius: 8px;
  background: var(--line-grey-lighter, #f5f5f5);

  span {
    color: var(--text-grey-darker, #222121);
    font-family: Colgate Ready;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: 24px;
    margin-bottom: 1rem;
    display: block;
  }

  li + li {
    margin-top: 1rem;
  }

  li {
    color: var(--text-grey-darker, #222121);
    font-family: Colgate Ready;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
    display: flex;
    align-items: center;
    list-style: none;

    &::before {
      content: url('data:image/svg+xml,<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="24" height="24" rx="12" fill="white"/><path d="M16.1251 9.375L10.4532 14.625L7.87512 12.2386" stroke="%2301A292" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>');
      margin-right: 0.875rem;
      position: relative;
      top: 5px;
    }
  }
`;
