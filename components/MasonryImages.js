import React from 'react';
import styled from 'styled-components';
import Masonry from 'react-masonry-component';

import { ResponsiveImage } from './ResponsiveImage';

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
  gutter: 16,
  transitionDuration: '0s'
};

export const MasonryImages = React.memo(function MasonryImages(props) {
  return (
    <Wrapper>
      <Masonry className={'my-masonry-grid'} options={masonryOptions}>
        {props.images.map((image) => (
          <ItemWrapper className="grid-item grid-sizer">
            <ResponsiveImage
              cloudinaryImage={image.thumbnail}
              width={Math.ceil((1280 - 3 * 16) / 3)}
            />
          </ItemWrapper>
        ))}
      </Masonry>
    </Wrapper>
  );
});
