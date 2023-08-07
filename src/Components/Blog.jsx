import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: calc(100vh - 4.5rem);
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

const SmallText = styled.p`
  font-size: 1.1rem;
  width: 80%;
  color: ${(props) => props.color};
`;

const Row = styled.div`
  width: 100%;
  height: 60vh;
  min-height: 300px;
  display: flex;
  box-sizing: border-box;
  flex-direction: row;
  justify-content: space-between;
`;

const BlogPost = styled.div`
  height: 100%;
  flex: 1;
  margin: 0 5px;
  display: flex;
  flex-direction: column;
  position: relative;
  background: #05152c;
  cursor: pointer;
`;

const BlogCover = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: rgba(1, 13, 20, 0.6);
  &:hover {
    background: rgba(1, 13, 20, 0);
  }
`;

const Thumbnail = styled.div`
  height: 70%;
  width: 100%;
`;

const Image = styled.img`
  height: 100%;
  width: 100%;
`;

const Preview = styled.div`
  height: 30%;
  width: 100%;
`;

function Blog() {
  return (
    <Container>
      <Wrapper>
        <SectionHeader>Blog</SectionHeader>
        <SmallText color="#848482">
          Writing helps keep my mind fresh and is a way for me to share my
          knowledge and thoughts. Check out some of my articles.
        </SmallText>
        <Row>
          <BlogPost>
            <BlogCover></BlogCover>
            <Thumbnail>
              <Image
                src="https://storage.cloud.google.com/mtaayetu.appspot.com/docker.jpg?authuser=1"
                alt="article thumbnail"
              />
            </Thumbnail>
            <Preview>
              <SmallText color="#f5f5f5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Obcaecati, saepe.
              </SmallText>
            </Preview>
          </BlogPost>
          <BlogPost>
            <BlogCover></BlogCover>
            <Thumbnail>
              <Image
                src="https://storage.cloud.google.com/mtaayetu.appspot.com/machine%20learning.jpg?authuser=1"
                alt="article thumbnail"
              />
            </Thumbnail>
            <Preview>
              <SmallText color="#f5f5f5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Obcaecati, saepe.
              </SmallText>
            </Preview>
          </BlogPost>
          <BlogPost>
            <BlogCover></BlogCover>
            <Thumbnail>
              <Image
                src="https://storage.cloud.google.com/mtaayetu.appspot.com/ikigai-1.png?authuser=1"
                alt="article thumbnail"
              />
            </Thumbnail>
            <Preview>
              <SmallText color="#f5f5f5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Obcaecati, saepe.
              </SmallText>
            </Preview>
          </BlogPost>
        </Row>
      </Wrapper>
    </Container>
  );
}

export default Blog;
