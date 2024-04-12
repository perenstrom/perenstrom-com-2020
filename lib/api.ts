import { createClient } from 'contentful';
import { CloudinaryAsset } from '../types/cloudinary';
import {
  TypeBlogPostSkeleton,
  TypeHeroSkeleton,
  TypeImageSkeleton
} from '../types/generated/contentful';

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID || '',
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN || ''
});

export async function getHero() {
  const heros = await client.getEntries<TypeHeroSkeleton>({
    content_type: 'hero',
    'fields.category.sys.contentType.sys.id': 'category',
    'fields.category.fields.name[match]': 'Home'
  });
  return heros.items[0];
}

export async function getImages() {
  const images = await client.getEntries<TypeImageSkeleton>({
    content_type: 'image',
    'fields.category.sys.contentType.sys.id': 'category',
    'fields.category.fields.name[match]': 'Home'
  });

  const formattedImages = images.items.map((image) => {
    const cloudinaryImage = (
      image.fields.image as unknown as CloudinaryAsset[]
    )[0];
    const cloudinaryThumbnail = (
      image.fields.thumbnail as unknown as CloudinaryAsset[]
    )[0];

    return {
      image: cloudinaryImage,
      thumbnail: cloudinaryThumbnail,
      altText: image.fields.altText
    };
  });

  return formattedImages;
}

export async function getPage(slug: string) {
  const pages = await client.getEntries<TypeBlogPostSkeleton>({
    content_type: 'blogPost',
    'fields.slug[match]': slug
  });

  return pages.items[0];
}

export async function getPageSlugs() {
  const options = {
    content_type: 'blogPost',
    select: 'fields.slug'
  } as const;

  const slugs = await client.getEntries<TypeBlogPostSkeleton>(options);

  const paths = slugs.items.map((post) => ({
    params: { slug: post.fields.slug }
  }));

  return paths;
}
