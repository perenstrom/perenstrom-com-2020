import React, { memo } from 'react';
import { styled } from 'styled-components';

import { IMAGE_TYPES } from '../constants';
import { getCloudinaryUrl } from '../helpers/cloudinary-helper';
import { CloudinaryAsset } from '../types/cloudinary';

const Image = styled.img`
  display: block;
  width: 100%;
`;

export const ResponsiveImage = memo(function ResponsiveImage(props: {
  cloudinaryImage: CloudinaryAsset | string;
  width: number;
  quality?: number;
  alt?: string;
}) {
  const { cloudinaryImage, width, quality = 80, alt } = props;

  const normalOptions = {
    transformations: { width: width },
    quality: quality
  };
  const retinaOptions = {
    transformations: { width: width * 2 },
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
      <Image
        src={imageUrls.jpeg.normal}
        alt={
          alt ||
          (typeof cloudinaryImage !== 'string' &&
            cloudinaryImage?.context?.custom?.alt) ||
          ''
        }
      />
    </picture>
  );
});
