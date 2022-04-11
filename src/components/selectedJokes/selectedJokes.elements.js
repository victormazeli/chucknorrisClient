import styled, { css } from "styled-components";

export const MainBox = styled.main`
  height: 70vh;
  width: 70vw;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: ${({ theme }) => theme.sizes.tablet}) {
    width: 100%;
    padding: 0.5rem;
  }
`;

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`;

export const MainCardBox = styled.div`
  width: 600px;
  height: 100%;
  border: 1px solid ${({ theme }) => theme.colors.lightBrown};
  padding: 3rem;

  @media (max-width: ${({ theme }) => theme.sizes.ipad}) {
    width: 80vw;
    height: 80%;
    margin: 0 auto;
    padding: 1rem;
  }
`;

export const MainFlex = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const MainFlexBtn = styled.button`
  border: none;
  width: 150px;
  height: 20px;
  font-weight: 700;
  background-color: green;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.white};
  border-radius: 30px;

  ${(props) =>
    props.primary &&
    css`
      background-color: transparent;
      color: #f9d19a;
    `};
`;

export const Box = styled.div`
  width: 70%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: ${({ theme }) => theme.sizes.tablet}) {
    /* padding: 0.6rem; */
    width: 100%;
  }
`;

export const MainBoxContent = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
`;

export const MainBoxBigText = styled.h1`
  font-size: 40px;
  text-transform: capitalize;
  color: #d2bd9b;
  font-weight: 500;

  @media (max-width: ${({ theme }) => theme.sizes.smDesktop}) {
    font-size: 30px;
  }

  @media (max-width: ${({ theme }) => theme.sizes.tablet}) {
    font-size: 25px;
  }
`;

export const MainBoxSmallText = styled.p`
  font-size: 14px;
  color: #666;
  line-height: 1.7;
`;

export const Something = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const SubCardBox = styled.div`
  flex: 1;
  height: 60%;
  border: 1px solid ${({ theme }) => theme.colors.lightBrown};
  padding: 1rem;
`;

export const Another = styled.div`
  display: flex;
  margin-top: 20px;
  ${(props) =>
    props.primary &&
    css`
      flex-direction: column;
      margin-left: 20px;
    `};
`;

export const Button = styled.button`
  height: 40px;
  padding: 0 30px;
  margin-left: 20px;
  border: none;
  background: none;
  border: 1px solid ${({ theme }) => theme.colors.lightBrown};
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: ${({ theme }) => theme.colors.lightBrown};
  font-weight: 500;
  text-transform: uppercase;
  cursor: pointer;

  @media (max-width: ${({ theme }) => theme.sizes.smDesktop}) {
    padding: 0 20px;
  }

  @media (max-width: ${({ theme }) => theme.sizes.tablet}) {
    padding: 0 10px;
  }
`;

export const ImageThumbBox = styled.div`
  height: 50px;
  width: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #68b680;
  border-radius: 50%;
  cursor: pointer;

  :hover {
    background-color: #46905d;
  }

  ${(props) =>
    props.primary &&
    css`
      background-color: #ff3750;
      :hover {
        background-color: #be293b;
      }
    `};
`;

export const ImageThumb = styled.img`
  width: 25px;
  height: 25px;
  object-fit: contain;
`;

export const ImageSpan = styled.span`
  display: block;
  text-align: center;
  color: #68b680;
  font-size: 14px;
  :hover {
    color: #46905d;
  }
`;
