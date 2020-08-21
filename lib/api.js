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

  const formattedImages = images.items.map(
    (image) => image.fields.image[0].secure_url
  );
  return formattedImages;
}
