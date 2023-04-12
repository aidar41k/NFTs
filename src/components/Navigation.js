import React from "react";
import styled from "styled-components";
import Logo from "./Logo";
import Button from "./Button";

const Section = styled.section`
  width: 100%;
  background-color: ${(props) => props.theme.body};
`;
const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 85%;
  height: ${(props) => props.theme.navHeight};
  margin: 0 auto;
`;

const Menu = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  list-style: none;
`;
const MenuItems = styled.li`
  margin: 0 1rem;
  color: ${(props) => props.theme.text};
  cursor: pointer;

  &::after {
    content: "";
    display: block;
    width: 0%;
    height: 2px;
    background: ${props => props.theme.text};
    transition: width 0.3s ease;
  }

  &:hover::after {
    width: 100%;
  }
`;
const Navigation = () => {
  return (
    <div>
      <Section>
        <Navbar>
          <Logo />
          <Menu>
            <MenuItems>Home</MenuItems>
            <MenuItems>About</MenuItems>
            <MenuItems>Showcase</MenuItems>
            <MenuItems>Faq</MenuItems>
            <MenuItems>Home</MenuItems>
          </Menu>
         <Button text='Connect Wallet' link='https://google.com'/>
        </Navbar>
      </Section>
    </div>
  );
};

export default Navigation;
