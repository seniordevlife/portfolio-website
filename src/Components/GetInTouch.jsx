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
  color: #848482;
`;

const FormWrap = styled.section`
  height: 60vh;
  min-height: 60vh;
  width: 100%;
  max-width: 100%;
  display: flex;
  flex-direction: row;
`;

const TextSpace = styled.div`
  height: 100%;
  width: 50%;
  background: #05152c;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Form = styled.div`
  height: 100%;
  width: 50%;
  padding: 0 0 0 1rem;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
`;

const Label = styled.label`
  height: 2rem;
  min-height: 2rem;
  padding: 5px 0 0 0;
  width: 100%;
  color: #f5f5f5;
`;

const Input = styled.input`
  height: 2rem;
  min-height: 2rem;
  margin: 0.5rem 0 0 0;
`;

const TextArea = styled.textarea`
  width: 100%;
  height: 150px;
`;

const Button = styled.input`
    min-width; 10rem;
    min-height: 2.5rem;
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

const Span = styled.span``;

function GetInTouch() {
  return (
    <Container>
      <Wrapper>
        <SectionHeader>Get in touch</SectionHeader>
        <FormWrap>
          <TextSpace>
            <SmallText>
              <span className="wave">👋</span> Love to hear from you.
            </SmallText>
            <SmallText>
              I am activey looking for new opportunities and would be happy to
              discuss or scheduling a meeting.
            </SmallText>
          </TextSpace>
          <Form>
            <Label>Name</Label>
            <Input type="text" placeholder="terry daniel" />
            <Label>Phone Number</Label>
            <Input type="text" placeholder="+(country code) 78* *** **" />
            <Label>Email</Label>
            <Input type="email" placeholder="valuedpartner@gmail.com" />
            <Label>Message</Label>
            <TextArea type="text" placeholder="give a brief description" />
            <Button value="Send" type="submit" />
          </Form>
        </FormWrap>
      </Wrapper>
    </Container>
  );
}

export default GetInTouch;
