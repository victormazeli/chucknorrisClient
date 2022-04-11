import React from "react";
import {
  Bottom,
  FooterContainer,
  FooterImg,
  FooterText,
  FooterTextBox,
} from "./footer.elements";
import arrow from "../../assets/images/path.png";

export default function Footer() {
  return (
    <Bottom>
      <FooterContainer>
        <FooterTextBox>
          <FooterText>
            get jokes ? get paid <br /> for submit
          </FooterText>
          <FooterText primary>
            submit jokes <FooterImg src={arrow} />
          </FooterText>
        </FooterTextBox>
      </FooterContainer>
    </Bottom>
  );
}
