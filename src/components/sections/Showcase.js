import React, { useLayoutEffect, useRef } from "react";
import styled, { keyframes } from "styled-components";
import carousel from "../../imports/carousel";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { gsap } from "gsap-trial";

const Section = styled.section`
  min-height: 100vh;
  width: 100vw;
  background-color: ${(props) => props.theme.text};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const move = keyframes`
0%{ transform: translate(100%)};
100%{transform: translate(-100%)}
`;

const Row = styled.div`
  white-space: nowrap;
  box-sizing: content-box;
  margin: 2rem 0;
  display: flex;

  animation: ${move} 20s linear infinite ${(props) => props.direction};

  /* div {
    width: 5rem;
    height: 5rem;
    margin: 2rem;
    background-color: red;
  } */
`;
const ImgContainer = styled.div`
  width: 15rem;
  margin: 0 1rem;
  background-color: ${(props) => props.theme.body};

  border-radius: 20px;
  cursor: pointer;

  img {
    width: 100%;
    height: auto;
  }
`;

const Details = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0.8rem 1rem;
  background-color: ${(props) => props.theme.text};
`;
const NftItem = ({ img, number = 0, price = 0 }) => {
  return (
    <ImgContainer>
      <img src={img} alt="The Weirdos" />
      {/* <Details>
        <div>
          <span>Weirdos</span>
          <h1>#{number}</h1>
        </div>
        <div>
          <span>Price</span>
          <h1>{Number(price).toFixed(1)}</h1>
        </div>
      </Details> */}
    </ImgContainer>
  );
};
const Showcase = () => {

  const ref = useRef(null);
  gsap.registerPlugin(ScrollTrigger);

  useLayoutEffect(() => {
    let element = ref.current;
    ScrollTrigger.create({
      trigger: element,
      start: "top top",
      end: "bottom top",
      pin: true,
      pinSpacing: false,
      scrub: true,
    });

    return () => {
    ScrollTrigger.kill()
    };
  }, []);

  return (
    <Section ref={ref}>
      <Row direction="none">
        {carousel.slice(0, 5).map(({ path, name }) => (
          <NftItem key={name} img={path} />
        ))}
      </Row>
      <Row direction="reverse">
        {carousel.slice(5).map(({ path, name }) => (
          <NftItem key={name} img={path} />
        ))}
      </Row>
    </Section>
  );
};

export default Showcase;
