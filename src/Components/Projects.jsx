import React from "react";
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

const TextWrap = styled.div`
  width: 90%;
  height: 90%;
  max-height: 90%;
  padding: 10px;
`;

const DescriptionHead = styled.h3`
  color: #b2beb5;
  display: none;
  transition: all 1s ease-in 1s;
`;

const Text = styled.p`
  font-size: 1rem;
  color: #f1f1f1;
  padding: 15px 0 0 0;
  max-height: 4rem;
  line-height: 1.5rem;
  text-overflow: ellipsis;
  white-space: wrap;
  word-wrap: break-word;
  overflow: hidden;
`;

const ProjectName = styled.h3`
  position: absolute;
  padding: 10px;
  top: 0;
  color: #b2beb5;
  right: ${(props) => props.right};
  left: ${(props) => props.left};
`;

const Preview = styled.div`
  position: absolute;
  top: 70px;
  right: ${(props) => props.right};
  left: ${(props) => props.left};
  width: 60%;
  height: 50%;
  z-index: 3;
  background: #05152c;
  display: flex;
  align-items: end;
  flex-direction: column;
  line-height: 1.4;
  transition: all 0.5s ease-in;
`;

const TechStack = styled.div`
  position: absolute;
  height: 3rem;
  width: 40%;
  bottom: 0;
  right: ${(props) => props.right};
  left: ${(props) => props.left};
  display: flex;
  justify-content: ${(props) => props.direction}; ;
`;

const Row = styled.div`
  width: 100%;
  height: 50vh;
  min-height: 300px;
  display: flex;
  box-sizing: border-box;
  flex-direction: ${(props) => props.direction || "row"};
  justify-content: space-between;
  position: relative;
  margin: 20px 0 130px 0;

  &:hover ${Preview} {
    width: 50%;
    height: 101%;
    transform: translate(${(props) => props.prev}, -4.5rem);
  }

  &:hover ${Text} {
    height: 90%:
    max-height: 90%;
  }

  &:hover ${ProjectName} {
    display: none;
  }

  &:hover ${TechStack} {
    display: none;
  }

  &:hover ${DescriptionHead} {
    display: block;
  }
`;

const Column = styled.div`
  flex: 1;
  height: 100%;
`;

const ProjectLinks = styled.div`
  height: 50px;
  max-height: 50px;
  display: flex;
`;

const Links = styled.a`
  cursor: pointer;
`;

const Icon = styled.div`
  height: 90%;
  width: 50px;
  margin-left: ${(props) => props.left};
  margin-right: ${(props) => props.right};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Thumbnail = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 10px;
`;

function Projects({ setPopped }) {
  const showPreview = (e) => {
    e.preventDefault();
    setPopped(true);
  };

  return (
    <Container>
      <Wrapper>
        <SectionHeader>Feature Projects</SectionHeader>
        <Row prev="30px">
          <ProjectName right="30px">1. Blockchain Simulation</ProjectName>
          <Column>
            <Thumbnail
              src="https://storage.cloud.google.com/mtaayetu.appspot.com/Blockchain1.webp?authuser=1"
              alt="project thumbnail"
            />
          </Column>
          <Column></Column>
          <Preview right="30px">
            <TextWrap>
              <DescriptionHead>BlockChain Simulation</DescriptionHead>
              <Text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repudiandae veritatis qui ut fugiat deserunt ipsum iure odio
                iusto molestiae recusandae ipsa, culpa alias corrupti
                perspiciatis mollitia nostrum explicabo! Totam, id!
              </Text>
            </TextWrap>
            <ProjectLinks>
              <Links onClick={(e) => showPreview(e)}>
                <Visibility
                  style={{
                    width: "30px",
                    height: "30px",
                    margin: "0 10px 10px 0",
                    color: "#8fe3cf",
                  }}
                />
              </Links>
              <Links src="">
                <GitHub
                  style={{
                    width: "30px",
                    height: "30px",
                    margin: "0 10px 10px 0",
                    color: "#8fe3cf",
                  }}
                />
              </Links>
            </ProjectLinks>
          </Preview>
          <TechStack right="30px" direction="flex-end">
            <Icon left="10px">
              <i className="devicon-python-plain-wordmark colored smallsize"></i>
            </Icon>
            <Icon left="10px">
              <i className="devicon-mysql-plain-wordmark colored smallsize"></i>
            </Icon>
            <Icon left="10px">
              <i className="devicon-nodejs-plain colored smallsize"></i>
            </Icon>
          </TechStack>
        </Row>
        <Row prev="-30px" direction="row-reverse">
          <ProjectName left="30px">2. Puzzle Solver</ProjectName>
          <Column>
            <Thumbnail
              src="https://storage.cloud.google.com/mtaayetu.appspot.com/sliding-puzzle.png?authuser=1"
              alt="project thumbnail"
            />
          </Column>
          <Column></Column>
          <Preview prev="-30px" left="30px">
            <TextWrap>
              <DescriptionHead>BlockChain Simulation</DescriptionHead>
              <Text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repudiandae veritatis qui ut fugiat deserunt ipsum iure odio
                iusto molestiae recusandae ipsa, culpa alias corrupti
                perspiciatis mollitia nostrum explicabo! Totam, id!
              </Text>
            </TextWrap>
            <ProjectLinks>
              <Links onClick={(e) => showPreview(e)}>
                <Visibility
                  style={{
                    width: "30px",
                    height: "30px",
                    margin: "0 10px 10px 0",
                    color: "#8fe3cf",
                  }}
                />
              </Links>
              <Links src="">
                <GitHub
                  style={{
                    width: "30px",
                    height: "30px",
                    margin: "0 10px 10px 0",
                    color: "#8fe3cf",
                  }}
                />
              </Links>
            </ProjectLinks>
          </Preview>
          <TechStack left="30px" direction="flex-start">
            <Icon right="10px">
              <i className="devicon-react-original colored smallsize"></i>
            </Icon>
            <Icon right="10px">
              <i className="devicon-docker-plain-wordmark colored smallsize"></i>
            </Icon>
            <Icon right="10px">
              <i className="devicon-mongodb-plain-wordmark colored smallsize"></i>
            </Icon>
            <Icon>
              <i className="devicon-redux-original colored smallsize"></i>
            </Icon>
          </TechStack>
        </Row>
        <Row prev="30px">
          <ProjectName right="30px">3. E-commerce website</ProjectName>
          <Column>
            <Thumbnail
              src="https://storage.cloud.google.com/mtaayetu.appspot.com/docker.jpg?authuser=1"
              alt="project thumbnail"
            />
          </Column>
          <Column></Column>
          <Preview prev="30px" right="30px">
            <TextWrap>
              <DescriptionHead>BlockChain Simulation</DescriptionHead>
              <Text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repudiandae veritatis qui ut fugiat deserunt ipsum iure odio
                iusto molestiae recusandae ipsa, culpa alias corrupti
                perspiciatis mollitia nostrum explicabo! Totam, id!
              </Text>
            </TextWrap>
            <ProjectLinks>
              <Links onClick={(e) => showPreview(e)}>
                <Visibility
                  style={{
                    width: "30px",
                    height: "30px",
                    margin: "0 10px 10px 0",
                    color: "#8fe3cf",
                  }}
                />
              </Links>
              <Links src="">
                <GitHub
                  style={{
                    width: "30px",
                    height: "30px",
                    margin: "0 10px 10px 0",
                    color: "#8fe3cf",
                  }}
                />
              </Links>
            </ProjectLinks>
          </Preview>
          <TechStack right="30px" direction="flex-end">
            <Icon left="10px">
              <i className="devicon-csharp-line colored smallsize"></i>
            </Icon>
            <Icon left="10px">
              <i className="devicon-terraform-plain-wordmark colored smallsize"></i>
            </Icon>
            <Icon left="10px">
              <i className="devicon-azure-plain-wordmark colored smallsize"></i>
            </Icon>
          </TechStack>
        </Row>
      </Wrapper>
    </Container>
  );
}

export default Projects;
