import styled, { css } from "styled-components";
import footerBg from "../../assets/images/footerBg.png";

export const Bottom = styled.footer`
  height: 20vh;
  width: 100%;
  background-size: cover;
  background-position: center;
  background: url(${footerBg});
  margin-bottom: 4em;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FooterContainer = styled.div`
  width: 70vw;
  display: flex;
  justify-content: flex-start;
`;

export const FooterTextBox = styled.div`
  height: 90%;
`;

export const FooterText = styled.h3`
  font-size: 13px;
  font-weight: 500;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.white};

  ${(props) =>
    props.primary &&
    css`
      margin-top: 10px;
      color: ${({ theme }) => theme.colors.lightBrown};
      cursor: pointer;
    `};
`;

export const FooterImg = styled.img`
  margin-left: 5px;
`;
