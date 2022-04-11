import styled, { css } from "styled-components";

export const Card = styled.div`
  height: 200px;
  background-color: ${({ theme }) => theme.colors.white};
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  cursor: pointer;

  :hover {
    box-shadow: 0 5px 7px 0 rgba(0, 0, 0, 0.15);
  }
`;

export const CardTitle = styled.h4`
  font-weight: 800;
  font-size: 14px;
  text-transform: uppercase;
  display: flex;
  align-items: center;
`;

export const CardText = styled.p`
  font-weight: 500;
  color: ${({ theme }) => theme.colors.gray};
  font-size: 13px;
  margin-top: 10px;
`;

export const StatBox = styled.div`
  position: absolute;
  bottom: 0.5rem;
  right: 1rem;
  color: ${({ theme }) => theme.colors.lightBrown};
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const StatText = styled.p`
  font-weight: 700;
  text-transform: uppercase;
  font-size: 14px;
`;

export const StatImg = styled.img`
  margin-left: 5px;

  ${(props) =>
    props.primary &&
    css`
      margin-right: 5px;
    `};
`;
