import { useState } from "react";
import styled from "styled-components";
import { Link } from "react-scroll";

import Navbar from "./components/Navbar";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Drinks from "./components/drinks/Drinks";
import Beliefs from "./components/beliefs/Beliefs";
import Video from "./components/video/Video";
import Laurels from "./components/laurels/Laurels";
import Gallery from "./components/gallery/Gallery";
import FindUs from "./components/findUs/FindUs";
import Contact from "./components/contact/Contact";

const Item = styled(Link)`
  list-style: none;
  text-align: center;
  font-size: 28px;
  color: #d3d3b6;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  cursor: pointer;
`;

const List = styled.ul`
  display: flex;
  flex-direction: column;
  padding: 0px;
  color: white;
  height: 80%;
  justify-content: space-evenly;
  align-items: center;
`;

const Menu = styled.div`
  display: flex;
  position: fixed;
  top: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
  width: 100%;
  height: 100%;
  transition: all 0.5s ease;
  background-color: #0a0a0a;
  z-index: 1;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: #0a0a0a;
  scroll-behavior: smooth;
`;

const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  const data = [
    "Home",
    "About",
    "Speciality",
    "Beliefs",
    "Laurels",
    "Gallery",
    "Find Us",
    "Contact",
  ];

  return (
    <Container>
      <Navbar isOpen={isOpen} setIsOpen={setIsOpen} />
      <Menu isOpen={isOpen}>
        <List>
          {data.map((item, idx) => {
            return (
              <Item
                onClick={() => setIsOpen(false)}
                key={idx}
                to={item}
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
              >
                {item}
              </Item>
            );
          })}
        </List>
      </Menu>
      <Home />
      <About />
      <Drinks />
      <Beliefs />
      <Video />
      <Laurels />
      <Gallery />
      <FindUs />
      <Contact />
    </Container>
  );
};

export default App;
