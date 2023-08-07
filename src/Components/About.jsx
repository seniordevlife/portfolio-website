import React from "react";
import styled from "styled-components";

const Container = styled.div`
  max-width: 100%;
  height: calc(100vh - 4.5rem);
  min-height: 500px;
  display: flex;
  justify-content: center;
  box-sizing: border-box;
`;

const Wrapper = styled.div`
  width: 85%;
  max-width: 85%;
  height: 100%;
  background: #092040;
  position: relative;
`;

const BackgroundImage = styled.div`
  width: 20rem;
  height: 20rem;
  background: blue;
  position: absolute;
  bottom: 20%;
  right: 10%;
  display: flex;
  z-index: 1;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
`;

const TextWrap = styled.section`
  height: 100%;
  width: 100%;
  padding: 4rem 0 0 0;
  box-sizing: border-box;
  position: relative;
  z-index: 2;
`;

const LargeText = styled.h1`
  font-size: 2.5rem;
  color: #8fe3cf;
`;

const SmallText = styled.p`
  font-size: 1.1rem;
  width: 80%;
  color: #848482;
`;

const Button = styled.button`
    min-width; 10rem;
    min-height: 3rem;
    width: 10rem;
    height: 2.5rem;
    margin: 10px;
    border: none;
    border-radius: 20px;
    background: #256d85;
    color: #f5f5f5;
    font-size: 1rem;
    fot-weight: 550;
    cursor: pointer;
    &:hover {
      background: #8fe3cf;
      color: #092040;
    };
`;

const ImageWrap = styled.section``;

function About() {
  return (
    <Container>
      <Wrapper>
        {/* <BackgroundImage>
          <Image src="https://storage.cloud.google.com/mtaayetu.appspot.com/13311397_v617batch2-kul-05-technology.jpg"></Image>
        </BackgroundImage> */}
        <TextWrap>
          <SmallText>Hello, my name is ...,</SmallText>
          <LargeText>Marvin Odhiambo.</LargeText>
          <LargeText>Fullstack Software Engineer</LargeText>
          <SmallText>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
            voluptatum perspiciatis necessitatibus exercitationem autem vitae
            dolorum quidem laudantium impedit similique doloribus pariatur
            consequatur sunt ea deserunt quia, temporibus saepe ex?
          </SmallText>
          <Button>Past Projects</Button>
        </TextWrap>
      </Wrapper>
    </Container>
  );
}

export default About;
