import { createClient } from 'contentful';

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
});

export async function getHero() {
  const heros = await client.getEntries({
    content_type: 'hero',
    'fields.category.sys.contentType.sys.id': 'category',
    'fields.category.fields.name[match]': 'Home'
  });
  return heros.items[0];
}

export async function getImages() {
  const images = await client.getEntries({
    content_type: 'image',
    'fields.category.sys.contentType.sys.id': 'category',
    'fields.category.fields.name[match]': 'Home'
  });

  const formattedImages = images.items.map((image) => ({
    image: image.fields.image[0],
    thumbnail: image.fields.thumbnail[0],
    altText: image.fields.altText
  }));
  return formattedImages;
}

export async function getPage(slug) {
  const pages = await client.getEntries({
    content_type: 'blogPost',
    'fields.slug[match]': slug
  });
  
  return pages.items[0];
}

export async function getPageSlugs() {
  const slugs = await client.getEntries({
    content_type: 'blogPost',
    select: 'fields.slug'
  });
  
  const paths = slugs.items.map((post) => ({
    params: { slug: post.fields.slug }
  }));
  
  return paths;
}
