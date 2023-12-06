import styled from "styled-components";

import Left from "./components/Left";
import Right from "./components/Right";

const Container = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  min-height: 100vh;
  max-width: 1400px;
  justify-content: space-evenly;
  align-items: center;
  color: white;
  background: url("./bg.png");

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    border-bottom: 1px solid #3d3d3d;
    padding: 40px 0px;
  }
`;

const Beliefs = () => {
  return (
    <Container>
      <Left />
      <Right />
    </Container>
  );
};

export default Beliefs;
