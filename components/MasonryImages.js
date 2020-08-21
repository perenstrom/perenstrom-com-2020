import React from 'react';
import Head from 'next/head';
import styled from 'styled-components';
import Masonry from 'react-masonry-component';

const ItemWrapper = styled.div`
  width: calc(33.3333% - 10px * 2);
  margin-bottom: 10px;
`;

const Image = styled.img`
  display: block;
  width: 100%;
`;

const Wrapper = styled.div`
  .my-masonry-grid {
    width: 100%;
  }
`;

const masonryOptions = {
  columnWidth: '.grid-sizer',
  itemSelector: '.grid-item',
  percentPosition: true,
  gutter: 10
};

export const MasonryImages = function MasonryImages(props) {
  return (
    <>
      <Wrapper>
        <Masonry className={'my-masonry-grid'} options={masonryOptions}>
          <ItemWrapper className="grid-item grid-sizer">
            <Image src="https://via.placeholder.com/150x100" />
          </ItemWrapper>
          <ItemWrapper className="grid-item">
            <Image src="https://via.placeholder.com/150x400" />
          </ItemWrapper>
          <ItemWrapper className="grid-item">
            <Image src="https://via.placeholder.com/200x100" />
          </ItemWrapper>
          <ItemWrapper className="grid-item">
            <Image src="https://via.placeholder.com/70x100" />
          </ItemWrapper>
          <ItemWrapper className="grid-item">
            <Image src="https://via.placeholder.com/300x900" />
          </ItemWrapper>
          <ItemWrapper className="grid-item">
            <Image src="https://via.placeholder.com/150x100" />
          </ItemWrapper>
          <ItemWrapper className="grid-item">
            <Image src="https://via.placeholder.com/150x100" />
          </ItemWrapper>
        </Masonry>
      </Wrapper>
    </>
  );
};
