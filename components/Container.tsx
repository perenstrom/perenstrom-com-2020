import React, { ReactNode } from 'react';
import { styled } from 'styled-components';

const Wrapper = styled.div`
  max-width: 1280px;
  margin-top: 1rem;
  margin-left: auto;
  margin-right: auto;

  @media screen and (min-width: 480px) {
    margin-top: 2rem;
  }

  @media screen and (min-width: 768px) {
    margin-top: 3rem;
  }
`;

export const Container = function Container(props: { children: ReactNode }) {
  return <Wrapper>{props.children}</Wrapper>;
};
