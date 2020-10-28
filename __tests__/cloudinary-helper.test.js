import { IMAGE_TYPES } from '../constants';
import { getCloudinaryUrl } from '../helpers/cloudinary-helper';
import next from 'next';
beforeAll(() => {
  next({});
});

describe('Cloudinary helper', () => {
  const cloudinaryImage = {
    url:
      'http://res.cloudinary.com/example/image/upload/f_auto,q_auto/v1000000000/example.jpg',
    tags: '[]',
    type: 'upload',
    bytes: 9848175,
    width: 4927,
    format: 'jpg',
    height: 2934,
    version: 1000000000,
    duration: null,
    metadata: '[]',
    public_id: 'example',
    created_at: '2020-08-21T18:52:09Z',
    secure_url:
      'https://res.cloudinary.com/example/image/upload/f_auto,q_auto/v1000000000/example.jpg',
    original_url:
      'http://res.cloudinary.com/example/image/upload/v1000000000/example.jpg',
    resource_type: 'image',
    raw_transformation: 'f_auto,q_auto',
    original_secure_url:
      'https://res.cloudinary.com/example/image/upload/v1000000000/example.jpg'
  };

  it('will return correct url', () => {
    // Arrange
    const options = {
      transformations: { width: 500 },
      quality: 40,
      imageType: IMAGE_TYPES.jpeg
    };

    // Act
    const newUrl = getCloudinaryUrl(cloudinaryImage, options);

    // Assert
    const expectedUrl =
      'https://res.cloudinary.com/example/image/upload/f_auto,q_40/w_500/v1000000000/example.jpg';
    expect(newUrl).toEqual(expectedUrl);
  });

  it('will return correct url for avif', () => {
    // Arrange
    const options = {
      transformations: { width: 500 },
      quality: 40,
      imageType: IMAGE_TYPES.avif
    };

    // Act
    const newUrl = getCloudinaryUrl(cloudinaryImage, options);

    // Assert
    const expectedUrl =
      'https://res.cloudinary.com/example/image/upload/f_auto,q_40/w_500/v1000000000/example.avif';
    expect(newUrl).toEqual(expectedUrl);
  });

  it('will return correct url for multiple transformations', () => {
    // Arrange
    const options = {
      transformations: { width: 500, height: 300 },
      quality: 40,
      imageType: IMAGE_TYPES.avif
    };

    // Act
    const newUrl = getCloudinaryUrl(cloudinaryImage, options);

    // Assert
    const expectedUrl =
      'https://res.cloudinary.com/example/image/upload/f_auto,q_40/w_500,h_300/v1000000000/example.avif';
    expect(newUrl).toEqual(expectedUrl);
  });
});

describe('Cloudinary helper from url', () => {
  it('will return correct url', () => {
    // Arrange
    const cloudinaryImage = 'https://res.cloudinary.com/example/image/upload/f_auto,q_auto/v1000000000/example.jpg';
    const options = {
      transformations: { width: 500 },
      imageType: IMAGE_TYPES.jpeg
    };

    // Act
    const newUrl = getCloudinaryUrl(cloudinaryImage, options);

    // Assert
    const expectedUrl =
      'https://res.cloudinary.com/example/image/upload/w_500/f_auto,q_auto/v1000000000/example.jpg';
    expect(newUrl).toEqual(expectedUrl);
  });

  it('will return correct url without initial transformations', () => {
    // Arrange
    const cloudinaryImage = 'https://res.cloudinary.com/example/image/upload/v1000000000/example.jpg';
    const options = {
      transformations: { width: 500 },
      imageType: IMAGE_TYPES.png
    };

    // Act
    const newUrl = getCloudinaryUrl(cloudinaryImage, options);

    // Assert
    const expectedUrl =
      'https://res.cloudinary.com/example/image/upload/w_500/v1000000000/example.png';
    expect(newUrl).toEqual(expectedUrl);
  });

  it('will return correct url without initial transformations or id', () => {
    // Arrange
    const cloudinaryImage = 'https://res.cloudinary.com/example/image/upload/example.jpg';
    const options = {
      transformations: { width: 500 },
      imageType: IMAGE_TYPES.jpeg
    };

    // Act
    const newUrl = getCloudinaryUrl(cloudinaryImage, options);

    // Assert
    const expectedUrl =
      'https://res.cloudinary.com/example/image/upload/w_500/example.jpg';
    expect(newUrl).toEqual(expectedUrl);
  });

  it('will return correct url when not cloudinary', () => {
    // Arrange
    const cloudinaryImage = 'https://www.example.com/example.jpg';
    const options = {
      transformations: { width: 500 },
      imageType: IMAGE_TYPES.jpeg
    };

    // Act
    const newUrl = getCloudinaryUrl(cloudinaryImage, options);

    // Assert
    const expectedUrl =
      'https://www.example.com/example.jpg';
    expect(newUrl).toEqual(expectedUrl);
  });
});
