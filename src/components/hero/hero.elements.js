import styled from "styled-components";
import heroBg from "../../assets/images/herobg.png";

export const HeroBox = styled.section`
  height: 60vh;
  background: url(${heroBg});
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  padding: 0 50px;

  @media (max-width: ${({ theme }) => theme.sizes.smDesktop}) {
    height: 50vh;
    padding: 0 20px;
  }
  @media (max-width: ${({ theme }) => theme.sizes.tablet}) {
    height: 50vh;
    padding: 0 10px;
  }
`;

export const HeroTextBox = styled.div`
  width: 350px;
  height: 90px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (max-width: ${({ theme }) => theme.sizes.smDesktop}) {
    width: 300px;
    height: 50px;
    text-align: center;
  }

  @media (max-width: ${({ theme }) => theme.sizes.tablet}) {
    width: 300px;
    height: 50px;
  }
`;

export const HeroBigText = styled.h1`
  font-size: 48px;
  line-height: 1.5;
  color: ${({ theme }) => theme.colors.lightBrown};
  font-weight: 400;
  text-transform: capitalize;
  letter-spacing: normal;

  @media (max-width: ${({ theme }) => theme.sizes.smDesktop}) {
    font-size: 30px;
  }

  @media (max-width: ${({ theme }) => theme.sizes.tablet}) {
    font-size: 26px;
  }
`;

export const HeroSmallText = styled.p`
  font-size: 23px;
  color: ${({ theme }) => theme.colors.white};

  @media (max-width: ${({ theme }) => theme.sizes.smDesktop}) {
    font-size: 20px;
  }

  @media (max-width: ${({ theme }) => theme.sizes.tablet}) {
    font-size: 18px;
  }
`;

export const HeroSearchBox = styled.div`
  display: flex;
  align-items: center;
  padding-right: 10px;
  width: 400px;
  height: 40px;
  background: transparent;
  border: 2px solid ${({ theme }) => theme.colors.white};
  border-radius: 5px;
  position: relative;

  @media (max-width: ${({ theme }) => theme.sizes.smDesktop}) {
    width: 300px;
  }

  @media (max-width: ${({ theme }) => theme.sizes.tablet}) {
    width: 250px;
  }
`;

export const HeroSearchInput = styled.input`
  flex: 1;
  border: none;
  outline: none;
  background: none;
  padding: 0 10px;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.white};
`;

export const HeroSearchIcon = styled.img`
  display: flex;
  width: 20px;
  height: 20px;
  justify-content: center;
  align-items: center;
`;

export const HeroSearchItems = styled.ul`
  list-style: none;
  height: 200px;
  width: 400px;
  background-color: ${({ theme }) => theme.colors.white};
  position: absolute;
  top: 50px;
  overflow: hidden;
  overflow-y: auto;

  ::-webkit-scrollbar {
    display: none;
  }

  @media (max-width: ${({ theme }) => theme.sizes.smDesktop}) {
    width: 300px;
  }

  @media (max-width: ${({ theme }) => theme.sizes.tablet}) {
    width: 250px;
  }
`;

export const HeroSearchItem = styled.li`
  height: 50px;
  border-bottom: 1px solid #666;
  display: flex;
  align-items: center;
  color: #666;

  @media (max-width: ${({ theme }) => theme.sizes.smDesktop}) {
    height: 40px;
  }

  @media (max-width: ${({ theme }) => theme.sizes.tablet}) {
    height: 35px;
  }
`;

export const HeroSearchItemImg = styled.img`
  display: flex;
`;

export const HeroSearchItemText = styled.span`
  margin-left: 10px;
  text-align: justify;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

export const HeroCon = styled.div`
  flex: 1;
  display: flex;
`;
