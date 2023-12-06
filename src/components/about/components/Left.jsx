import styled from "styled-components";

const ExploreButton = styled.button`
  outline: none;
  cursor: pointer;
  padding: 10px 20px;
  border: none;
  font-family: "Times New Roman", Times, serif;
  font-size: 15px;
  background-color: #d3d3b6;
  margin-left: auto;
  border: 1px solid;

  &:hover {
    background-color: black;
    color: #d3d3b6;
    border: 1px solid #d3d3b6;
  }
`;

const Text = styled.p`
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  text-align: end;
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
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  flex-direction: column;
  width: 45%;
  z-index: 1;

  @media (max-width: 768px) {
    width: 70%;
  }
`;

const Left = () => {
  return (
    <Container>
      <Title style={{ margin: "20px 0px", color: "#e2e2a1" }}>About Us</Title>
      <Spoon src="/spoon.svg" />
      <Text style={{ fontSize: 18, fontWeight: "300" }}>
        We are a high quality restaurant and we want to reach excellence in each
        dish we make for you. We cook only with seasonal ingredients adn all of
        our products are local.
      </Text>
      <ExploreButton>Know More</ExploreButton>
    </Container>
  );
};

export default Left;
