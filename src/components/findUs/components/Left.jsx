import styled from "styled-components";

const OpenHours = styled.p`
  margin: 0px;
  color: #e2e2a1;
  font-family: "Times New Roman", Times, serif;
  font-size: 20px;
  font-weight: 300;
`;

const Text = styled.p`
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    margin-bottom: 20px;
    text-align: center;
  }
`;

const Title = styled.h1`
  font-size: 50px;
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
    padding: 20px 0px;
  }
`;

const Left = () => {
  return (
    <Container>
      <p style={{ fontSize: 18, margin: 0 }}>Where & When</p>
      <Spoon src="/spoon.svg" />
      <Title style={{ margin: "20px 0px", color: "#e2e2a1" }}>Find Us</Title>
      <Text style={{ fontSize: 18, fontWeight: "300" }}>
        Lane Ends Bungalow, Whatcroft Hall Lane, Rudheath, CW9 7SG
      </Text>
      <OpenHours>Opening hours</OpenHours>
      <Text style={{ marginBottom: 0 }}>Mon - Fri:10:00 Am - 02:00 Am</Text>
      <Text style={{ marginBottom: 0 }}>Sat - Sun:10:00 Am - 03:00 Am</Text>
    </Container>
  );
};

export default Left;
