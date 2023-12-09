import styled from "styled-components";

import Left from "./components/Left";
import Right from "./components/Right";

const G = styled.img`
  position: absolute;
  height: 300px;
  opacity: 0.6;

  @media (max-width: 768px) {
    height: 200px;
  }
`;

const Knife = styled.img`
  height: 540px;
  z-index: 1;

  @media (max-width: 768px) {
    height: 440px;
  }
`;

const Middle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;

  @media (max-width: 768px) {
    padding-top: 20px;
  }
`;

const Container = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  min-height: 100vh;
  max-width: 1400px;
  color: white;
  background: url("./bg.png");
  align-items: center;
  justify-content: space-between;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    border-bottom: 1px solid #3d3d3d;
    padding: 20px 0px;
  }
`;

const About = () => {
  return (
    <Container id="About">
      <Left />
      <Middle>
        <G src="./G.png" />
        <Knife src="./knife.png" />
      </Middle>
      <Right />
    </Container>
  );
};

export default About;
