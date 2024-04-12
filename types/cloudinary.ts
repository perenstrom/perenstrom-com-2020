import { IMAGE_TYPES } from '../constants';

export interface CloudinaryAsset {
  url: string;
  tags: string[];
  type: string;
  bytes: number;
  width: number;
  format: string;
  height: number;
  version: number;
  duration: number;
  metadata: any[];
  public_id: string;
  created_at: string;
  secure_url: string;
  original_url: string;
  resource_type: string;
  raw_transformation: string;
  original_secure_url: string;
  context?: { custom?: { [key: string]: string } };
}

export interface CloudinaryOptions {
  transformations: Transformations;
  quality?: number;
  imageType?: (typeof IMAGE_TYPES)[keyof typeof IMAGE_TYPES];
}

export interface Transformations {
  width?: number;
  height?: number;
  crop?: string;
  quality?: number;
}

export type Transformation = 'width' | 'height' | 'crop' | 'quality';
