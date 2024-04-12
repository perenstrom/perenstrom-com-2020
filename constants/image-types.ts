export const IMAGE_TYPES = {
  jpeg: {
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
  },
  png: {
    type: 'image/png',
    fileExtension: 'png'
  }
} as const;
