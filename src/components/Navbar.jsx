import styled from "styled-components";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";

const CloseMenu = styled(IoMdClose)`
  display: none;
  position: absolute;
  right: 10px;

  @media (max-width: 768px) {
    display: flex;
  }
`;

const BurgerMenu = styled(GiHamburgerMenu)`
  display: none;
  position: absolute;
  right: 10px;

  @media (max-width: 768px) {
    display: flex;
  }
`;

const BookTable = styled.p`
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  padding-right: 10px;
  margin: 0px;

  @media (max-width: 768px) {
    display: none;
  }
`;

const Item = styled.p`
  cursor: pointer;
  &:hover {
    border-bottom: 1px solid #e2e2a1;
  }
`;

const Nav = styled.div`
  display: flex;
  position: relative;
  gap: 20px;
  font-size: 16px;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  border-bottom: 1px solid black;

  @media (max-width: 768px) {
    display: none;
  }
`;

const Name = styled.p`
  font-size: 25px;
  padding-left: 10px;
`;

const Container = styled.div`
  display: flex;
  width: 100%;
  max-width: 1400px;
  color: white;
  align-items: center;
  justify-content: space-between;
  height: 50px;
  z-index: 2;
`;

const Navbar = ({ isOpen, setIsOpen }) => {
  return (
    <Container>
      <Name>GERICHT</Name>
      {isOpen ? (
        // change CloseMenu with the two spoons images in github source
        <CloseMenu size={30} onClick={() => setIsOpen(false)} />
      ) : (
        <BurgerMenu size={30} onClick={() => setIsOpen(true)} />
      )}
      <Nav>
        <Item>Home</Item>
        <Item>About</Item>
        <Item>Menu</Item>
        <Item>Awards</Item>
        <Item>Contact</Item>
      </Nav>
      <BookTable style={{ cursor: "pointer" }}>Book Table</BookTable>
    </Container>
  );
};

export default Navbar;
