import styled from "styled-components";

import Top from "./components/Top";
import Bottom from "./components/Bottom";

const Container = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  min-height: 100vh;
  max-width: 1400px;
  justify-content: space-evenly;
  flex-direction: column;
  color: white;
  background: url("./bg.png");

  @media (max-width: 768px) {
    padding: 40px 0px;
  }
`;

const Contact = () => {
  return (
    <Container id="Contact">
      <Top />
      <Bottom />
    </Container>
  );
};

export default Contact;
