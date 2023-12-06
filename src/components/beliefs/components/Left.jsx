import styled from "styled-components";

const Image = styled.img`
  height: 530px;

  @media (max-width: 1100px) {
    height: 430px;
    width: 340px;
  }

  @media (max-width: 768px) {
    height: 300px;
    width: 240px;
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 40%;

  @media (max-width: 768px) {
    margin-bottom: 20px;
  }
`;

const Left = () => {
  return (
    <Container>
      <Image src="/chef.png" />
    </Container>
  );
};

export default Left;
