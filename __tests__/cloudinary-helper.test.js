import { IMAGE_TYPES } from '../constants';
import { getCloudinaryUrl } from '../helpers/cloudinary-helper';
import next from 'next';
beforeAll(() => {
  next({});
});

describe('Cloudinary helper', () => {
  it('will return correct url', () => {
    // Arrange
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
    const options = {
      width: 500,
      quality: 40,
      imageType: IMAGE_TYPES.jpg
    };

    // Act
    const newUrl = getCloudinaryUrl(cloudinaryImage, options);

    // Assert
    const expectedUrl = 'https://res.cloudinary.com/example/image/upload/f_auto,q_40/w_500/v1000000000/example.jpg';
    expect(newUrl).toEqual(expectedUrl);
  });
});
