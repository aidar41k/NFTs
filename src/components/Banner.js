import React from "react";
import styled from "styled-components";
import carousel from "../imports/carousel";

const Section = styled.section`
  width: 100%;
  height: 25rem;
  position: relative;
  border-top: 2px solid ${(props) => props.theme.text};
  background-color: ${(props) => `rgba(${props.theme.textRgba}, 0.9)`};
  display: flex;
  justify-content: space-around;
  align-items: center;

  overflow: hidden;
`;
const ImgContainer = styled.div`
  width: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0.2;

  img {
    width: 15rem;
    height: auto;
  }
`;
const Title = styled.h2`
  font-size: ${(props) => props.theme.fontxxxl};
  color: ${(props) => props.theme.body};
  padding: 1rem 2rem;
  z-index: 10;
  text-transform: capitalize;
`;
const BtnContainer = styled.div`
  width: 35%;
  display: flex;
  justify-content: center;
`;
const ButtonJoin = styled.button`
  display: inline-block;
  background-color: ${(props) => props.theme.body};
  color: ${(props) => props.theme.text};
  outline: none;
  border: none;
  z-index: 10;
  font-size: ${(props) => props.theme.fontsm};
  padding: 0.9rem 2.3rem;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    transform: scale(0.9);
  }

  &::after {
    content: " ";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(0);
    border: 2px solid ${(props) => props.theme.body};
    width: 100%;
    height: 100%;
    border-radius: 50px;
    transition: all 0.2s ease;
  }
  &:hover::after {
    transform: translate(-50%, -50%) scale(1);
    padding: 0.3rem;
  }
`;
const Banner = () => {
  return (
    <Section>
      <ImgContainer>
        {carousel.slice(0, 6).map(({ name, path }) => (
          <img key={name} src={path} alt="saadsadda" />
        ))}
      </ImgContainer>
      <Title>
        Join The <br /> weirdos club
      </Title>
      <BtnContainer>
        <ButtonJoin>Join now</ButtonJoin>
      </BtnContainer>
    </Section>
  );
};

export default Banner;
