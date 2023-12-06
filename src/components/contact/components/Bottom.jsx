import styled from "styled-components";

import { LuFacebook } from "react-icons/lu";
import { SlSocialTwitter } from "react-icons/sl";
import { FaInstagram } from "react-icons/fa";

const Text = styled.p`
  margin: 0px;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
`;

const SubTitle = styled.h2`
  margin: 0px;
  font-weight: 300;
  margin-bottom: 10px;
  color: #d3d3b6;
`;

const Title = styled.h1`
  font-size: 35px;
  margin: 0px;
  font-weight: 300;
  margin-bottom: 10px;
  color: #d3d3b6;
`;

const WorkingHours = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: column;
`;

const GERICHT = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: column;
  max-width: 40%;

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

const ContactUs = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: column;
`;

const TopContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-evenly;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 40px;
  }
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Bottom = () => {
  return (
    <Container>
      <TopContainer>
        <WorkingHours>
          <SubTitle>Working Hours</SubTitle>
          <Text>Monday-Friday:</Text>
          <Text style={{ marginBottom: 10 }}>08:00 Am - 12:00 Am</Text>
          <Text>Saturday-Sunday</Text>
          <Text>07:00 Am - 11:00 Pm</Text>
        </WorkingHours>
        <GERICHT>
          <Title>GERICHT</Title>
          <Text style={{ textAlign: "center" }}>
            "The Best way to find yourself is to lose yourself in the service of
            others."
          </Text>
          <img src="./spoon.svg" style={{ margin: 10 }} />
          <div>
            <LuFacebook size={22} />
            <SlSocialTwitter
              size={22}
              style={{ marginLeft: 10, marginRight: 10 }}
            />
            <FaInstagram size={22} />
          </div>
        </GERICHT>
        <ContactUs>
          <SubTitle>Contact Us</SubTitle>
          <Text style={{ marginBottom: 5 }}>Gericht@gmail.com</Text>
          <Text>+1 212-344-1230</Text>
          <Text>+1 212-348-1310</Text>
        </ContactUs>
      </TopContainer>
      <Text style={{ position: "absolute", bottom: 2 }}>
        2023 Gericht. All Rights Reserved.
      </Text>
    </Container>
  );
};

export default Bottom;
