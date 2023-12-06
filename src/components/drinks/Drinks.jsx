import styled from "styled-components";

import Left from "./components/Left";
import Right from "./components/Right";

const Title = styled.h1`
  font-size: 50px;
  color: #e2e2a1;
  z-index: 1;
  font-weight: 300;

  @media (max-width: 768px) {
    text-align: center;
    font-size: 40px;
  }
`;

const Image = styled.img`
  height: 540px;
  width: 380px;

  @media (max-width: 768px) {
    height: 390px;
    width: 240px;
  }
`;

const Middle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 33%;

  @media (max-width: 768px) {
    padding-top: 20px;
    width: 90%;
  }
`;

const Container = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  min-height: 100vh;
  max-width: 1400px;
  justify-content: space-evenly;
  color: white;
  background-color: #0a0a0a;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    border-bottom: 1px solid #3d3d3d;
    padding: 20px 0px;
  }
`;

const Drinks = () => {
  return (
    <Container>
      <Left />
      <Middle>
        <Title>Today's special</Title>
        <Image src="./drinks.png" />
      </Middle>
      <Right />
    </Container>
  );
};

export default Drinks;
