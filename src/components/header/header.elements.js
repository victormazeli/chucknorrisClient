import styled, { css } from "styled-components";

export const TopHeader = styled.header`
  width: 100%;
  height: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${({ theme }) => theme.colors.dark};
  color: ${({ theme }) => theme.colors.white};

  @media (max-width: ${({ theme }) => theme.sizes.smDesktop}) {
    height: 3rem;
  }
`;

export const Container = styled.nav`
  width: 85vw;
  height: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: flex-end;
  padding-right: 3rem;

  @media (max-width: ${({ theme }) => theme.sizes.smDesktop}) {
    width: 100%;
    justify-content: space-between;
    align-items: center;
    margin: 0;
    padding: 0 0.5rem;
  }

  @media (max-width: ${({ theme }) => theme.sizes.tablet}) {
    width: 100vw;
  }
`;

export const MobileIcon = styled.div`
  display: none;

  @media (max-width: ${({ theme }) => theme.sizes.ipad}) {
    position: absolute;
    display: block;
    margin-right: 1rem;
    right: 1rem;
  }
`;

export const Navbar = styled.ul`
  list-style: none;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 50%;
  z-index: 999;

  @media (max-width: ${({ theme }) => theme.sizes.ipad}) {
    position: absolute;
    width: 100%;
    height: 45vh;
    top: 3rem;
    left: ${({ mobileClick }) => (mobileClick ? 0 : "-100%")};
    flex-direction: column;
    align-items: center;
    justify-content: initial;
    transition: all ease-in-out 0.6s;
    background-color: ${({ theme }) => theme.colors.dark};
  }
`;

export const NavItems = styled.li`
  font-size: 13px;
  text-transform: uppercase;
  height: 19px;
  width: 190px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
  cursor: pointer;

  @media (max-width: ${({ theme }) => theme.sizes.smDesktop}) {
    font-size: 12px;
    flex: 1;
    display: flex;
    justify-content: center;
  }

  @media (max-width: ${({ theme }) => theme.sizes.ipad}) {
    flex: 0;
    height: 80px;
    padding: 20px 0;
    width: 90%;
    margin-top: 10px;
  }

  ${(props) =>
    props.primary &&
    css`
      background: ${({ theme }) => theme.colors.lightBrown};
      height: 100%;
      position: relative;
    `};
`;

export const Box = styled.div`
  display: flex;
`;

export const NavIcons = styled.img`
  display: flex;
  margin-right: 5px;
`;

export const NavDropdown = styled.ul`
  height: 200px;
  width: 100%;
  background: ${({ theme }) => theme.colors.white};
  position: absolute;
  top: 4.7rem;
  left: 0;
  list-style: none;
  padding: 0.4rem;
  visibility: ${({ click }) => (click ? "visible" : "hidden")};
  border-radius: 5px;

  @media (max-width: ${({ theme }) => theme.sizes.smDesktop}) {
    height: 160px;
    padding: 0.6rem;
  }

  @media (max-width: ${({ theme }) => theme.sizes.tablet}) {
    font-size: 10px;
    width: 100%;
  }
`;

export const NavDropdownList = styled.li`
  color: ${({ theme }) => theme.colors.gray};
  border-bottom: 0.1rem solid ${({ theme }) => theme.colors.gray};
  height: 35px;
  display: flex;
  align-items: center;
  font-size: 12px;
  margin-top: 10px;

  @media (max-width: ${({ theme }) => theme.sizes.smDesktop}) {
    height: 20px;
  }

  @media (max-width: ${({ theme }) => theme.sizes.tablet}) {
    height: 20px;
  }

  ${(props) =>
    props.primary &&
    css`
      color: ${({ theme }) => theme.colors.lightBrown};
      font-weight: 600;
    `};
`;
