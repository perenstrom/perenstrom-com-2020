import { CloudinaryAsset } from './cloudinary';

export interface Image {
  image: CloudinaryAsset;
  thumbnail: CloudinaryAsset;
  altText: string | undefined;
}
