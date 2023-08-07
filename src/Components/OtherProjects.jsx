import React from "react";
import { projects } from "../info";
import styled from "styled-components";
import { Visibility, GitHub } from "@mui/icons-material";

const Container = styled.div`
  width: 100%;
  min-height: 500px;
  display: flex;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 85%;
  height: 100%;
  background: #092040;
`;

const SectionHeader = styled.h2`
  color: #8fe3cf;
`;

const Row = styled.div`
  width: 100%;
  height: 50vh;
  max-height: 600px;
  min-height: 300px;
  display: flex;
  box-sizing: border-box;
  flex-direction: ${(props) => props.direction || "row"};
  justify-content: space-between;
  position: relative;
  margin: 20px 0;
  position: relative;
`;

const Column = styled.div`
  box-sizing: border-box;
  height: 100%;
  max-height: 100%;
  width: 33%;
  background: #05152c;
  padding: 0 15px;
  position: relative;
  transition: transform 0.3s ease-in-out;

  &: hover {
    transform: translateY(-20px);
  }
`;

const Subtitle = styled.h3`
  width: 100%;
  margin: 10px 0 40px 0;
  color: #b2beb5;
`;

const ProjectLinks = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const ProjectName = styled.h3`
  width: 100%;
  color: #b2beb5;
  padding: 0 0.5rem;
`;

const ProjectDetails = styled.div`
  width: 100%;
  margin: 0;
  padding: 0 0.5rem;
`;

const ProjectTools = styled.div`
  height: 35px;
  position: absolute;
  bottom: 0;
  display: flex;
`;

const MediumText = styled.p`
  font-size: 0.95rem;
  color: #f1f1f1;
  width: 100%;
`;

const SmallText = styled.p`
  font-size: 0.8rem;
  color: #848482;
  margin: 0 5px 0 0;
`;

function OtherProjects() {
  return (
    <Container>
      <Wrapper>
        <SectionHeader>Other projects</SectionHeader>
        <Subtitle>Web APIS</Subtitle>
        <Row>
          {projects.slice(0, 3).map((project) => (
            <Column key={projects.indexOf(project)}>
              <ProjectLinks>
                <Visibility
                  style={{
                    width: "30px",
                    height: "30px",
                    margin: "0 15px 0 0",
                    color: "#8fe3cf",
                  }}
                />
                <GitHub
                  style={{
                    width: "30px",
                    height: "30px",
                    margin: "0 15px 0 0",
                    color: "#8fe3cf",
                  }}
                />
              </ProjectLinks>
              <ProjectName>{project.title}</ProjectName>
              <ProjectDetails>
                <MediumText>{project.desc}</MediumText>
              </ProjectDetails>
              <ProjectTools>
                <SmallText>React</SmallText>
                <SmallText>Node</SmallText>
                <SmallText>CSS</SmallText>
              </ProjectTools>
            </Column>
          ))}
        </Row>
        <Subtitle>Data Analysis and Machine Learning</Subtitle>
        <Row>
          {projects.slice(3, 6).map((project) => (
            <Column key={projects.indexOf(project)}>
              <ProjectLinks>
                <Visibility
                  style={{
                    width: "30px",
                    height: "30px",
                    margin: "0 10px 0 0",
                  }}
                />
                <GitHub
                  style={{
                    width: "30px",
                    height: "30px",
                    margin: "0 10px 0 0",
                  }}
                />
              </ProjectLinks>
              <ProjectName>{project.title}</ProjectName>
              <ProjectDetails>
                <MediumText>{project.desc}</MediumText>
              </ProjectDetails>
              <ProjectTools>
                <SmallText>React</SmallText>
                <SmallText>Node</SmallText>
                <SmallText>CSS</SmallText>
              </ProjectTools>
            </Column>
          ))}
        </Row>
        <Subtitle>Automation</Subtitle>
        <Row>
          {projects.slice(6, 8).map((project) => (
            <Column key={projects.indexOf(project)}>
              <ProjectLinks>
                <Visibility
                  style={{
                    width: "30px",
                    height: "30px",
                    margin: "0 10px 0 0",
                  }}
                />
                <GitHub
                  style={{
                    width: "30px",
                    height: "30px",
                    margin: "0 10px 0 0",
                  }}
                />
              </ProjectLinks>
              <ProjectName>{project.title}</ProjectName>
              <ProjectDetails>
                <MediumText>{project.desc}</MediumText>
              </ProjectDetails>
              <ProjectTools>
                <SmallText>React</SmallText>
                <SmallText>Node</SmallText>
                <SmallText>CSS</SmallText>
              </ProjectTools>
            </Column>
          ))}
        </Row>
      </Wrapper>
    </Container>
  );
}

export default OtherProjects;
