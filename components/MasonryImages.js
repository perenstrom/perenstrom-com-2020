import React from 'react';
import Head from 'next/head';
import styled from 'styled-components';
import Masonry from 'react-masonry-component';

const ItemWrapper = styled.div`
  width: calc(100% / 3 - 10px);
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
    <Wrapper>
      <Masonry className={'my-masonry-grid'} options={masonryOptions}>
        {props.images.map((image) => (
          <ItemWrapper className="grid-item grid-sizer">
            <Image src={image} />
          </ItemWrapper>
        ))}
      </Masonry>
    </Wrapper>
  );
};
