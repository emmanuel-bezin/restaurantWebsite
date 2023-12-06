import styled from "styled-components";

const Image = styled.img`
  height: 530px;
  width: 470px;

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
  width: 45%;
`;

const Right = () => {
  return (
    <Container>
      <Image src="/chicken.png" />
    </Container>
  );
};

export default Right;
