import { useState } from "react";
import styled from "styled-components";
import { FaInstagram } from "react-icons/fa";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

import images from "./images";

const Instagram = styled(FaInstagram)`
  position: absolute;
`;

const Image = styled.img`
  cursor: pointer;
  height: 300px;
  width: 200px;

  &:hover {
    opacity: 0.7;
  }

  @media (max-width: 768) {
    height: 200px;
    width: 130px;
  }
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ImagesContainer = styled.div`
  display: flex;
  position: relative;
  align-items: flex-end;
  gap: 20px;
  transform: ${({ translatePx }) =>
    translatePx && `translate(${translatePx}px)`};
  transition: all 0.5s ease;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 45%;
  gap: 20px;
  height: 80%;
  overflow-x: hidden;
  border-left: 2px solid #3d3d3d;

  @media (max-width: 768px) {
    width: 100%;
    margin-bottom: 20px;
    border-top: 2px solid #3d3d3d;
    border-bottom: 2px solid #3d3d3d;
    border-left: none;
  }
`;

const Right = ({ translatePx }) => {
  return (
    <Container>
      <ImagesContainer translatePx={translatePx}>
        {images.map((image, idx) => {
          return (
            <ImageContainer key={idx}>
              <Instagram size={30} />
              <Image src={image}></Image>
            </ImageContainer>
          );
        })}
      </ImagesContainer>
    </Container>
  );
};

export default Right;
