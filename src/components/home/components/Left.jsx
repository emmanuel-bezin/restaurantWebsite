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

  @media (max-width: 768px) {
    margin: auto;
  }
`;

const Text = styled.p`
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  margin-bottom: 50px;

  @media (max-width: 768px) {
    margin-bottom: 20px;
    text-align: center;
  }
`;

const Title = styled.h1`
  font-size: 60px;
  @media (max-width: 768px) {
    text-align: center;
    font-size: 40px;
  }
`;

const Spoon = styled.img`
  height: 12px;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  width: 42%;

  @media (max-width: 768px) {
    width: 100%;
    align-items: center;
    margin-bottom: 20px;
  }
`;

const Left = () => {
  return (
    <Container>
      <p style={{ fontSize: 18, margin: 0 }}>Chase the new flavor</p>
      <Spoon src="/spoon.svg" />
      <Title style={{ margin: "20px 0px", color: "#e2e2a1" }}>
        THE KEY TO FINE DINING
      </Title>
      <Text style={{ fontSize: 18, fontWeight: "300" }}>
        Come to one of our locations and enjoy restaurant quality food from
        world-renowed chefs.
      </Text>
      <ExploreButton>Explore Menu</ExploreButton>
    </Container>
  );
};

export default Left;
