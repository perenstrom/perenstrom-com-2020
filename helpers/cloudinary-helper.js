import { IMAGE_TYPES } from '../constants';

export const getCloudinaryUrl = (cloudinaryImage = {}, options) => {
  const BASE_URL = process.env.CLOUDINARY_BASE_URL;
  const { width, quality = 80, imageType = IMAGE_TYPES.jpg } = options;
  const currentTransformations = cloudinaryImage.raw_transformation;
  const currentTransformationsAlteredQuality = currentTransformations.replace(
    'q_auto',
    `q_${quality}`
  );
  const widthTransformation = width ? `w_${width}` : 'w_auto';
  const imageId = cloudinaryImage.public_id;
  const newUrlBase = [
    BASE_URL,
    currentTransformationsAlteredQuality,
    widthTransformation,
    `v${cloudinaryImage.version}`,
    imageId
  ].join('/');

  return `${newUrlBase}.${imageType.fileExtension}`;
};
