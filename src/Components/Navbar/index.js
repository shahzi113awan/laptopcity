import React from "react";
import { FaBars } from "react-icons/fa";
import {
  Navv,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavLinks,
  NavItem,
  NavMenue,
} from "./NavbarElements";

const index = () => {
  return (
    <>
      <Navv>
        <NavbarContainer>
          <NavLogo>LaptopCity</NavLogo>
          <MobileIcon>
            <FaBars />
          </MobileIcon>
          <NavMenue>
            <NavItem>
              <NavLinks to="about">About</NavLinks>
            </NavItem>
          </NavMenue>
        </NavbarContainer>
      </Navv>
    </>
  );
};

export default index;
