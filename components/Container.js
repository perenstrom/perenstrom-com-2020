import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  max-width: 1280px;
  margin-top: 3rem;
  margin-left: auto;
  margin-right: auto;
`;

export const Container = function Container(props) {
  return <Wrapper>{props.children}</Wrapper>;
};
