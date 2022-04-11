import React, { useState } from "react";
import {
  Box,
  Container,
  MobileIcon,
  Navbar,
  NavDropdown,
  NavDropdownList,
  NavIcons,
  NavItems,
  TopHeader,
} from "./header.elements";
import { FaBars, FaTimes } from "react-icons/fa";
import shape from "../../assets/images/shape.png";
import dropDown from "../../assets/images/path_2.png";
import { Link } from "react-router-dom";

export default function Header() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const [mobileClick, setMobileClick] = useState(false);
  const btnClick = () => setMobileClick(!mobileClick);

  return (
    <TopHeader>
      <Container>
        <MobileIcon onClick={btnClick}>
          {mobileClick ? <FaTimes /> : <FaBars />}
        </MobileIcon>
        <Navbar onClick={btnClick} mobileClick={mobileClick}>
          <NavItems onClick={closeMobileMenu}>
            <Link to="/">so funktioniert's</Link>
          </NavItems>
          <NavItems onClick={closeMobileMenu}>sonderangbote</NavItems>
          <NavItems primary onClick={handleClick} click={click}>
            <Box>
              <NavIcons src={shape} alt="" />
              sonderangbote
            </Box>
            <Box>
              <NavIcons src={dropDown} />
            </Box>
            <NavDropdown onClick={handleClick} click={click}>
              <NavDropdownList onClick={closeMobileMenu}>
                My published jokes
              </NavDropdownList>
              <NavDropdownList onClick={closeMobileMenu}>
                my saved jokes
              </NavDropdownList>
              <NavDropdownList onClick={closeMobileMenu}>
                Account information
              </NavDropdownList>
              <NavDropdownList onClick={closeMobileMenu} primary>
                Publish new jokes
              </NavDropdownList>
            </NavDropdown>
          </NavItems>
        </Navbar>
      </Container>
    </TopHeader>
  );
}
