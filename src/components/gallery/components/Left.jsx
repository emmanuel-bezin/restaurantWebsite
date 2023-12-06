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
  margin-bottom: 10px;

  @media (max-width: 768px) {
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
  flex-direction: column;
  padding-left: 40px;
  width: 45%;
  height: 100%;

  @media (max-width: 768px) {
    padding-left: 0px;
    width: 100%;
    align-items: center;
    margin-bottom: 20px;
  }
`;

const Left = () => {
  return (
    <Container>
      <p style={{ fontSize: 18, margin: 0 }}>Instagram</p>
      <Spoon src="/spoon.svg" />
      <Title style={{ margin: "20px 0px", color: "#e2e2a1" }}>
        Photo Gallery
      </Title>
      <Text style={{ fontSize: 18, fontWeight: "300" }}>
        Come see the pictures some of our best customers took in our restaurant
        !
      </Text>
      <ExploreButton>View More</ExploreButton>
    </Container>
  );
};

export default Left;
