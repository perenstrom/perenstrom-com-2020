import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 12.5rem;
  background-image: ${(props) => `url("${props.image}")`};
  background-size: cover;
`;

const Header = styled.h1`
  margin-top: 0;
  margin-bottom: 0;
`;

export const Hero = function Hero(props) {
  const { heading, image } = props;

  return (
    <Wrapper image={image}>
      <Header>{heading}</Header>
    </Wrapper>
  );
};
