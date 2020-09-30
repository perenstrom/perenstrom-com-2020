import React from 'react';
import styled from 'styled-components';

import { getCloudinaryUrl } from '../helpers/cloudinary-helper';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 7rem;
  background-image: ${(props) => `url("${props.images.small}")`};
  background-size: cover;

  @media screen and (min-width: 480px) {
  background-image: ${(props) => `url("${props.images.medium}")`};
  height: 12.5rem;
  }

  @media screen and (min-width: 768px) {
  background-image: ${(props) => `url("${props.images.large}")`};
  }
`;

export const Hero = function Hero(props) {
  const { image } = props;

  const imageUrls = {
    small: getCloudinaryUrl(image, {
      transformations: {
        width: '480',
        height: '140',
        crop: 'fill'
      }
    }),
    medium: getCloudinaryUrl(image, {
      transformations: {
        width: '768',
        height: '250',
        crop: 'fill'
      }
    }),
    large: getCloudinaryUrl(image, {
      transformations: {
        width: '1280',
        height: '250',
        crop: 'fill'
      }
    })
  };

  return <Wrapper images={imageUrls} />;
};
