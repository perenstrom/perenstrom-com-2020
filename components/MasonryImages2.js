import React from 'react';
import Head from 'next/head';
import styled from 'styled-components';
import Masonry from 'react-masonry-css';

const ItemWrapper = styled.div`
  /* width: calc(33.3333% - 10px * 2);
  margin-bottom: 10px; */
`;

const Image = styled.img`
  display: block;
  width: 100%;
`;

const Wrapper = styled.div`
  .my-masonry-grid {
    display: -webkit-box; /* Not needed if autoprefixing */
    display: -ms-flexbox; /* Not needed if autoprefixing */
    display: flex;
    margin-left: -30px; /* gutter size offset */
    width: auto;
  }
  .my-masonry-grid_column {
    padding-left: 30px; /* gutter size */
    background-clip: padding-box;
  }

  /* Style your items */
  .my-masonry-grid_column > div {
    /* change div to reference your elements you put in <Masonry> */
    background: grey;
    margin-bottom: 30px;
  }
`;

export const MasonryImages2 = function MasonryImages2(props) {
  return (
    <Wrapper>
      <Masonry
        breakpointCols={3}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        <ItemWrapper>
          <Image src="https://via.placeholder.com/150x100" />
        </ItemWrapper>
        <ItemWrapper>
          <Image src="https://via.placeholder.com/150x400" />
        </ItemWrapper>
        <ItemWrapper>
          <Image src="https://via.placeholder.com/200x100" />
        </ItemWrapper>
        <ItemWrapper>
          <Image src="https://via.placeholder.com/70x100" />
        </ItemWrapper>
        <ItemWrapper>
          <Image src="https://via.placeholder.com/300x900" />
        </ItemWrapper>
        <ItemWrapper>
          <Image src="https://via.placeholder.com/150x100" />
        </ItemWrapper>
        <ItemWrapper>
          <Image src="https://via.placeholder.com/150x100" />
        </ItemWrapper>
      </Masonry>
    </Wrapper>
  );
};
