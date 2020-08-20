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
