import styled from "styled-components";

const ExploreButton = styled.button`
  outline: none;
  cursor: pointer;
  padding: 10px 20px;
  border: none;
  font-family: "Times New Roman", Times, serif;
  font-size: 15px;
  background-color: #d3d3b6;
  margin-right: auto;
  border: 1px solid;

  &:hover {
    background-color: black;
    color: #d3d3b6;
    border: 1px solid #d3d3b6;
  }
`;

const Text = styled.p`
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  text-align: start;
`;

const Title = styled.h1`
  font-size: 60px;
  @media (max-width: 768px) {
    font-size: 40px;
  }
`;

const Spoon = styled.img`
  height: 12px;
  margin-bottom: 10px;
  transform: scaleX(-1);
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  width: 45%;
  z-index: 1;

  @media (max-width: 768px) {
    width: 70%;
  }
`;

const Right = () => {
  return (
    <Container>
      <Title style={{ margin: "20px 0px", color: "#e2e2a1" }}>
        Our History
      </Title>
      <Spoon src="/spoon.svg" />
      <Text style={{ fontSize: 18, fontWeight: "300" }}>
        Our restaurant has been thriving since 1987. It started with a simple
        concept : excellence. After a few years of hard work, we got our first
        michelin star. We are now world famous, and you can find us in the guide
        Michelin.
      </Text>
      <ExploreButton>Learn More</ExploreButton>
    </Container>
  );
};

export default Right;
