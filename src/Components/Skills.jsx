import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: calc(100vh - 4.5rem);
  min-height: 500px;
  display: flex;
  justify-content: center;
  background: #092040;
`;

const Wrapper = styled.div`
  width: 85%;
  height: 100%;
`;

const SectionHeader = styled.h2`
  color: #8fe3cf;
`;

const ToolsSection = styled.div`
  width: 100%;
`;

const Row = styled.section`
  margin: 20px 0;
  width: 100%;
  height: 6rem;
  min-height: 6rem;
  display: flex;
  flex-direction: row;
`;

const Category = styled.div`
  width: 20%;
  height: 100%;
`;

const Tools = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  justify-content: center;
  background: #05152c;
`;

const Tool = styled.div`
  width: 8rem;
  height: 100%;
  margin: 0 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Text = styled.p`
  width: 80%;
  color: #848482;
`;

const CName = styled.h4`
  color: #8fe3cf;
`;

function Skills() {
  return (
    <Container>
      <Wrapper>
        <SectionHeader>My Toolkit</SectionHeader>
        <Text>
          Software tools come and go fast so I am pretty flexible and enjoy
          learning new stuff. However, here are some of my go to tools.
        </Text>
        <ToolsSection>
          <Row>
            <Category>
              <CName>Programming Languages</CName>
            </Category>
            <Tools>
              <Tool>
                <i className="devicon-python-plain-wordmark colored mysize"></i>
              </Tool>
              <Tool>
                <i className="devicon-javascript-plain colored mysize"></i>
              </Tool>
              <Tool>
                <i className="devicon-csharp-line colored mysize"></i>
              </Tool>
              <Tool>
                <i className="devicon-nodejs-plain-wordmark colored mysize"></i>
              </Tool>
            </Tools>
          </Row>
          <Row>
            <Category>
              <CName>Deployment</CName>
            </Category>
            <Tools>
              <Tool>
                <i className="devicon-docker-plain-wordmark colored mysize"></i>
              </Tool>
              <Tool>
                <i className="devicon-kubernetes-plain-wordmark colored mysize"></i>
              </Tool>
              <Tool>
                <i className="devicon-terraform-plain-wordmark colored mysize"></i>
              </Tool>
              <Tool>
                <i className="devicon-azure-plain-wordmark colored mysize"></i>
              </Tool>
            </Tools>
          </Row>
          <Row>
            <Category>
              <CName>Data and Databases Managemnt</CName>
            </Category>
            <Tools>
              <Tool>
                <i className="devicon-redis-plain-wordmark colored mysize"></i>
              </Tool>
              <Tool>
                <i className="devicon-microsoftsqlserver-plain-wordmark mysize"></i>
              </Tool>
              <Tool>
                <i className="devicon-mongodb-plain-wordmark colored mysize"></i>
              </Tool>
              <Tool>
                <i className="devicon-mysql-plain-wordmark colored mysize"></i>
              </Tool>
            </Tools>
          </Row>
        </ToolsSection>
      </Wrapper>
    </Container>
  );
}

export default Skills;
