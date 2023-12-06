import { useState } from "react";
import styled from "styled-components";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

import Left from "./components/Left";
import Right from "./components/Right";

const RightArrow = styled(FaArrowRight)`
  cursor: pointer;

  &:hover {
    opacity: 0.5;
  }
`;

const LeftArrow = styled(FaArrowLeft)`
  cursor: pointer;

  &:hover {
    opacity: 0.5;
  }
`;

const RightArrowContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: black;
  border-radius: 4px;
  padding: 5px;
`;

const LeftArrowContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: black;
  border-radius: 4px;
  padding: 5px;
  margin-bottom: 1px;
`;

const ChildContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 60%;
  width: 100%;
  background: #0a0a0a;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    margin-bottom: 20px;
    height: auto;
    padding: 10px 0px;
  }
`;

const Container = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  height: 100vh;
  max-width: 1400px;
  align-items: center;
  justify-content: center;
  color: white;
  background: url("./bg.png");

  @media (max-width: 768px) {
    margin-top: 20px;
  }
`;

const Gallery = () => {
  const [translatePx, setTranslatePx] = useState(148);

  const handleSlideRight = () => {
    if (translatePx < 150) {
      setTranslatePx(translatePx + 221);
    }
  };

  const handleSlideLeft = () => {
    if (translatePx > -293) {
      setTranslatePx(translatePx - 221);
    }
  };

  return (
    <Container>
      <ChildContainer>
        <Left />
        <div>
          <LeftArrowContainer>
            <LeftArrow size={20} onClick={handleSlideLeft} />
          </LeftArrowContainer>
          <RightArrowContainer>
            <RightArrow size={20} onClick={handleSlideRight} />
          </RightArrowContainer>
        </div>
        <Right translatePx={translatePx} />
      </ChildContainer>
    </Container>
  );
};

export default Gallery;
