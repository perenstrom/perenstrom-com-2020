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

export const Hero = function Hero(props) {
  const { image } = props;

  return <Wrapper image={image} />;
};
