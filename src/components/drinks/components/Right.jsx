import styled from "styled-components";

import { cocktails } from "./datas";

const Ingredients = styled.p`
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  font-size: 14px;
  opacity: 0.7;
  margin: 5px 0px;
`;

const Price = styled.div`
  color: white;
  display: flex;
  align-items: center;
`;

const Line = styled.div`
  height: 1px;
  background: white;
  width: 80px;
  margin-right: 10px;

  @media (max-width: 400px) {
    width: 40px;
  }
`;

const Name = styled.h4`
  color: #e2e2a1;
  margin: 0px;
`;

const NamePrice = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
`;

const ItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Title = styled.h1`
  font-size: 40px;
  font-weight: lighter;
  color: white;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 25%;
  gap: 40px;

  @media (max-width: 768px) {
    padding-top: 40px;
    width: 90%;
  }
`;

const Right = () => {
  return (
    <Container>
      <Title style={{ margin: "20px 0px" }}>Cocktails</Title>
      {cocktails.map((item, idx) => {
        return (
          <ItemContainer key={idx}>
            <NamePrice>
              <Name>{item.drink}</Name>
              <Price>
                <Line />
                {item.price}
              </Price>
            </NamePrice>
            <Ingredients>{item.ingredients}</Ingredients>
          </ItemContainer>
        );
      })}
    </Container>
  );
};

export default Right;
