import React from 'react';
import styled from 'styled-components';
import Masonry from 'react-masonry-component';

const ItemWrapper = styled.div`
  width: calc((100% - 1rem) / 1 - 1rem);
  margin-bottom: 1rem;

  @media screen and (min-width: 480px) {
    width: calc((100% - 1rem) / 2 - 1rem);
  }

  @media screen and (min-width: 768px) {
    width: calc((100% - 1rem) / 3 - 1rem);
  }
`;

const Image = styled.img`
  display: block;
  width: 100%;
`;

const Wrapper = styled.div`
  .my-masonry-grid {
    width: 100%;
    padding-left: 1rem;
  }
`;

const masonryOptions = {
  columnWidth: '.grid-sizer',
  itemSelector: '.grid-item',
  percentPosition: true,
  gutter: 16
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
