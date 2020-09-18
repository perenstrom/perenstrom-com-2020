import React from 'react';
import styled from 'styled-components';

import { IMAGE_TYPES } from '../constants';
import { getCloudinaryUrl } from '../helpers/cloudinary-helper';

const Image = styled.img`
  display: block;
  width: 100%;
`;

export const ResponsiveImage = React.memo(function ResponsiveImage(props) {
  const { cloudinaryImage, width, quality = 80 } = props;

  const normalOptions = {
    width: width,
    quality: quality
  };
  const retinaOptions = {
    width: width * 2,
    quality: quality
  };
  const imageUrls = {
    avif: {
      normal: getCloudinaryUrl(cloudinaryImage, {
        ...normalOptions,
        imageType: IMAGE_TYPES.avif
      }),
      retina: getCloudinaryUrl(cloudinaryImage, {
        ...retinaOptions,
        imageType: IMAGE_TYPES.avif
      })
    },
    webp: {
      normal: getCloudinaryUrl(cloudinaryImage, {
        ...normalOptions,
        imageType: IMAGE_TYPES.webp
      }),
      retina: getCloudinaryUrl(cloudinaryImage, {
        ...retinaOptions,
        imageType: IMAGE_TYPES.webp
      })
    },
    jpeg: {
      normal: getCloudinaryUrl(cloudinaryImage, {
        ...normalOptions,
        imageType: IMAGE_TYPES.jpeg
      }),
      retina: getCloudinaryUrl(cloudinaryImage, {
        ...retinaOptions,
        imageType: IMAGE_TYPES.jpeg
      })
    }
  };

  return (
    <picture>
      <source
        srcSet={`${imageUrls.avif.retina} 2x, ${imageUrls.avif.normal} 1x`}
        type={IMAGE_TYPES.avif.type}
      />
      <source
        srcSet={`${imageUrls.webp.retina} 2x, ${imageUrls.webp.normal} 1x`}
        type={IMAGE_TYPES.webp.type}
      />
      <source
        srcSet={`${imageUrls.jpeg.retina} 2x, ${imageUrls.jpeg.normal} 1x`}
        type={IMAGE_TYPES.jpeg.type}
      />
      <Image src={imageUrls.jpeg.normal} />
    </picture>
  );
});
