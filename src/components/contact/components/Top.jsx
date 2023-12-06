import styled from "styled-components";

const ExploreButton = styled.button`
  position: relative;
  outline: none;
  cursor: pointer;
  padding: 10px 20px;
  border: none;
  font-family: "Times New Roman", Times, serif;
  font-size: 15px;
  background-color: #d3d3b6;
  border: 1px solid;

  &:hover {
    background-color: black;
    color: #d3d3b6;
    border: 1px solid #d3d3b6;
  }
`;

const EmailInput = styled.input`
  background: #0a0a0a;
  width: 70%;
  padding: 10px;
  outline: none;
  border: 1px solid white;
  color: white;
  font-size: 15px;

  @media (max-width: 768px) {
    margin-bottom: 10px;
  }
`;

const InputButton = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
  margin-top: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Text2 = styled.p`
  margin: 0px;
  font-size: 18px;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
`;

const Text = styled.p`
  margin: 0px;
  font-size: 18px;
`;

const SubscribeTitle = styled.h1`
  margin: 0px;
  color: #e2e2a1;
  font-size: 50px;
  font-weight: 300;

  @media (max-width: 768px) {
    font-size: 30px;
    text-align: center;
  }
`;

const NewsletterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  min-height: 200px;
  border: 1px solid #e2e2a1;
  padding: 30px 10px;
  flex-direction: column;
  background: #0a0a0a;
  min-width: 700px;

  @media (max-width: 768px) {
    min-width: auto;
    width: 90%;
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    margin-bottom: 20px;
  }
`;

const Top = () => {
  return (
    <Container>
      <NewsletterContainer>
        <Text>Newsletter</Text>
        <img src="./spoon.svg" />
        <SubscribeTitle>Subscribe to our newsletter</SubscribeTitle>
        <Text2>Never miss our latest Updates !</Text2>
        <InputButton>
          <EmailInput placeholder="Enter your e-mail address" />
          <ExploreButton>Subscribe</ExploreButton>
        </InputButton>
      </NewsletterContainer>
    </Container>
  );
};

export default Top;
