import styled, { css } from "styled-components";

export const MainBox = styled.main`
  width: 100%;
  min-height: 80vh;
  background-color: ${({ theme }) => theme.colors.white};
  padding: 3rem 0;
  overflow: hidden;

  @media (max-width: ${({ theme }) => theme.sizes.smDesktop}) {
    padding: 1rem;
  }

  @media (max-width: ${({ theme }) => theme.sizes.tablet}) {
    padding: 0.6rem;
  }
`;

export const BoxTitle = styled.div`
  margin: 40px 0;
  width: 90vw;
  border-top: 1px solid #666;
`;

export const BoxTitleText = styled.p`
  padding-top: 5px;
  background-color: green;
  border-radius: 30px;
  padding: 5px;
  text-align: center;
  width: 100px;
  color: ${({ theme }) => theme.colors.white};
  font-size: 13px;
`;

export const ContentBox = styled.div`
  width: 70vw;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  gap: 10px;

  @media (max-width: ${({ theme }) => theme.sizes.smDesktop}) {
    width: 90vw;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 20px;
  }

  @media (max-width: ${({ theme }) => theme.sizes.tablet}) {
    width: 90vw;
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }

  ${(props) =>
    props.primary &&
    css`
      grid-template-columns: 1fr 1fr 1fr;

      @media (max-width: ${({ theme }) => theme.sizes.smDesktop}) {
        grid-template-columns: 1fr 1fr;
      }

      @media (max-width: ${({ theme }) => theme.sizes.tablet}) {
        grid-template-columns: 1fr;
      }
    `};
`;
