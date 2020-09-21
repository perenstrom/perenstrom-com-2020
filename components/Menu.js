import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 3rem;
  background-color: black;

@media screen and (min-width: 480px) {
  height: 3rem;
}

@media screen and (min-width: 768px) {
  height: 4rem;
}
`;

const Container = styled.div`
  flex-basis: 1280px;
  padding: 0 1.5rem;
`;

const Header = styled.h1`
  margin-top: 0;
  margin-bottom: 0;
  color: white;
  font-size: 1.5rem;

  @media screen and (min-width: 480px) {
    font-size: 1.5rem;
  }

  @media screen and (min-width: 768px) {
    font-size: 2rem;
  }
`;


export const Menu = function Menu() {
  return (
    <Wrapper>
      <Container>
        <Header>Per Enström</Header>
      </Container>
    </Wrapper>
  );
};
