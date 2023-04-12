import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
const LogoText = styled.h1`
  font-family: "Akaya Telivigala", cursive;
  font-size: ${(props) => props.theme.fontxxxl};
  /* color: ${(props) => props.theme.text};  */
  color: #455A64; 
  transition: all 0.2s ease;
  &:hover {
    transform: scale(1.1);
  }
`;

const Logo = () => {
  return (
    <div>
       
      <LogoText>
        <Link to="/">Top</Link>
      </LogoText>
    </div>
  );
};

export default Logo;
