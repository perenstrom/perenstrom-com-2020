import { IMAGE_TYPES } from '../constants';

export const getCloudinaryUrl = (cloudinaryImage = {}, options) => {
  const BASE_URL = process.env.NEXT_PUBLIC_CLOUDINARY_BASE_URL;
  const {
    transformations,
    quality = 80,
    imageType = IMAGE_TYPES.jpeg
  } = options;
  const currentTransformations = cloudinaryImage.raw_transformation;
  const currentTransformationsAlteredQuality = currentTransformations.replace(
    'q_auto',
    `q_${quality}`
  );
  const transformationString = formatTransformations(transformations);
  const imageId = cloudinaryImage.public_id;
  const newUrlBase = [
    BASE_URL,
    currentTransformationsAlteredQuality,
    transformationString,
    `v${cloudinaryImage.version}`,
    imageId
  ].join('/');

  return `${newUrlBase}.${imageType.fileExtension}`;
};

const formatTransformations = (transformations) => {
  const transformationStrings = [];
  Object.keys(transformations).forEach((transformationKey) => {
    if (Object.keys(TRANSFORMATIONS).indexOf(transformationKey) !== -1) {
      transformationStrings.push(
        `${TRANSFORMATIONS[transformationKey]}_${transformations[transformationKey]}`
      );
    }
  });

  return transformationStrings.join(',');
};

const TRANSFORMATIONS = {
  width: 'w',
  height: 'h',
  crop: 'c'
};
