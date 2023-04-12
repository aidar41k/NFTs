import React from "react";
import styled from "styled-components";
import Banner from "./Banner";
import Logo from "./Logo";
import Facebook from "../Icons/Facebook";
import Instagram from "../Icons/Instagram";
import LinkedIn from "../Icons/LinkedIn";
import Twitter from "../Icons/Twitter";
const Section = styled.section`
  min-height: 100vh;
  height: 100vh;
  width: 100vw;
  background-color: ${(props) => props.theme.body};
  position: relative;
  color: ${(props) => props.theme.text};

  display: flex;
  flex-direction: column;
`;
const Container = styled.div`
  width: 75%;
  margin: 2rem auto;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid ${(props) => props.theme.text};
`;

const Left = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const IconList = styled.div`
  display: flex;
  align-items: center;
  margin: 2rem auto;

  & > * {
    padding-right: 1rem;
    transition: all 0.2s ease;
  }
 
  a:hover {
    transform: scale(1.2);
  }
`;

const Footer = () => {
  return (
    <Section>
      <Banner />
      <Container>
        <Left>
          <Logo />

          <IconList>
            <a href="https://facebook.com" target="blank" rel="noopener">
              <Facebook />
            </a>

            <a href="https://www.linkedin.com" target="blank" rel="noopener">
              <LinkedIn />
            </a>
            <a href="https://www.instagram.com" target="blank" rel="noopener">
              <Instagram />
            </a>
            <a
              href="https://twitter.com/?lang=ru"
              target="blank"
              rel="noopener"
            >
              <Twitter />
            </a>
          </IconList>
        </Left>
      </Container>
    </Section>
  );
};

export default Footer;
