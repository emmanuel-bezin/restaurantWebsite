import styled from "styled-components";
import { BiSolidQuoteAltLeft } from "react-icons/bi";

const Signature = styled.img`
  height: 120px;

  @media (max-width: 400px) {
    height: 80px;
  }
`;

const Name = styled.h4`
  color: #e2e2a1;
  font-weight: 300;
  margin-bottom: 0px;
`;

const QuoteMark = styled(BiSolidQuoteAltLeft)`
  margin-right: 5px;
`;

const Text = styled.p`
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;

  /* @media (max-width: 768px) {
    margin-bottom: 20px;
    text-align: center;
  } */
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
  width: 40%;

  @media (max-width: 768px) {
    width: 90%;
    align-items: center;
    margin-bottom: 20px;
  }
`;

const Right = () => {
  return (
    <Container>
      <p style={{ fontSize: 18, margin: 0 }}>Chef's word</p>
      <Spoon src="/spoon.svg" />
      <Title style={{ margin: "20px 0px", color: "#e2e2a1" }}>
        What We Belive In
      </Title>
      <Text style={{ fontSize: 18, fontWeight: "300" }}>
        <QuoteMark size={40} />
        We want our restaurant to show everyone that food can be more than just
        a dish you enjoy. Food can bring memories back. Food can trirgger
        emotions. Food can be life-changing.
      </Text>
      <Name>Kevin Luo</Name>
      <Text style={{ marginTop: 5 }}>Chef & Founder</Text>
      <Signature src="./sign.png" />
    </Container>
  );
};

export default Right;
