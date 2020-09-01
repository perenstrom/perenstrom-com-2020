import React from 'react';
import styled from 'styled-components';

const Image = styled.img`
  display: block;
  width: 100%;
`;

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
  const format = cloudinaryImage.format;
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
  const newUrl = `${newUrlBase}.${format}`;
  const newUrlRetina = `${newUrlBaseRetina}.${format}`;

  return (
    <picture>
      <source srcSet={`${newUrlRetina} 2x, ${newUrl} 1x`} />
      <Image src={newUrl} />
    </picture>
  );
});
