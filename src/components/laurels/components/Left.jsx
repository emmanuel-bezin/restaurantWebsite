import styled from "styled-components";

import laurels from "./data";

const CommentTitle = styled.p`
  margin: 0px;
`;

const ItemContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const ItemsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Title = styled.h1`
  font-size: 50px;

  @media (max-width: 768px) {
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
  gap: 20px;

  @media (max-width: 768px) {
    width: 100%;
    align-items: center;
  }
`;

const Left = () => {
  return (
    <Container>
      <p style={{ fontSize: 18, margin: 0 }}>Awards & Recognition</p>
      <Spoon src="/spoon.svg" />
      <Title style={{ margin: "20px 0px", color: "#e2e2a1" }}>
        Our Laurels
      </Title>
      <ItemsContainer>
        {laurels.map((item, idx) => {
          return (
            <ItemContainer key={idx}>
              <img
                style={{ height: 40, width: 40, marginRight: 10 }}
                src={item.image}
              />
              <div style={{ display: "flex", flexDirection: "column", gap: 5 }}>
                <CommentTitle style={{ color: "#e2e2a1" }}>
                  {item.title}
                </CommentTitle>
                <CommentTitle>{item.comments}</CommentTitle>
              </div>
            </ItemContainer>
          );
        })}
      </ItemsContainer>
    </Container>
  );
};

export default Left;
