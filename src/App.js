import React, { useState } from "react";
import styled from "styled-components";
import Navbar from "./Components/Navbar";
import About from "./Components/About";
import Blog from "./Components/Blog";
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";
import OtherProjects from "./Components/OtherProjects";
import GetInTouch from "./Components/GetInTouch";
import { GitHub, LinkedIn, Twitter } from "@mui/icons-material";
import YoutubeEmbed from "./Components/YoutubeEmbed";
import { mobile, tablet } from "./responsive";

const MainBody = styled.div`
  min-width: 400px;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
`;

const PopUpWrapper = styled.div`
  height: 100vh;
  width: 100vw;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 20;
`;

const BorderLines = styled.div`
  height: 100%;
  min-height: 100vh;
  margin: 4rem 0 0 0;
  width: calc(100vw - 13rem);
  max-width: calc(100vw - 13rem);
  border: 0.1px solid white;
  border-bottom: none;
  border-top: none;
  position: relative;
  background: pink;
  ${mobile({ width: "100%", maxWidth: "100%" })}
`;
const SideLink = styled.div`
  display: flex;
  width: 3.5rem;
  height: 70vh;
  position: fixed;
  background: #092040;
  left: ${(props) => props.pos === "left" && "4.7rem"};
  right: ${(props) => props.pos === "right" && "4.7rem"};
  top: 4.5rem;
  z-index: 10;
  ${mobile({ display: "none" })}
`;

const LSideLinkWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
  max-width: 100%;
`;

const RSideLinkWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
  max-width: 100%;
  transform: rotate(-90deg);
`;

const EmailText = styled.p`
  margin: 0;
  padding: 25px 5px 0 15px;
  color: #b2beb5;
`;

const SocialLink = styled.a`
  width: 100%;
  height: 50px;
  margin: 0 0 20px 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MobileFrame = styled.div`
  display: none;
  ${mobile({ display: "grid" })}
`;

const TabletFrame = styled.div`
  display: none;
  ${tablet({ display: "grid" })}
`;

const RegularFrame = styled.div`
  display: grid;
  ${tablet({ display: "none" })}
  ${mobile({ display: "none" })}
`;

function App() {
  const [popped, setPopped] = useState(false);

  return (
    <MainBody>
      <Navbar />
      {popped && (
        <PopUpWrapper>
          <MobileFrame>
            <YoutubeEmbed embedId="rokGy0huYEA" width="350" height="350" />
          </MobileFrame>
          <TabletFrame>
            <YoutubeEmbed embedId="rokGy0huYEA" width="400" height="350" />
          </TabletFrame>
          <RegularFrame>
            <YoutubeEmbed embedId="rokGy0huYEA" width="600" height="350" />
          </RegularFrame>
        </PopUpWrapper>
      )}

      <SideLink pos="left">
        <LSideLinkWrapper>
          <SocialLink>
            <Twitter style={{ width: "60%", height: "60%" }} />
          </SocialLink>
          <SocialLink>
            <LinkedIn style={{ width: "60%", height: "60%" }} />
          </SocialLink>
          <SocialLink>
            <GitHub style={{ width: "60%", height: "60%" }} />
          </SocialLink>
        </LSideLinkWrapper>
      </SideLink>
      <SideLink pos="right">
        <RSideLinkWrapper>
          <EmailText>oluochodhiambo11@gmail.com</EmailText>
        </RSideLinkWrapper>
      </SideLink>
      <BorderLines>
        {/* <About />
        <Skills />
        <Projects setPopped={setPopped} />
        <OtherProjects />
        <Blog />
        <GetInTouch /> */}
      </BorderLines>
    </MainBody>
  );
}

export default App;
