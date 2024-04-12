import { IMAGE_TYPES } from '../constants';
import {
  CloudinaryAsset,
  CloudinaryOptions,
  Transformations
} from '../types/cloudinary';

export const getCloudinaryUrl = (
  cloudinaryImage: CloudinaryAsset | string,
  options: CloudinaryOptions
) => {
  if (typeof cloudinaryImage === 'string') {
    return formatCloudinaryUrl(cloudinaryImage, options);
  } else if (typeof cloudinaryImage === 'object') {
    return formatCloudinaryObject(cloudinaryImage, options);
  } else {
    return '';
  }
};

export const isCloudinaryUrl = (imageUrl: string) => {
  const BASE_URL = process.env.NEXT_PUBLIC_CLOUDINARY_BASE_URL;
  const cloudinaryBaseRegex = new RegExp(`^${BASE_URL}`);
  return cloudinaryBaseRegex.test(imageUrl);
};

const formatCloudinaryUrl = (imageUrl = '', options: CloudinaryOptions) => {
  const BASE_URL = process.env.NEXT_PUBLIC_CLOUDINARY_BASE_URL || '';

  if (!isCloudinaryUrl(imageUrl)) {
    return imageUrl;
  }

  const fileExtensionRegex = new RegExp('\\.\\w+?$');
  const originalFileExtension = imageUrl.match(fileExtensionRegex)?.[0];
  if (!originalFileExtension) return imageUrl;

  const newFileExtension = options.imageType
    ? `.${options.imageType.fileExtension}`
    : originalFileExtension;
  const imageUrlWithoutExtension = imageUrl.replace(fileExtensionRegex, '');
  const optionsString = formatTransformations(options.transformations);
  const newUrl = `${BASE_URL}/${optionsString}${imageUrlWithoutExtension.replace(
    BASE_URL,
    ''
  )}${newFileExtension}`;

  return newUrl;
};

const formatCloudinaryObject = (
  cloudinaryImage: CloudinaryAsset,
  options: CloudinaryOptions
) => {
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

const formatTransformations = (transformations: Transformations) => {
  const transformationStrings: string[] = [];
  Object.keys(transformations).forEach((transformationKey) => {
    if (Object.keys(TRANSFORMATIONS).indexOf(transformationKey) !== -1) {
      transformationStrings.push(
        `${
          TRANSFORMATIONS[transformationKey as keyof typeof TRANSFORMATIONS]
        }_${transformations[transformationKey as keyof typeof TRANSFORMATIONS]}`
      );
    }
  });

  return transformationStrings.join(',');
};

const TRANSFORMATIONS = {
  width: 'w',
  height: 'h',
  crop: 'c',
  quality: 'q'
};
