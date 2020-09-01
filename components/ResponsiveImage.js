import React from 'react';
import styled from 'styled-components';

const Image = styled.img`
  display: block;
  width: 100%;
`;

const imageTypes = {
  jpg: {
    type: 'image/jpeg',
    fileExtension: 'jpg'
  },
  webp: {
    type: 'image/webp',
    fileExtension: 'webp'
  },
  avif: {
    type: 'image/avif',
    fileExtension: 'avif'
  }
};

export const ResponsiveImage = React.memo(function ResponsiveImage(props) {
  const { cloudinaryImage, width, quality = 80 } = props;

  const baseUrl = process.env.CLOUDINARY_BASE_URL;
  const currentTransformations = cloudinaryImage.raw_transformation;
  const currentTransformationsAlteredQuality = currentTransformations.replace(
    'q_auto',
    `q_${quality}`
  );
  const widthTransformation = width ? `w_${width}` : 'w_auto';
  const widthTransformationRetina = width ? `w_${width * 2}` : 'w_auto';
  const imageId = cloudinaryImage.public_id;
  const newUrlBase = [
    baseUrl,
    currentTransformationsAlteredQuality,
    widthTransformation,
    imageId
  ].join('/');
  const newUrlBaseRetina = [
    baseUrl,
    currentTransformationsAlteredQuality,
    widthTransformationRetina,
    imageId
  ].join('/');

  return (
    <picture>
      <source
        srcSet={`${newUrlBaseRetina}.${imageTypes.avif.fileExtension} 2x, ${newUrlBase}.${imageTypes.avif.fileExtension} 1x`}
        type={imageTypes.avif.type}
      />
      <source
        srcSet={`${newUrlBaseRetina}.${imageTypes.webp.fileExtension} 2x, ${newUrlBase}.${imageTypes.webp.fileExtension} 1x`}
        type={imageTypes.webp.type}
      />
      <source
        srcSet={`${newUrlBaseRetina}.${imageTypes.jpg.fileExtension} 2x, ${newUrlBase}.${imageTypes.jpg.fileExtension} 1x`}
        type={imageTypes.jpg.type}
      />
      <Image src={`${newUrlBase}.${imageTypes.jpg.fileExtension}`} />
    </picture>
  );
});
