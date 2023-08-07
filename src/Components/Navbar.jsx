import React from "react";
import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  width: 100%;
  min-width: 400px;
  height: 4.5rem;
  min-height: 4.5rem;
  box-sizing: border-box;
  margin: 0;
  padding: 0 2.5rem 0 2.5rem;
  background: #092040;
  position: fixed;
  top: 0;
  z-index: 10;
`;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: row;
`;

const Logo = styled.div`
  width: 40%;
  min-width: 40%;
`;

const LogoImage = styled.img`
  width: 120px;
  height: 80px;
  ${mobile({ width: "90px", height: "60px" })}
`;

const Navigation = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  width: 60%;
  min-width: 60%;
  justify-content: flex-end;
  ${mobile({ display: "none" })}
`;

const NavLink = styled.a`
  width: 6rem;
  height: 100%;
  margin: 0 15px 0 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const NavText = styled.p`
  margin: 0;
  font-size: 1.1rem;
  color: #8fe3cf;
  text-decoration: none;
  &:after {
    content: "";
    display: block;
    width: 0;
    height: 2px;
    background-color: white;
    transition: width 0.5s ease-in-out;
  }

  &:hover:after {
    width: 100%;
  }

  &:hover {
    color: white;
  }
`;

function Navbar() {
  return (
    <Container>
      <Wrapper>
        <Logo>
          <LogoImage
            src="https://storage.cloud.google.com/mtaayetu.appspot.com/portfolio-logo.png?authuser=1"
            alt="website logo"
          />
        </Logo>
        <Navigation>
          <NavLink>
            <NavText>About</NavText>
          </NavLink>
          <NavLink>
            <NavText>Skills</NavText>
          </NavLink>
          <NavLink>
            <NavText>Projects</NavText>
          </NavLink>
          <NavLink>
            <NavText>Blogs</NavText>
          </NavLink>
          <NavLink>
            <NavText>Contacts</NavText>
          </NavLink>
        </Navigation>
      </Wrapper>
    </Container>
  );
}

export default Navbar;
