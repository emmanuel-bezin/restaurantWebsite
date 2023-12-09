import styled from "styled-components";

import Left from "./components/Left";
import Right from "./components/Right";

const Container = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  min-height: 100vh;
  max-width: 1400px;
  justify-content: center;
  color: white;
  background-color: #0a0a0a;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    border-bottom: 1px solid #3d3d3d;
    border-top: 1px solid #3d3d3d;
  }
`;

const FindUs = () => {
  return (
    <Container id="Find Us">
      <Left />
      <Right />
    </Container>
  );
};

export default FindUs;
