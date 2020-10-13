import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

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
  display: inline;
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

const StyledLink = styled.a`
  text-decoration: none;
`;

export const Menu = function Menu() {
  return (
    <Wrapper>
      <Container>
        <Link href="/" passHref>
          <StyledLink>
            <Header>Per Enström</Header>
          </StyledLink>
        </Link>
      </Container>
    </Wrapper>
  );
};
