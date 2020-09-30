import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Masonry from 'react-masonry-component';
import { LuminousGallery } from 'luminous-lightbox';

import { IMAGE_TYPES } from '../constants';
import { getCloudinaryUrl } from '../helpers/cloudinary-helper';

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

const ImageComponent = (props) => {
  const { isMobile, image } = props;

  if (isMobile) {
    return props.children;
  } else {
    return (
      <a
        className="lightbox-image"
        href={getCloudinaryUrl(image.image, {
          transformations: { width: 1200 },
          imageType: IMAGE_TYPES.jpeg
        })}
      >
        {props.children}
      </a>
    );
  }
};

export const MasonryImages = React.memo(function MasonryImages(props) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (typeof window !== undefined && typeof document !== undefined) {
      const mql = window?.matchMedia('(max-width: 480px)');
      const isMobile = mql?.matches;
      setIsMobile(isMobile);

      if (!isMobile) {
        new LuminousGallery(document.querySelectorAll('.lightbox-image'));
      }
    }
  }, []);

  return (
    <Wrapper>
      <Masonry className={'my-masonry-grid'} options={masonryOptions}>
        {props.images.map((image) => (
          <ItemWrapper
            className="grid-item grid-sizer"
            key={image.image.public_id}
          >
            <ImageComponent image={image} isMobile={isMobile}>
              <ResponsiveImage
                cloudinaryImage={image.thumbnail}
                width={Math.ceil((1280 - 3 * 16) / 3)}
              />
            </ImageComponent>
          </ItemWrapper>
        ))}
      </Masonry>
    </Wrapper>
  );
});
